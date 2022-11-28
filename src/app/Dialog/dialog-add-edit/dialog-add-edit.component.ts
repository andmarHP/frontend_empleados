import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';  // dialog
import { MatSnackBar } from '@angular/material/snack-bar';  //alertas
import { MAT_DATE_FORMATS } from '@angular/material/core';  //formato fecha
import * as moment from 'moment';

import { Departamento } from 'src/app/Interface/departamento';
import { Empleado } from 'src/app/Interface/empleado';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { EmpleadoService } from 'src/app/services/empleado.service';

//configurar formato de las fechas
export const MY_DATE_FORMAT = {
  parse:{
    dateInput:'DD/MM/YYYY',
  },
  display:{
    dateInput:'DD/MM/YYYY',
    monthYearLabel:'MMMM YYYY',
    dateA11yLabel:'LL',
    monthYearA11yLabel:'MMMM YYYY',
  }
}

@Component({
  selector: 'app-dialog-add-edit',
  templateUrl: './dialog-add-edit.component.html',
  styleUrls: ['./dialog-add-edit.component.css'],
  providers: [
    {
      provide: MAT_DATE_FORMATS,
      useValue: MY_DATE_FORMAT
    }
  ]
})
export class DialogAddEditComponent implements OnInit{

  formEmpleado:FormGroup;

  tituloAccion:string = 'Nuevo';
  botonAccion:string = 'Guardar';
  listaDepartamentos: Departamento[] = [];

  constructor( private _dialogoReferencia:MatDialogRef<DialogAddEditComponent>,
               private _fb:FormBuilder,
               private _snackBar:MatSnackBar,
               private _empleadoService:EmpleadoService,
               private _departamentoService:DepartamentoService) 
  {
    this.formEmpleado = this._fb.group({
      nombreCompleto:['', Validators.required],
      idDepartamento:['', Validators.required],
      sueldo:['', Validators.required],
      fechaContrato:['', Validators.required],
    })

    //obtener lista de departamento para pintarlo en mat select
    this._departamentoService.getList()
      .subscribe({
        next: (data:any)=>{
          this.listaDepartamentos = data;
        },
        error:(error:any)=>{

        }
      })

  }

  // metodo para alertas 
  mostrarAlerta(message:string, accion:string){
    this._snackBar.open(message,accion,{
      horizontalPosition:"end",
      verticalPosition: "top",
      duration: 3000,
      panelClass: ['snackbar-theme-dialog']
    });
  }

  // metodo para enviar 
  addEditEmpleado(){
    console.log(this.formEmpleado)
    console.log(this.formEmpleado.value)

  }

  ngOnInit(): void {
      
  }  

}
