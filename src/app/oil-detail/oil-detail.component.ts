import { Component, OnInit } from '@angular/core';
import { OilTableDataSource, Oil } from '../oil-table/oil-table-datasource';
import { OilTableService } from '../oil-table.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
//import { Oil } from '../oil';

@Component({
  selector: 'app-oil-detail',
  templateUrl: './oil-detail.component.html',
  styles: [],
  providers:[OilTableService]
   
})
export class OilDetailComponent implements OnInit {
  dataSource: OilTableDataSource;
  selectedOil: Oil;
  Oil: Oil[];
  public oilId;
  
  
  constructor(
    private oilTableService: OilTableService,
    private route: ActivatedRoute,
    private router : Router
  ) { 
  }

  ngOnInit() {
    this.dataSource = new OilTableDataSource();

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.oilId = id;
      this.selectedOil = this.dataSource.data.find((oil) => oil.id == id) 
      console.log(this.selectedOil.name);
    });
  }

   goPrevious() {
     let previousId = this.oilId -1;
     this.router.navigate(['/oils', previousId])
   } 

   goNext() {
    let nextId = this.oilId + 1;
    this.router.navigate(['/oils', nextId])
  } 
}
