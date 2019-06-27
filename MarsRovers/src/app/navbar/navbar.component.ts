import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbarCollapsed: boolean;

  constructor(private router: Router) {
    this.navbarCollapsed = true;
  }

  ngOnInit() {
  }

  isActive(url: string) {
    return this.router.url === ('/' + url);
  }
}
