import isNumber from 'is-number'

export function verifyNum(expresion: any) {
    if (isNumber(expresion)) {
        return "es un numero";
    }else{
        return "no es un numero";
    }
}