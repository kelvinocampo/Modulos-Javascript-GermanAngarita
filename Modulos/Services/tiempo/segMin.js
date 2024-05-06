import { numeroValido } from './../validadores/numero.js'
import { segMinFinal } from './segMinFinal.js'
import { mostrar } from './../mostrar.js'

export function segMin() {
    let menu = `
    Digite la cantidad de segundos a convertir`
    let cantidad = parseInt(prompt(menu))
    if (numeroValido(cantidad)) {
        let resultado = cantidad / 60
        segMinFinal(cantidad,resultado)
    }else{
        mostrar('Los segundos no son validos')
        segMin()
    }
}