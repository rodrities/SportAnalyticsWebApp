import { Ejercicio } from "./Ejercicio"

export class Rutina {
    id!: string
    objetivo!:string
    fecha!: Date
    estado!: String
    rutina_ejercicios!: Array<Ejercicio>
}