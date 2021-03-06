import { Component, OnInit, OnDestroy, OnChanges, AfterContentInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { Item } from 'src/app/interfaces/item.iterface';
import { ItemsService } from 'src/app/services/items.service';
import { Subscription, Observable, interval } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewChecked {
  items: Array<Item> = [];
  sourcef = interval(1000);
  

  currentPriceDecrement: Observable<number>;
 
  itemsSubscription: Subscription;
  add: number = -1;
  amountValue: number = 0;
  constructor(private itemsService: ItemsService,
              private cartService: CartService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
   this.itemsSubscription =  this.itemsService.getAllItems()
         .subscribe(data => {
          this.items = data.map( element => {
            return {
              id: element.payload.doc.id,
              ...element.payload.doc.data()
            };
          });
         }, err => {
           console.log(err);
         });

 
  interval(3000).subscribe(()=> {
          const   randItemId = this.items[Math.floor(Math.random() * this.items.length)];
          // const currentPriceDec = (randItemId['item'].currentPrice - 1);
          // const nama2tem = randItemId['item'].name;
          // const descrItem = randItemId['item'].description;
           randItemId['item'].currentPrice = randItemId['item'].currentPrice -1;
          // randItemId.name = namaItem;
          // randItemId.description = descrItem;
    
           this.decreseCurrentPrice(randItemId.id, randItemId['item']);
        console.log('iiiiiiinnnnnnnn hhhhhhooommmeecccooommmmpp', randItemId['item'] );
        })
  
      
  }

  ngAfterViewChecked() {
   
  }
  addToCart(index: number) {
    // tslint:disable-next-line:curly
    if (this.authService.userId) this.add = +index;
    // tslint:disable-next-line:curly
    else this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    this.itemsSubscription.unsubscribe();

  }
  buy(amount: number) {
    const selectedItem = this.items[this.add];
    console.log('Selected item ====>', selectedItem);
   
    const data = {
      name: selectedItem['item'].name,
      amount: +amount,
      currentPrice: selectedItem['item'].currentPrice,
      itemPhoto: selectedItem['photoUrl']
    };
    this.cartService.cartElements = this.amountValue;
    this.cartService.addToCart(data)
         .then(() => {
         this.add = -1;
       })
       .catch(err => {});
  }
  decreseCurrentPrice(id, item) {
  

  //  this.cartService.saveInCart(this.cart[index].id, this.cart[index].amount);
  console.log('this.items.id ====>', id);
    this.itemsService.decreseCurrentPrice(id, item);
    
 }
}
