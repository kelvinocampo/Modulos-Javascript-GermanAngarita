import { dividirFinal } from "./dividirFinal.js"
import { numeroValido } from "../validadores/numero.js"
import { mostrar } from "../mostrar.js"

export function dividir(){
    let num1 = parseFloat(prompt('ingrese el numero 1'))
    let num2 = parseFloat(prompt('ingrese el numero 2'))
    if(numeroValido(num1) && numeroValido(num2)){
        dividirFinal((num1/num2))
    }
    else{
        mostrar('Los numero ingresados no son correctos')
        dividir()
    }
}