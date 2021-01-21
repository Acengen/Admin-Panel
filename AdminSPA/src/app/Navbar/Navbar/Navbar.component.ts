import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Navbar',
  templateUrl: './Navbar.component.html',
  styleUrls: ['./Navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isActiveNav:boolean;
  constructor() { }

  ngOnInit() {
  }

  openNav() {
    this.isActiveNav = !this.isActiveNav
  }

}
