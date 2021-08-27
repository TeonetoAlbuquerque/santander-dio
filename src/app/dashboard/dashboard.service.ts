import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Stock from '../shared/model/stocke-model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  readonly baseUrl = 'https://evening-temple-93313.herokuapp.com/bootcamp/stocker';


  constructor(private http: HttpClient) { }

  async getStock(): Promise<Stock[]>{
    return this.http.get<Stock[]>(this.baseUrl).toPromise();

  }
}
