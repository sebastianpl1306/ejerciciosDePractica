const valorEntrada = 100;

export function calcularPrecio(edad: number, promocion: boolean){
    let totalValorEntrada = 0;
    if(edad < 12){
        totalValorEntrada = 0;
    }else if(edad > 65){
        totalValorEntrada = 60;
    }else{
        totalValorEntrada = valorEntrada;
    }

    if(promocion = true){
        return totalValorEntrada - ((totalValorEntrada * 30)/100)
    }else{
        return totalValorEntrada
    }
}