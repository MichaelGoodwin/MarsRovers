import { Component, OnInit } from '@angular/core';
import { RoverPage } from '../rover-page/RoverPage';
import { Rovers } from '../rover-page/Rovers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private rovers = Rovers;
  constructor() { }

  ngOnInit() {
  }

  getRovers(): Array<RoverPage> {
    return Object.values(this.rovers);
  }
}
