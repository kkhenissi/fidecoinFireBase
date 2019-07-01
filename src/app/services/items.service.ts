import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private fs: AngularFirestore) { }


  getAllItems() {
    return this.fs.collection('items').snapshotChanges();
  }
}
