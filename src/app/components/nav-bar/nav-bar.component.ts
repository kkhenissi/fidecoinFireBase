import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  showhideNav: boolean = false;
  isUser: boolean = false;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.authService.user.subscribe(usr => {
      if (usr) {
          this.isUser = true;
          this.authService.userId = usr.uid;
      } else {
          this.isUser = false;
      }
    })
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
