import { mainMenu } from "../../main.js";
import { mostrar } from './../mostrar.js'
import { dmm } from './dmm.js'
import { mkm } from './mkm.js'

export function menuLongitud() {
    let menu = `
    Digite,
    1 Para convertir m a km
    2 Para convertir dm a m
    ...
    0 Para devolverse`
    let opcion = parseInt(prompt(menu))
    switch (opcion) {
        case 1:
            mkm()
            break;
        case 2:
            dmm()
            break;
        case 0:
            mainMenu()
            break;
        default:
            mostrar('El opcion ingresada no es valida')
            break;
    }
}