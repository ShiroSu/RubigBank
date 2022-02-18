import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Response {
  success: boolean;
  timestamp: number;
  base: string;
  dates: any;
  rates: any;
}

@Injectable({providedIn: 'root'})
export class CurrencyService {
  constructor(private http: HttpClient) { }
  
  
  getAllCurrencies() {
    return this.http.get<any>('https://freecurrencyapi.net/api/v2/latest?apikey=55b57410-9004-11ec-953f-f36ced380495&base_currency=AZN');
  }
}