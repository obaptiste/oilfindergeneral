import { Component } from '@angular/core';
import { OilTableService } from './oil-table.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers:[OilTableService]

})
export class AppComponent {

  //oilsCollection: AngularFirestoreCollection
  title = 'oilfinder';
  tasks: Observable<any[]>;
  constructor(private db: AngularFirestore, private oilTableService: OilTableService) {
    
  }

  ngOnInit() {
    this.tasks = this.db.collection('tasks').valueChanges();
  }
}
