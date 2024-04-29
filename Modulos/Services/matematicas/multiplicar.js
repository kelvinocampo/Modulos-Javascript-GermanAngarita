import { multiplicarFinal } from "./multiplicarFinal.js"
import { numeroValido } from "../validadores/numero.js"
import { mostrar } from "../mostrar.js"

export function multiplicar(){
    let num1 = parseFloat(prompt('ingrese el numero 1'))
    let num2 = parseFloat(prompt('ingrese el numero 2'))
    if(numeroValido(num1) && numeroValido(num2)){
        multiplicarFinal((num1*num2))
    }else{
        mostrar('Los numeros ingresados no son validos')
        multiplicar()
    }
}