import { numeroValido } from './../validadores/numero.js'
import { minsegFinal } from './minsegFinal.js'
import { mostrar } from './../mostrar.js'

export function minseg() {
    let menu = `
    Digite la cantidad de minutos a convertir`
    let cantidad = parseInt(prompt(menu))
    if (numeroValido(cantidad)) {
        let resultado = cantidad * 60
        minsegFinal(cantidad,resultado)
    }else{
        mostrar('Los minutos no son validas')
        minseg()
    }
}