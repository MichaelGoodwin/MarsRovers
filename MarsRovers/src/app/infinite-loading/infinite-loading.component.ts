// tslint:disable-next-line:max-line-length
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-infinite-loading',
  template: `<ng-content></ng-content><div #anchor></div>`,
  encapsulation: ViewEncapsulation.None
})
export class InfiniteLoadingComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() options = {};
  @Output() scrolled = new EventEmitter();
  @ViewChild('anchor', {static: false}) anchor: ElementRef<HTMLElement>;

  private observer: IntersectionObserver;

  constructor(private host: ElementRef) { }

  ngOnInit() {
    const options = {
      root: null,
      ...this.options
    };

    this.observer = new IntersectionObserver(([entry]) => {
      return entry.isIntersecting && this.scrolled.emit();
    }, options);
  }

  ngAfterViewInit(): void {
    this.observer.observe(this.anchor.nativeElement);
  }

  get element() {
    return this.host.nativeElement;
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }

  public refreshObserver() {
    this.observer.unobserve(this.anchor.nativeElement);
    this.observer.observe(this.anchor.nativeElement);
  }
}
