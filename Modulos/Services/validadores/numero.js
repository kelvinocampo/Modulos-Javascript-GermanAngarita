export function numeroValido(numero){
    if(isNaN(numero)){
        return false
    }
    if(typeof numero === 'number'){
        return true
    }
    return false
}