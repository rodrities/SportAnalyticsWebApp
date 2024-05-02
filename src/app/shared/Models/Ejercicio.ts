import { Serie } from "./Serie"

export class Ejercicio{
    id!: number
            nombre!: string
            tipo!: string
            descripcion!:string
            cantidad_series!: number
            intensidad!: string
            descanso!: string
            frecuenciaCardiaca!: Array<number>
            promedioFrecuenciaCardiaca!: number
            velocidad!: Array<number>
            promedioVelocidad!:number
            tiempo!: Array<string>
            tiempoDescanso!: Array<string>
            series!: Array<Serie>
            ejercicio!: Ejercicio
}