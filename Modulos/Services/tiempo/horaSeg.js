import { mostrar } from '../mostrar.js'
import { numeroValido } from '../validadores/numero.js'
import { horaSegFinal } from './horaSegFinal.js'

export function horaSeg() {
    let menu = `
    Digite la cantidad de horas a convertir`
    let cantidad = parseInt(prompt(menu))
    if (numeroValido(cantidad)) {
        let resultado = cantidad * 3600
        horaSegFinal(cantidad,resultado)
    }else{
        mostrar('Las horas no son validas')
        horaSeg()
    }
}