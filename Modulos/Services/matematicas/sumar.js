import { sumarFinal } from "./sumarFinal.js"
import { numeroValido } from "../validadores/numero.js"
export function sumar(){
    let num1 = parseFloat(prompt('ingrese el numero 1'))
    let num2 = parseFloat(prompt('ingrese el numero 2'))
    if(numeroValido(num1) && numeroValido(num2)){
        sumarFinal((num1+num2))
    }
}