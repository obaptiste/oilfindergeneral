import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTable } from '@angular/material';
import { OilTableDataSource, Oil } from './oil-table-datasource';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oil-table',
  templateUrl: './oil-table.component.html',
  styleUrls: ['./oil-table.component.css']
})
export class OilTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<Oil>;
  dataSource: OilTableDataSource;
  selectedOil: Oil;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'description'];

  constructor(private router: Router){}

  ngOnInit() {
    this.dataSource = new OilTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  onRowClicked(row) {
    console.log('row clicked: ', row.description);
  }

  onOilClicked(event: Event){
    console.log(event);
  }


  onSelect(oil: Oil): void {
    this.selectedOil = oil;
    console.log('Selected Oil is: ' + oil.name)
  }

  seeDetail(oil: Oil) {
    this.router.navigate(['/oils', oil.id])
  }

}
