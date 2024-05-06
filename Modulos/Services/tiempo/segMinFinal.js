import { mostrar } from '../mostrar.js'
import { mainMenu } from '../../main.js'
import { segMin } from './segMin.js'

export function segMinFinal(valor,resultado) {
    let menu = `
    ${valor} segundos SON ${resultado} minutos
    Digite,
    1 Para convertir nuevamente
    2 Para volver al menu principal
    ...
    0 Para salir`
    let opcion = parseInt(prompt(menu))
    switch (opcion) {
        case 1:
            segMin()
            break;
        case 2:
            mainMenu()
            break;
        case 0:
            mostrar('Programa finalizado')
            break;
        default:
            mostrar('El opcion ingresada no es valida')
            segMinFinal(valor,resultado)
    }
}