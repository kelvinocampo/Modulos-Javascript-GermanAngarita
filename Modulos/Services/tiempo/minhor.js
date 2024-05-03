import { mostrar } from '../mostrar.js'
import { numeroValido } from '../validadores/numero.js'
import { minhorFinal } from './minhorFinal.js'

export function minhor() {
    let menu = `
    Digite la cantidad de horas a convertir`
    let cantidad = parseInt(prompt(menu))
    if (numeroValido(cantidad)) {
        let resultado = cantidad * 60
        minhorFinal(cantidad,resultado)
    }else{
        mostrar('Las horas no son validas')
        minhor()
    }
}