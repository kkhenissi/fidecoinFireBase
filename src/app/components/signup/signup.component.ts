import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/interfaces/user.interface';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  errorMessage: string = '';

  constructor(private authService: AuthService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }
  signup(f) {
     const data: User = f.value;
     console.log('000000000000000000000000000000', data);

     this.authService.signup(data.email, data.password)
           .then( result =>  {
             this.errorMessage = '';
             this.userService.addNewUser(result.user.uid, data)
                 .then(() => {
                    this.router.navigate(['/']);
                 });
            })
           .catch(err => {
              this.errorMessage = err;
           });

  }

}
