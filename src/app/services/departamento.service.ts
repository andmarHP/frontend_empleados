import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { Observable } from 'rxjs';
import { Departamento } from '../Interface/departamento';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  private readonly endpoint:string = environment.endPoint;
  private readonly apiUrl:string = this.endpoint + 'departamento';

  constructor( private _http:HttpClient) { }

  public getList():Observable<Departamento>{
    return this._http.get<Departamento>(`${this.apiUrl}/lista`);
  }


}
