import { mostrar } from '../mostrar.js'
import { numeroValido } from '../validadores/numero.js'
import { segHorFinal } from './segHorFinal.js'

export function segHor() {
    let menu = `
    Digite la cantidad de segundos a convertir`
    let cantidad = parseInt(prompt(menu))
    if (numeroValido(cantidad)) {
        let resultado = cantidad / 3600
        segHorFinal(cantidad,resultado)
    }else{
        mostrar('Los segundos no son validos')
        segHor()
    }
}