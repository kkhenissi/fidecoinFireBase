import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  showhideNav: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showHide() {
    this.showhideNav = !this.showhideNav;

  }

}
