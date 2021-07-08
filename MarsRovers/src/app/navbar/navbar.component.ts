import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoverPage } from '../rover-page/RoverPage';
import { Rovers } from '../rover-page/Rovers';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbarCollapsed: boolean;
  private rovers = Rovers;

  constructor(private router: Router) {
    this.navbarCollapsed = true;
  }

  ngOnInit() {
  }

  isActive(url: string) {
    return this.router.url === ('/' + url);
  }

  getRovers(): Array<RoverPage> {
    return Object.values(this.rovers);
  }
}
