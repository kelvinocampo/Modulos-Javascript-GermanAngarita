import { numeroValido } from './../validadores/numero.js'

export function mkm() {
    let menu = `
    Digite la cantidad de metros a convertir`
    let cantidad = parseInt(prompt(menu))
    if (numeroValido(cantidad)) {
        let resultado = cantidad / 1000
        
    }
}