import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/item.iterface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: Array<Item> = [
    {name: 'nickon1', description: 'Desction of nickon1', currentPrice: 185.00, photoUrl:'assets/images/nickon1.png' },
    {name: 'nickon2', description: 'Desction of nickon2', currentPrice: 175.00, photoUrl:'assets/images/nickon2.png' },
    {name: 'nickon3', description: 'Desction of nickon3', currentPrice: 165.00, photoUrl:'assets/images/nickon3.png' },
    {name: 'nickon4', description: 'Desction of nickon4', currentPrice: 155.00, photoUrl:'assets/images/nickon4.png' },
    {name: 'nickon5', description: 'Desction of nickon5', currentPrice: 145.00, photoUrl:'assets/images/nickon5.png' },

  ]
  constructor() { }

  ngOnInit() {
  }
  addToCart(itm) {
    console.log('55555555555555555', itm)
  }

}
