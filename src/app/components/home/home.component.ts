import { Component, OnInit, OnDestroy } from '@angular/core';
import { Item } from 'src/app/interfaces/item.iterface';
import { ItemsService } from 'src/app/services/items.service';
import { element } from 'protractor';
import { Subscription } from 'rxjs';
 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  items: Array<Item> = [];
  itemsSubscription: Subscription;
  constructor(private itemsService: ItemsService) { }

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
  addToCart(id) {
    console.log('55555555555555555', id);
  }

  ngOnDestroy(): void {
    this.itemsSubscription.unsubscribe();

  }

}
