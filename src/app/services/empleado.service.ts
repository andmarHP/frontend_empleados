import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { Observable } from 'rxjs';
import { Empleado } from '../Interface/empleado';


@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private readonly endpoint:string = environment.endPoint;
  private readonly apiUrl:string = this.endpoint + 'empleados';

  constructor( private _http:HttpClient ) { }

  public getList():Observable<Empleado>{
    return this._http.get<Empleado>(`${this.apiUrl}/lista`);
  }

  public add(modelo:Empleado):Observable<Empleado>{
    return this._http.post<Empleado>(`${this.apiUrl}/guardar`, modelo); 
  }

  public update(idEmpleado:number, modelo:Empleado):Observable<Empleado>{
    return this._http.put<Empleado>(`${this.apiUrl}/actualizar/${idEmpleado}`, modelo); 
  }

  public delete(idEmpleado:number):Observable<any>{
    return this._http.delete<any>(`${this.apiUrl}/eliminar/${idEmpleado}`); 
  }

}
