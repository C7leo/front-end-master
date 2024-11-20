import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {BaseService} from "../../shared/services/base.service";
import {Meals} from "../model/meals.entity";
@Injectable({
  providedIn: 'root'
})
export class PowerLiftingService extends BaseService<Meals> {
  constructor() {
    super();
    this.resourceEndPoint = '/api/v1/meals';
  }

  public getAllPowerLifting(): Observable<Meals[]> {
    return this.http.get<Meals[]>(this.resourcePath(), this.httpOptions);
  }
}
