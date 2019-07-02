import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Shopping } from 'src/app/interfaces/shopping.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Shopping[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getCart()
        .subscribe((cart) => {
          this.cart = cart.map(shopping => {
            return {
              id: shopping.payload.doc.id,
              ...shopping.payload.doc.data()
            }
          })
          console.log('oooooooooooooooooooooooooo', this.cart)

        }, err => { console.log('eeeerrrr', err)})
  }

}
