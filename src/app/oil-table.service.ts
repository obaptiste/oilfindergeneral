import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { map, tap, catchError } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Oil } from './oil';

@Injectable()
export class OilTableService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private oilsUrl = 'http://localhost:3000/oils';  // URL to web api
  constructor(private http: HttpClient, private httpParams: HttpParams) { }

/** get oils from the server */
  getOils(oilId: number, filter='', sortOrder='asc', pageNumber=0, 
pageSize=3):Observable<Oil[]>{
    return this.http.get(this.oilsUrl, {
      params: new HttpParams()
          .set('oilId', oilId.toString())
          .set('filter', filter)
          .set('sortOrder', sortOrder)
          .set('pageNumber', pageNumber.toString())
          .set('pageSize', pageSize.toString())
      }).pipe(
          tap(_ => this.log('fetched oils')),
          catchError(this.handleError('getOils', [])),
          map(res =>  {
        res["payload"] = res;
        console.log("yo",res);
        return res["payload"];
      })
      );
    }
  log(arg0: string): void {
    throw new Error("Method not implemented.");
  }
  handleError(arg0: string, arg1: undefined[]): any {
    throw new Error("Method not implemented.");
  }
}
