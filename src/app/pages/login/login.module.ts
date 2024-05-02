import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogInComponent } from './log-in/log-in.component';
import { LoginRoutingModule } from './login-routing.module';




@NgModule({
    declarations: [LogInComponent],
    imports: [
      CommonModule,
      LoginRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
    ]
  })
  
  export class UsuariosModule { }
  
 