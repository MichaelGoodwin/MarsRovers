import { Component, OnInit, Input } from '@angular/core';
import { state, style, trigger, transition, animate, animateChild, query, group } from '@angular/animations';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  animations: [
    trigger('fade', [
      state('out', style({
        opacity: 0,
        display: 'none'
      })),
      state('in', style({
        opacity: 1,
        display: 'block'
      })),
      transition('out => in', [
        animate('0s'),
      ]),
      transition('in => out', [
        group([
          query('@shrink', animateChild()),
          animate('700ms')
        ])
      ])
    ]),
    trigger('shrink', [
      state('out', style({
        transform: 'scale(0.01)'
      })),
      transition('* => out', [
        animate('700ms')
      ])
    ])
  ]
})
export class LoadingComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  private _flag = true;

  @Input() set flag(value: boolean) {
    if (this._flag === value) {
      return;
    }

    const delay = value ? 0 : this.delay;
    setTimeout(() => this._flag = value, delay);
  }

  get flag() {
    return this._flag;
  }

  @Input() delay = 0;

  constructor() { }

  ngOnInit() {
  }

}
