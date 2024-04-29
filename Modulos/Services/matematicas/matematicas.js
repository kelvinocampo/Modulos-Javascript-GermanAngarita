import { mainMenu } from "./../../main.js";
import { mostrar } from './../mostrar.js'

export function matematicas() {
    let menu = `
    Digite,
    1 Para multiplicar
    2 Para dividir
    3 Para restar
    4 Para sumar
    ...
    0 Para devolverse`
    let opcion = parseInt(prompt(menu))
    switch (opcion) {
        case 1:
            multiplicar()
            break;
        case 2:
            dividir()
            break;
        case 3:
            restar()
            break;
        case 4:
            sumar()
            break;
        case 0:
            mainMenu()
            break;
        default:
            mostrar('El opcion ingresada no es valida')
            break;
    }
}