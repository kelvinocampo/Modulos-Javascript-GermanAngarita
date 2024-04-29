import { mostrar } from '../mostrar.js'
import { mainMenu } from '../../main.js'
import { mkm } from './mkm.js'

export function mkmFinal(valor,resultado) {
    let menu = `
    ${valor} m SON ${resultado} km
    Digite,
    1 Para convertir nuevamente
    m a km
    2 Para volver al menu principal
    ...
    0 Para salir`
    let opcion = parseInt(prompt(menu))
    switch (opcion) {
        case 1:
            mkm()
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