import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { SignupRequest } from "../Models/SignupRequest";
import { Injectable } from "@angular/core";
import { LoginResponse } from "../Models/LoginResponse";
import { Rutina } from "../Models/Rutina";

@Injectable({
    providedIn: 'root'
})
export class Service{

    constructor(private http: HttpClient) { 
    }


    public signup = (body: SignupRequest): Observable<String> => {
        return this.http.post<String>('http://localhost:8080/api/auth/signup', body, this.generateHeaders());
    }

    public login = (body: SignupRequest): Observable<LoginResponse> => {
        return this.http.post<LoginResponse>('http://localhost:8080/api/auth/login', body, this.generateHeaders());
    }

    public getRutine = (): Observable<any> => {
        return this.http.get<any>('http://localhost:8080/api/rutinas', this.generateHeaders());
    }

    public getRutines = (id: Number): Observable<Array<Rutina>> => {
        return this.http.get<Array<Rutina>>(`http://localhost:8080/api/rutinas/${id}`, this.generateHeaders());
    }

    public generateRutina = (id: string): Observable<Rutina> => {
        const body = {};
        return this.http.post<Rutina>(`http://localhost:8080/api/rutinas/${id}`, body , this.generateHeaders());
    }

    public getEjercicios = (id: Number, ejercicio: String): Observable<Rutina> => {
        const body = {};
        return this.http.get<Rutina>(`http://localhost:8080/api/rutinas/atleta/${id}/ejercicios/${ejercicio}` , this.generateHeaders());
    }

    public getAllEjercicios = (id: Number): Observable<String> => {
        const body = {};
        return this.http.get<String>(`http://localhost:8080/api/rutinas/ejercicios/${id}` , this.generateHeaders());
    }

     //GENERADOR DE HEADERS
     private generateHeaders = () => {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                
                //'Authorization': "Bearer " + sessionStorage.getItem("token"),
                //'Access-Control-Allow-Origin': 'https://deaorwhzisbsc.cloudfront.net'
            })
        }
    }
}