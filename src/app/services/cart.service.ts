import { Injectable } from '@angular/core';
import { Item } from '../interfaces/item.iterface';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartElements: number = 0;

  constructor(private afStore: AngularFirestore,
              private authService: AuthService) { }

  addToCart(data: Item) {
    return this.afStore.collection(`users/${this.authService.userId}/cart`).add(data);
  }

  getCart() {
    return this.afStore.collection(`users/${this.authService.userId}/cart`).snapshotChanges();

  }

  deleteInCart(id) {

    return this.afStore.doc(`users/${this.authService.userId}/cart/${id}`).delete();

  }
  saveInCart(id, amount) {
    return this.afStore.doc(`users/${this.authService.userId}/cart/${id}`).update({
      amount
    });

  }

  clearCart(id) {
    return this.afStore.doc(`users/${this.authService.userId}/cart/`).delete();

  }
}
