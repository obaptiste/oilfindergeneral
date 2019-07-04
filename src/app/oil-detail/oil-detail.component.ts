import { Component, OnInit } from '@angular/core';
import { OilTableDataSource, Oil } from '../oil-table/oil-table-datasource';
import { OilTableService } from '../oil-table.service';
import { ActivatedRoute } from '@angular/router';
//import { Oil } from '../oil';

@Component({
  selector: 'app-oil-detail',
  templateUrl: './oil-detail.component.html',
  styles: [],
  providers:[OilTableService]
   
})
export class OilDetailComponent implements OnInit {
  dataSource: OilTableDataSource;
  selectedOil: Oil[];
  Oil: Oil[];
  
  constructor(
    private oilTableService: OilTableService
  ) { 
  }

  ngOnInit() {
    this.dataSource = new OilTableDataSource();
  }

}
