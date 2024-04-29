import { mostrar } from './Services/mostrar.js'
import { menuLongitud} from './Services/longitud/longitud.js'

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
            aritmetica()
            break;
        case 3:
            tiempo()
            break;
        case 0:
            mostrar('programa finalizado')
            break;
        default:
            mostrar('El opcion ingresada no es valida')
            break;
    }
}

mainMenu()