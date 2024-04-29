import { mostrar } from '../mostrar.js'
import { mainMenu } from '../../main.js'
import { sumar } from './sumar.js'

export function sumarFinal(resultado) {
    let menu = `
    el resultado es ${resultado}
    Digite,
    1 Para sumar nuevamente
    2 Para volver al menu principal
    ...
    0 Para salir`
    let opcion = parseInt(prompt(menu))
    switch (opcion) {
        case 1:
            sumar()
            break;
        case 2:
            mainMenu()
            break;
        case 0:
            mostrar('Programa finalizado')
            break;
        default:
            mostrar('El opcion ingresada no es valida')
            sumarFinal
    }
}