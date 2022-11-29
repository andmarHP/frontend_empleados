import { Component } from '@angular/core';
import { Empleado } from './Interface/empleado';
import { EmpleadoService } from './services/empleado.service';

//material design
import {AfterViewInit, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
//dialog 
import {MatDialog} from '@angular/material/dialog';

//componente del dialog
import { DialogAddEditComponent } from './Dialog/dialog-add-edit/dialog-add-edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  
  displayedColumns: string[] = ['NombreCompleto', 'Departamento', 'Sueldo', 'FechaContrato','Acciones'];
  dataSource = new MatTableDataSource<Empleado>();
  
  constructor( private _empleadoService:EmpleadoService, public dialog: MatDialog) 
  {
     
  } 

  ngOnInit(): void {
    this.mostrarEmpleados();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  applyFilter( event:Event ){
    const filterValue = ( event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  mostrarEmpleados(){
    this._empleadoService.getList()
      .subscribe({
        next:(dataResponse:any) =>{
          console.log(dataResponse);
          this.dataSource.data = dataResponse;
        },
        error:(error) =>{
          console.log(error);
        }
      })
  }

  dialogoNuevoEmpleado(){
    this.dialog.open(DialogAddEditComponent,{
      disableClose:true,
      width:"450px"
    }).afterClosed().subscribe( resultado =>{
      if(resultado === "creado"){
        this.mostrarEmpleados();
      }
    })
  }

  dialogoEditarEmpleado(dataEmpleado:Empleado){
    this.dialog.open(DialogAddEditComponent,{
      disableClose:true,  //deshabilitar cuando se presione fuera del modal
      width:"450px",
      data:dataEmpleado
    }).afterClosed().subscribe( resultado =>{
      if(resultado === "editado"){
        this.mostrarEmpleados();
      }
    })
  }
}
