import { numeroValido } from '../validadores/numero.js'
import { minhorFinal } from './dmmFinal.js'

export function minhor() {
    let menu = `
    Digite la cantidad de decimetros a convertir`
    let cantidad = parseInt(prompt(menu))
    if (numeroValido(cantidad)) {
        let resultado = cantidad / 10
        minhorFinal(cantidad,resultado)
    }
}