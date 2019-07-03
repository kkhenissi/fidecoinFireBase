import { Component, OnInit, OnDestroy } from '@angular/core';
import { Item } from 'src/app/interfaces/item.iterface';
import { ItemsService } from 'src/app/services/items.service';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  items: Array<Item> = [];
  itemsSubscription: Subscription;
  add: number = -1;
  amountValue: number = 0;
  constructor(private itemsService: ItemsService,
              private cartService: CartService) { }

  ngOnInit() {
   this.itemsSubscription =  this.itemsService.getAllItems()
         .subscribe(data => {
          // tslint:disable-next-line:no-shadowed-variable
          this.items = data.map( element => {
            return {
              id: element.payload.doc.id,
              ...element.payload.doc.data()
            };
          });
         }, err => {
           console.log(err);
         });
  }
  addToCart(index: number) {
      this.add = +index;

  }

  ngOnDestroy(): void {
    this.itemsSubscription.unsubscribe();

  }
  buy(amount: number) {
    const selectedItem = this.items[this.add];
    const data = {
      name: selectedItem.name,
      amount: +amount,
      currentPrice: selectedItem.currentPrice
    };
    this.cartService.cartElements = this.amountValue;
    this.cartService.addToCart(data)
         .then(() => {
         this.add = -1;
       })
       .catch(err => {});
  }

}
