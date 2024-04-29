import { mostrar } from '../mostrar.js'
import { mainMenu } from '../../main.js'
import { dmm } from './dmm.js'

export function dmmFinal(valor,resultado) {
    let menu = `
    ${valor} dm SON ${resultado} m
    Digite,
    1 Para convertir nuevamente
    dm a m
    2 Para volver al menu principal
    ...
    0 Para salir`
    let opcion = parseInt(prompt(menu))
    switch (opcion) {
        case 1:
            dmm()
            break;
        case 2:
            mainMenu()
            break;
        case 0:
            mostrar('Programa finalizado')
            break;
        default:
            mostrar('El opcion ingresada no es valida')
            break;
    }
}