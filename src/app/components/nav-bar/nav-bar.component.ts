import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  showhideNav: boolean = false;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  showHide() {
    this.showhideNav = !this.showhideNav;

  }
  logout() {
    this.authService.logout()
                     .then(() => console.log('loged out'));
                     this.router.navigate(['/login']);
  }

}
