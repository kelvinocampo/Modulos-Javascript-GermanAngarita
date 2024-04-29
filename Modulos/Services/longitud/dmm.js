import { numeroValido } from '../validadores/numero.js'
import { dmmFinal } from './dmmFinal.js'

export function dmm() {
    let menu = `
    Digite la cantidad de decimetros a convertir`
    let cantidad = parseInt(prompt(menu))
    if (numeroValido(cantidad)) {
        let resultado = cantidad / 10
        dmmFinal(cantidad,resultado)
    }
}