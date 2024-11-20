import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { Observable } from 'rxjs';
import {Meals} from "../model/meals.entity";

@Injectable({
  providedIn: 'root'
})
export class FoodService extends BaseService<Meals> {
  constructor() {
    super();
    this.resourceEndPoint = '/api/v1/meals';
  }

  public getAllFoodies(): Observable<Meals[]> {
    return this.http.get<Meals[]>(this.resourcePath(), this.httpOptions);
  }
}
