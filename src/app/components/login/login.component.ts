import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
 
 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: string;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  login(form) {
    const data = form.value;
    this.authService.login(data.email, data.password)
                    .then(result =>   {
                      this.errorMessage = '';
                      this.router.navigate(['/']);
                      })
                    .catch(err => this.errorMessage = err);

  }

}
