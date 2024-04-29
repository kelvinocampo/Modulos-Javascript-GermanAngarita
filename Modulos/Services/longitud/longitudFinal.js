import { mainMenu } from './../../main'
import { mkm } from './mkm'

export function menuLongitudFinal() {
    let menu = `
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