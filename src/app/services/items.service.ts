import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Item } from '../interfaces/item.iterface';
import { AngularFireStorage } from '@angular/fire/storage';
import { reject } from 'q';

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
    return new Promise((resolve) => {
      const ref =  this.storage.ref('items/' + photo.name);
      console.log('+-+-+-+-+-+-+-+-+-+-', photo.name);
      ref.put(photo).then(() => {
          ref.getDownloadURL().subscribe(photoUrl => {
          // item.photoUrl = photoUrl;
          this.fs.collection('items').add({
            item,
            photoUrl
          }).then(() => resolve('item is added succefully !'));
      });
      });
    });

  //   {
  //     // tslint:disable-next-line:no-shadowed-variable
  //     return new Promise((resolve, reject) => {
  //       const ref =  this.storage.ref('items/' + photo.name);
  //       console.log('+-+-+-+-+-+-+-+-+-+-', photo.name);
  //       ref.put(photo).then(() => {
  //           ref.getDownloadURL().subscribe(photoUrl => {
  //           // item.photoUrl = photoUrl;
  //           this.fs.collection('items').add({
  //             item,
  //             photoUrl
  //           }).then(() => resolve('item is added succefully !'));
  //       });
  //       }).catch(() => reject ('item dont added problem fo upload !!'));
  //     });
  // }

}
}

