import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogInComponent } from './log-in/log-in.component';

const routes: Routes = [
  {
    path: '',
    component: LogInComponent,
    data: {
      title: 'login',
      description: 'V.1.0.0',
      urls: [
        { title: 'Login', url: '/login', icon: 'group' },
        { title: 'login' }
      ]
    }
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
  
    ReactiveFormsModule,
   
    HttpClientModule,
   
  ],
  exports: [RouterModule],
})
export class LoginRoutingModule { }
