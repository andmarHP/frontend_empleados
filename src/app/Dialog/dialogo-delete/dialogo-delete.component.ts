import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';  // dialog
import { Empleado } from 'src/app/Interface/empleado';


@Component({
  selector: 'app-dialogo-delete',
  templateUrl: './dialogo-delete.component.html',
  styleUrls: ['./dialogo-delete.component.css']
})
export class DialogoDeleteComponent implements OnInit {


  constructor( private _dialogoReferencia:MatDialogRef<DialogoDeleteComponent>,
               @Inject(MAT_DIALOG_DATA) public dataEmpleado:Empleado){}

    ngOnInit(): void {  
    }
 
    confirmarEliminar(){
      if (this.dataEmpleado) {
        this._dialogoReferencia.close("eliminar")
      }
    }
}
