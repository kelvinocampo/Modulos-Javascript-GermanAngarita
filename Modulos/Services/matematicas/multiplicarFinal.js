import { mostrar } from '../mostrar.js'
import { mainMenu } from '../../main.js'
import { multiplicar } from './multiplicar.js'

export function multiplicarFinal(resultado) {
    let menu = `
    el resultado es ${resultado}
    Digite,
    1 Para multiplicar nuevamente
    2 Para volver al menu principal
    ...
    0 Para salir`
    let opcion = parseInt(prompt(menu))
    switch (opcion) {
        case 1:
            multiplicar()
            break;
        case 2:
            mainMenu()
            break;
        case 0:
            mostrar('Programa finalizado')
            break;
        default:
            mostrar('El opcion ingresada no es valida')
            multiplicarFinal(resultado)
    }
}