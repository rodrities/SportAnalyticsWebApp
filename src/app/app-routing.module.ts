import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './pages/login/log-in/log-in.component';
import { SignInComponent } from './pages/signin/sign-in/sign-in.component';
import { HomeComponent } from './pages/home/home/home.component';
import { RutinaComponent } from './pages/rutina/rutina/rutina.component';
import { EjercicioComponent } from './pages/ejercicio/ejercicio/ejercicio.component';
import { EjercicioHistorialComponent } from './pages/ejercicio/ejercicio-historial/ejercicio-historial.component';
import { EjerciciosComponent } from './pages/ejercicios/ejercicios/ejercicios.component';



const routes: Routes = [
  {
    path: '',
    component: LogInComponent,
  },
  {
    path: 'login',
    component: LogInComponent,
  },
  {
    path: 'signin',
    component: SignInComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'rutina',
    component: RutinaComponent,
  },
  {
    path: 'ejercicio',
    component: EjercicioComponent,
  },
  {
    path: 'hitorialEjercicio',
    component: EjercicioHistorialComponent,
  },
  {
    path: 'ejercicios',
    component: EjerciciosComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


