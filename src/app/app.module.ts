import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//to work with reactive forms
import { ReactiveFormsModule } from '@angular/forms';
//to work with http
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material/material.module';
import { DialogAddEditComponent } from './Dialog/dialog-add-edit/dialog-add-edit.component';
import { DialogoDeleteComponent } from './Dialog/dialogo-delete/dialogo-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogAddEditComponent,
    DialogoDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
