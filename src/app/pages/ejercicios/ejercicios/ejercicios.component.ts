import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from 'src/app/shared/service/service';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent implements OnInit{

  userId: any = localStorage.getItem('userId')

  listEjercicios = []

  constructor (private service: Service, private router: Router) {}

  ngOnInit(): void {
    

    this.service.getAllEjercicios(this.userId).subscribe((response: any) => {
      this.listEjercicios = response
    }
    )

  }
  verDetalle(ejercicio: any) {
   
    this.router.navigate(['/hitorialEjercicio'], { queryParams: { ejercicio: ejercicio } });
    
  }

}
