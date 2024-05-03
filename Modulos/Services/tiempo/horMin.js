import { mostrar } from '../mostrar.js'
import { numeroValido } from '../validadores/numero.js'
import { horMinFinal } from './horMinFinal.js'

export function horMin() {
    let menu = `
    Digite la cantidad de minutos a convertir`
    let cantidad = parseInt(prompt(menu))
    if (numeroValido(cantidad)) {
        let resultado = cantidad / 60
        horMinFinal(cantidad,resultado)
    }else{
        mostrar('Los minutos no son validas')
        horMin()
    }
}