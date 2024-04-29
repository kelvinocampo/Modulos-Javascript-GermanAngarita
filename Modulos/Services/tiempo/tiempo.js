import { mainMenu } from "./../../main.js";
import { mostrar } from './../mostrar.js'
import { minseg } from './minseg.js'
import { minhor } from './minhor.js'

export function menuTiempo() {
    let menu = `
    Digite,
    1 Para convertir minutos a segundos
    2 Para convertir horas a minutos
    ...
    0 Para devolverse`
    let opcion = parseInt(prompt(menu))
    switch (opcion) {
        case 1:
            minseg()
            break;
        case 2:
            minhor()
            break;
        case 0:
            mainMenu()
            break;
        default:
            mostrar('El opcion ingresada no es valida')
            menuTiempo()
    }
}