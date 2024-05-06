import { mainMenu } from "./../../main.js";
import { mostrar } from './../mostrar.js'
import { minseg } from './minseg.js'
import { segMin } from "./segMin.js";
import { minhor } from './minhor.js'
import { horMin } from './horMin.js';
import { horaSeg } from './horaSeg.js'
import { segHor } from "./segHor.js";

export function menuTiempo() {
    let menu = `
    Digite,
    1 Para convertir minutos a segundos
    2 Para convertir minutos a horas
    3 Para convertir horas a minutos
    4 Para convertir horas a segundos
    5 Para convertir segundos a horas
    6 Para convertir segundos a minutos
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
        case 3:
            horMin()
            break;
        case 4:
            horaSeg()
            break;
        case 5: 
            segHor()
            break;
        case 6:
            segMin()
            break;
        case 0:
            mainMenu()
            break;
        default:
            mostrar('El opcion ingresada no es valida')
            menuTiempo()
    }
}