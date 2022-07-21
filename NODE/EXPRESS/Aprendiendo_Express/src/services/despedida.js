function despedidas(num) {
    let despedida;
    switch (num) {
        case 1:
            despedida = "¡Chao!";
            break;
        case 2:
            despedida = "¡Adios!";
            break;
        case 3:
            despedida = "¡Nos Vemos!";
            break;
        default:
            despedida = "adios"
            break;
    }

    return despedida;
}

module.exports = despedidas;