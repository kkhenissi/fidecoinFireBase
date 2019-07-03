import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from 'src/app/interfaces/item.iterface';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  @ViewChild('photo', { static: true }) itemPhoto: ElementRef;

  constructor(private itemService: ItemsService) { }

  ngOnInit() {
  }

  addNewItem(form: NgForm) {
   const newItem =  {
     name         : (form.value as Item).name,
     description  : (form.value as Item).description,
     currentPrice : (form.value as Item).currentPrice,
     quantite     : (form.value as Item).quantite
   };
    // tslint:disable-next-line:one-variable-per-declaration
    // tslint:disable-next-line:align
    const  photo = (this.itemPhoto.nativeElement as HTMLInputElement).files[0];
   this.itemService.addNewItem(newItem, photo);
  }

}
