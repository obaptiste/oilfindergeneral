import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { OilTableService } from '../oil-table.service';
import  { Oil } from "../oil";
import { Http } from '@angular/http';
// TODO: Replace this with your own data model type
export interface Oil {
  name: string;
  id: number;
  description: string;
}


// TODO: replace this with real data from your application
const OIL_DATA: Oil[] = [
  {id: 1, name: "Lavender", description: "relaxing, burn ointment" },
  {id: 2, name: "Rosemary", description: "memory" },
  {id: 3, name: "Oregano", description: "anti-inflammatory" },
  {id: 4, name: "Copaiba", description: "relaxing, burn ointment" },
  {id: 5, name: "Neroli", description: "relaxing, burn ointment" },
  {id: 6, name: "Eucalyptus", description: "decongestant" },
  {id: 7, name: "Sandlewood", description: "aphrodisiac" },
  {id: 8, name: "Pettigrain", description: "calms sudden angry outbursts" },
  {id: 9, name: "Palmarosa", description: "" },
  {id: 10, name: "Melissa", description: "" },
  {id: 11, name: "Jatamansi", description: "" },
  {id: 12, name: "Ylang Ylang", description: ""},
  {id: 13, name: "Cinnammon", description: ""},
  {id: 14, name: "Tea Tree", description: ""},
  {id:15, name: "Bog Myrtle", description: ""},
  {id:16, name: "Jasmin", description: ""},
  {id:17, name: "Jatamansi", description: ""},
  {id: 18, name: "Rose", description: ""},
  {id:19, name: "Lemon", description: ""},
  {id:20, name: "Orange", description: ""},
  {id:21, name: "Pink Grapefruit", description: ""},
  {id:22, name: "Borage", description: ""}
];
const OIL_DATA2: Oil[] = [];



/**
 * Data source for the OilTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class OilTableDataSource extends DataSource<Oil> {
  data: Oil[] = OIL_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Oil[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Oil[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Oil[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'description': return compare(a.description, b.description, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
