import { mostrar } from '../mostrar.js'
import { mainMenu } from '../../main.js'
import { segHor } from './segHor.js'

export function segHorFinal(valor,resultado) {
    let menu = `
    ${valor} segundos SON ${resultado} horas
    Digite,
    1 Para convertir nuevamente
    2 Para volver al menu principal
    ...
    0 Para salir`
    let opcion = parseInt(prompt(menu))
    switch (opcion) {
        case 1:
            segHor()
            break;
        case 2:
            mainMenu()
            break;
        case 0:
            mostrar('Programa finalizado')
            break;
        default:
            mostrar('La opcion ingresada no es valida')
            segHorFinal(valor,resultado)
    }
}