import { mostrar } from '../mostrar.js'
import { numeroValido } from './../validadores/numero.js'
import { mkmFinal } from './mkmFinal.js'

export function mkm() {
    let menu = `
    Digite la cantidad de metros a convertir`
    let cantidad = parseInt(prompt(menu))
    if (numeroValido(cantidad)) {
        let resultado = cantidad / 1000
        mkmFinal(cantidad,resultado)
    }else{
        mostrar('La cantidad ingresada no es valida ')
        mkm()
    }
}