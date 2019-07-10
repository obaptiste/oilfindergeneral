import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule, MatCardModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { OilDetailComponent } from './oil-detail/oil-detail.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {OilTableService} from './oil-table.service';
import { RouterModule } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { OilComponent } from './oil-table/oil/oil.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { OilOverviewComponent } from './oil-overview/oil-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    OilDetailComponent,
    OilComponent,
    routingComponents,
    NavigationComponent,
    OilOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'oil-manager'),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AngularFireDatabaseModule, LayoutModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule 
  ],
  providers: [OilTableService],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
