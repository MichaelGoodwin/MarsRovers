import { Component, OnInit, OnDestroy, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Subscription, throwError } from 'rxjs';
import { Manifest } from '../services/beans/Manifest';
import { Photo } from '../services/beans/Photo';
import { NasaApiService } from '../services/nasa-api.service';
import { catchError, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Rovers } from './Rovers';
import { RoverPage } from './RoverPage';
import { IAlbum, Lightbox, LightboxConfig } from 'ngx-lightbox';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { ManifestPhoto } from '../services/beans/ManifestPhoto';
import { InfiniteLoadingComponent } from '../infinite-loading/infinite-loading.component';

@Component({
  selector: 'app-rover-page',
  templateUrl: './rover-page.component.html',
  styleUrls: ['./rover-page.component.scss']
})
export class RoverPageComponent implements OnInit, OnDestroy {
  @ViewChild('photoHeader', {static: false}) photoHeader: ElementRef<HTMLElement>;
  @ViewChild('roverInfo', {static: false}) roverInfo: ElementRef<HTMLElement>;
  @ViewChild('gallery', {static: false}) gallery: ElementRef<HTMLElement>;
  @ViewChild(InfiniteLoadingComponent, {static: false}) infiniteLoading;

  private queryDate: string; // NASA date format
  private rover: RoverPage;
  loading = true;
  galleryLoading = false;

  private manifestSub: Subscription;
  private manifest: Manifest;
  private photos: Photo[] = [];
  private album: Array<IAlbum> = [];
  private dateMap: Map<string, ManifestPhoto> = new Map();
  private cameras: any = {};
  // Stores the cameras available by name
  albumSet: Set<string> = new Set();
  selectedDate: NgbDate;

  limit = 10;
  increment = 8;
  headerHeight = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private nasaApiService: NasaApiService,
    private lightbox: Lightbox,
    private lightboxConfig: LightboxConfig
  ) {
    this.route.params.subscribe(params => {
      this.handleRouteChange(params);
    });

    // set default config
    this.lightboxConfig.fadeDuration = 1;
    this.lightboxConfig.centerVertically = true;
    this.lightboxConfig.fitImageInViewPort = true;
    this.lightboxConfig.showImageNumberLabel = true;
  }

  private handleRouteChange(params): void {
    const id = params.id.toUpperCase();
    if (!(id in Rovers)) {
      this.router.navigate(['/']);
      return;
    }

    this.rover = Rovers[id];
    this.rover.cameras.forEach(c => this.cameras[c.name] = true);
    this.getRoverData();
  }

  private getRoverData(): void {
    this.loading = true;
    this.manifestSub = this.nasaApiService.getRoverManifest(this.rover.name)
    .subscribe(
      manifest => {
        this.manifest = manifest;
        this.queryDate = manifest.max_date;
        this.selectedDate = this.toDatepickerDate(this.queryDate);
        this.addDates();
      },
      err => console.log(err),
      () => {
        this.updateSelectedDate(this.selectedDate);
        // Ensure loading screen shows for at least 300ms
        setTimeout(() => this.loading = false, 300);
      }
    );
  }

  ngOnInit(): void {
    if (this.rover === undefined) {
      this.router.navigate(['/']);
      return;
    }
    // the route.params subscribe should trigger the initial getRoverDate as well
  }

  ngOnDestroy(): void {
    if (this.manifestSub !== undefined) {
      this.manifestSub.unsubscribe();
    }
    this.lightbox.close();
  }

  addDates(): void {
    const photos: ManifestPhoto[] = this.manifest.photos;
    for (const photo of photos) {
      if (photo.earth_date === undefined) {
        // The Spirit rover doesn't have earth_date specified so we need to estimate the time spent via sol
        if (photo.sol !== undefined) {
          const nasaDate = this.nasaApiService.estimateNasaDateFromPassedSols(this.manifest.landing_date, photo.sol);
          this.dateMap.set(nasaDate, photo);
        }
      } else {
        this.dateMap.set(photo.earth_date, photo);
      }
    }
  }

  earthDaysOnMars(): number {
    const landingDate: Date = this.nasaApiService.getDateFromNasaDate(this.manifest.landing_date);
    return Math.trunc((+new Date() - +landingDate) / this.nasaApiService.DAY_MILLISECONDS);
  }

  toDatepickerDate(nasaDateString: string): NgbDate {
    const dateValues: string[] = nasaDateString.split('-');
    if (dateValues.length !== 3) {
      return undefined;
    }

    return new NgbDate(
      parseInt(dateValues[0], 10),
      parseInt(dateValues[1], 10),
      parseInt(dateValues[2], 10)
    );
  }

  private ngbDateAsString(date: NgbDate) {
    return date.year + '-' + this.nasaApiService.zeroPad(date.month) + '-' + this.nasaApiService.zeroPad(date.day);
  }

  isDisabled = (date: NgbDate) => {
    return !this.dateMap.has(this.ngbDateAsString(date));
  }

  getTooltip = (date: NgbDate) => {
    const photo: ManifestPhoto = this.dateMap.get(this.ngbDateAsString(date));
    if (photo === undefined) {
      return null;
    }
    return  photo.total_photos + ' photo(s)';
  }

  private createAlbumImage(photo: Photo): IAlbum {
    const caption = 'Photo taken on ' + photo.earth_date + ' (sol ' + photo.sol
      + ') by ' + photo.rover.name + '\'s ' + photo.camera.full_name
      + ' - <a href="' + photo.img_src + '" target="_blank">Source image</a>';
    return {src: photo.img_src, thumb: photo.img_src, caption };
  }

  private refilterAlbum(): void {
    const arr: Array<IAlbum> = [];
    const set: Set<string> = new Set();
    for (const photo of this.photos) {
      if (this.cameras[photo.camera.name]) {
        const pic: IAlbum = this.createAlbumImage(photo);
        arr.push(pic);
      }
      set.add(photo.camera.name);
    }
    this.album = arr;
    this.albumSet = set;

    // Prevent no images from showing
    if (this.limit < 10) {
      this.limit = 10;
    }

    // Prevent loaded images label from being more than total images
    if (this.limit > this.album.length) {
      this.limit = this.album.length;
    }

    // Refresh observer to ensure we fetch new images if we are scrolled all the way down
    if (this.infiniteLoading !== undefined) {
      this.infiniteLoading.refreshObserver();
    }
  }

  updateSelectedDate(date: NgbDate): void {
    this.selectedDate = date;
    this.queryDate = this.ngbDateAsString(date);

    this.album = [];
    this.galleryLoading = true;

    // Query new photos for specified date
    this.nasaApiService.getRoverPhotosByEarthDate(this.rover.name, this.queryDate).subscribe(
      photos => {
        this.photos = photos;
        this.limit = 10;  // Reset limit when going to new date
        this.refilterAlbum();
      },
      err => console.log(err),
      () => {
        // Ensure loading screen shows for at least 300ms
        setTimeout(() => this.galleryLoading = false, 300);
      }
    );
  }

  updateCameraState(cameraName: string): void {
    this.cameras[cameraName] = !this.cameras[cameraName];
    this.refilterAlbum();
  }

  open(photo: IAlbum): void {
    this.lightbox.open(this.album, this.album.indexOf(photo));
  }

  close(): void {
    this.lightbox.close();
  }

  onScroll() {
    if (this.limit < this.album.length) {
      this.limit += this.increment;
      if (this.limit > this.album.length) {
        this.limit = this.album.length;
      }
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (this.roverInfo === undefined || this.photoHeader === undefined) {
      return;
    }

    if (window.scrollY < this.roverInfo.nativeElement.offsetHeight) {
      this.gallery.nativeElement.style.marginTop = '0px';
      this.photoHeader.nativeElement.classList.remove('photo-header');
    } else {
      this.headerHeight = Math.max(this.headerHeight, this.photoHeader.nativeElement.offsetHeight);
      this.gallery.nativeElement.style.marginTop = this.headerHeight + 'px';
      this.photoHeader.nativeElement.classList.add('photo-header');
    }
  }
}
