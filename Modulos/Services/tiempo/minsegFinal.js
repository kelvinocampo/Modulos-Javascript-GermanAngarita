import { mostrar } from '../mostrar.js'
import { mainMenu } from '../../main.js'
import { minseg } from './minseg.js'

export function minsegFinal(valor,resultado) {
    let menu = `
    ${valor} minutos SON ${resultado} segundos
    Digite,
    1 Para convertir nuevamente
    2 Para volver al menu principal
    ...
    0 Para salir`
    let opcion = parseInt(prompt(menu))
    switch (opcion) {
        case 1:
            minseg()
            break;
        case 2:
            mainMenu()
            break;
        case 0:
            mostrar('Programa finalizado')
            break;
        default:
            mostrar('El opcion ingresada no es valida')
            minsegFinal(valor,resultado)
    }
}