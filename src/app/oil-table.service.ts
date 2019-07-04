import { Injectable } from '@angular/core';
import { config } from "./app.config";
import { Task } from "./app.model";
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';



@Injectable()
export class OilTableService {

  tasks: AngularFirestoreCollection<Task>;
  private taskDoc: AngularFirestoreDocument<Task>;

  constructor (private db: AngularFirestore) {
    
    // Get the tasks collection

    this.tasks = db.collection<Task>(config.collection_endpoint);
  }

  addTask(task) {
    //Add a new Oil

    this.tasks.add(task);
  
  }// addTask
  
  updateTask(id, update) {
    //get the oil document

    this.taskDoc = this.db.doc<Task>
    (`$(config.collection_endpoint)/$(id)`);

    this.taskDoc.update
  } // updateTask


}