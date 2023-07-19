import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiList, Promo } from './entities';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromoService {

  constructor(private http:HttpClient) { }

  fetchAll() {
    return this.http.get<ApiList<Promo>>(environment.serverUrl+'/api/promos');
  }
  
  fetchOne(id:number) {
    return this.http.get<Promo>(environment.serverUrl+'/api/promos/'+id);
  }
}
