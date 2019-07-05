import { Component } from '@angular/core';
import { OilTableService } from './oil-table.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
//import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers:[OilTableService]

})
export class AppComponent {

  //oilsCollection: AngularFirestoreCollection
  title = 'Oil Finder';
  desc = 'Seeing if we can hook up a backend...'
  oils: Observable<any[]>;
  oilValue = '';
  constructor(public db: AngularFirestore, private oilTableService: OilTableService) {
    this.oils = db.collection('oils').valueChanges();
  }

  
  onSubmit () {
    this.db.collection("users").add({
      first: "Ada",
      last: "Lovelace",
      born: 1815
  })
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
  }

  doTheThing () {
    console.log('uoo');
  //   db.collection("users").get().then((querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //         console.log(`${doc.id} => ${doc.data()}`);
  //     });
  // });
  }
}
