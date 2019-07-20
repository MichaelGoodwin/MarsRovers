import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, throwError } from 'rxjs';
import { Manifest } from '../services/beans/Manifest';
import { Photo } from '../services/beans/Photo';
import { NasaApiService } from '../services/nasa-api.service';
import { catchError, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Rovers } from './Rovers';
import { RoverPage } from './RoverPage';
import { IAlbum, Lightbox, LightboxConfig } from 'ngx-lightbox';

@Component({
  selector: 'app-rover-page',
  templateUrl: './rover-page.component.html',
  styleUrls: ['./rover-page.component.scss']
})
export class RoverPageComponent implements OnInit, OnDestroy {
  private rover: RoverPage;
  private loading = true;

  private manifestSub: Subscription;
  private manifest: Manifest;
  private photos: Photo[];
  private album: Array<IAlbum> = [];

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
    this.getRoverData();
  }

  private getRoverData(): void {
    this.loading = true;
    this.manifestSub = this.nasaApiService.getRoverManifest(this.rover.name).pipe(
      catchError(err => {
        console.log(err);
        return throwError(err);
      }),
      switchMap(manifest => {
        this.manifest = manifest;
        return this.nasaApiService.getTodaysRoverPhotos(this.rover.name);
      })
    ).subscribe(
      photos => {
        this.photos = photos;
        this.album = [];

        console.log(this.manifest);
        console.log(this.photos);
        for (const photo of photos) {
          const caption = 'Photo taken on ' + photo.earth_date + ' (sol ' + photo.sol
            + ') by ' + photo.rover.name + '\'s ' + photo.camera.full_name;
          const pic = {src: photo.img_src, thumb: photo.img_src, caption };
          this.album.push(pic);
        }
      },
      err => console.log(err),
      () => {
        // Ensure loading screen shows for at least 300ms
        setTimeout(() => this.loading = false, 300);
        console.log('Completed photos');
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
    this.manifestSub.unsubscribe();
    this.lightbox.close();
  }

  earthDaysOnMars(): number {
    const landingDate: Date = this.nasaApiService.getDateFromNasaDate(this.manifest.landing_date);
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    return Math.trunc((+new Date() - +landingDate) / millisecondsPerDay);
  }

  open(index: number): void {
    this.lightbox.open(this.album, index);
  }

  close(): void {
    this.lightbox.close();
  }
}
