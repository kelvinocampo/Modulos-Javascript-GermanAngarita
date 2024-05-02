import { mostrar } from '../mostrar.js'
import { mainMenu } from '../../main.js'
import { horaSeg } from './horaSeg.js'

export function horaSegFinal(valor,resultado) {
    let menu = `
    ${valor} horas SON ${resultado} segundos
    Digite,
    1 Para convertir nuevamente
    2 Para volver al menu principal
    ...
    0 Para salir`
    let opcion = parseInt(prompt(menu))
    switch (opcion) {
        case 1:
            horaSeg()
            break;
        case 2:
            mainMenu()
            break;
        case 0:
            mostrar('Programa finalizado')
            break;
        default:
            mostrar('La opcion ingresada no es valida')
            horaSegFinal(valor,resultado)
    }
}