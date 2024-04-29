import { mostrar } from './Services/mostrar.js'
import { menuLongitud} from './Services/longitud/longitud.js'
import { matematicas } from './Services/matematicas/matematicas.js'
import {menuTiempo} from './Services/tiempo/tiempo.js'

export function mainMenu() {
    let menu = `
    Bienvenid@ a nuestra aplicación
    científica :
    Digite,
    1 Para convertir unidades de longitud
    2 Para operaciones aritméticas
    3 Para convertir unidades de tiempo
    
    0 para salir`
    let opcion = parseInt(prompt(menu))
    switch (opcion) {
        case 1:
            menuLongitud()
            break;
        case 2:
            matematicas()
            break;
        case 3:
            menuTiempo()
            break;
        case 0:
            mostrar('programa finalizado')
            break;
        default:
            mostrar('El opcion ingresada no es valida')
            mainMenu()
    }
}

mainMenu()