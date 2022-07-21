function saludos(num) {
    let saludo;
    switch (num) {
        case 1:
            saludo = "¡Hola!";
            break;
        default:
            saludo = "¡Bienvenido!"
            break;
    }

    return saludo;
}

module.exports = saludos;