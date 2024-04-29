import { mainMenu } from './../../main'

export function matematicas() {
    let menu = `
    Digite,
    1 Para convertir PEPEP nuevamente
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