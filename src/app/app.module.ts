import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CartComponent } from './components/cart/cart.component';
import { ItemsComponent } from './components/items/items.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AccountComponent } from './components/account/account.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    ItemsComponent,
    OrdersComponent,
    AccountComponent,
    NotFoundComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyBp5mKyvSCK8ZtZeoMWqisXtFJXCMJx02k',
      authDomain: 'fidecoinfireb.firebaseapp.com',
      databaseURL: 'https://fidecoinfireb.firebaseio.com',
      projectId: 'fidecoinfireb',
      storageBucket: '',
      messagingSenderId: '219536801527',
      appId: '1:219536801527:web:da5cc726d77d3119'
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
