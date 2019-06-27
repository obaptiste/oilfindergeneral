import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OilTableComponent } from './oil-table/oil-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule } from '@angular/material';
import { OilDetailComponent } from './oil-detail/oil-detail.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {OilTableService} from './oil-table.service';
import { RouterModule } from '@angular/router';
import { Http, HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    OilTableComponent,
    OilDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
    // RouterModule.forRoot([
    //   { path: '', component:OilTableComponent },
    //   { path: '', 'oils/:oilId', component: OilDetailComponent}
    // ])
  ],
  providers: [OilTableService],
  bootstrap: [AppComponent],
  exports: [OilDetailComponent]
})
export class AppModule { }
