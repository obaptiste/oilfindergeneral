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
    this.db.collection("oils").add({
      name: "Parsley",
      shrtDesc: "The health benefits of Parsley Essential Oil can be attributed to its properties as an antimicrobial, anti-rheumatic, anti-arthritic, antiseptic, astringent, carminative, circulatory, detoxifier, digestive, diuretic, depurative, emmenagogue, febrifuge, hypotensive, laxative, stimulant, stomachic and uterine substance.",
      longDesc: "Rheumatism and arthritis are two diseases that are caused by two main reasons, namely, the accumulation of uric acid in the muscles and joints, as well as obstructed blood circulation. The essential oil of parsley has certain properties which can help you with both of these causes. First of all, it is a detoxifying agent and a depurative, which is due to the diuretic and stimulant properties that it possesses. While a detoxifier speeds up the removal of toxins from the body, a depurative purifies and refreshes the blood. Now, as a diuretic, it also increases urination, and as we all know, the toxic and unwanted substances of the body such as excess water, salts, and uric acid are removed through urine. Then, as a stimulant, it stimulates the flow of blood or increases circulation. This helps in two ways. First, it warms up the body and second, it does not let uric acid accumulate at any particular place, giving relief from the pain of arthritis and gout.",
      tags: "antimicrobial, anti-rheumatic, anti-arthritic, antiseptic, astringent, carminative, circulatory, detoxifier, digestive, diuretic, depurative, emmenagogue, febrifuge, hypotensive, laxative, stimulant, stomachic"
  })
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id, document);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
  }

  doTheThing () {
    console.log('uoo');
    this.db.collection("oils").get().subscribe((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
          console.log(doc)
      });
  });
  }
}
