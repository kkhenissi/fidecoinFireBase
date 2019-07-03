import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Item } from '../interfaces/item.iterface';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private fs: AngularFirestore,
              private storage: AngularFireStorage) { }


  getAllItems() {
    return this.fs.collection('items').snapshotChanges();
  }
  addNewItem(item, photo: File) {
  const ref =  this.storage.ref('items/' + photo.name);
  console.log('+-+-+-+-+-+-+-+-+-+-', photo.name);
  ref.put(photo).then(() => {
    ref.getDownloadURL().subscribe(photoUrl => {
      // item.photoUrl = photoUrl;
      this.fs.collection('items').add({
        item,
        photoUrl
      });
  });

  });
}
}

