/**
 * SesionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
module.exports = {
  /**
  * Redirije a la pagina de registro
  */
  registro: async (request, response) =>{
    response.view('pages/registro',{cliente: request.session.cliente});
  },

  /**
  * Permite procesar el registro
  */
  procesarRegistro: async (request, response) =>{
    //Busca existe una persona con el email que se desea registrar
    let cliente = await Cliente.findOne({email: request.body.correo});

    //valida si existe un email y si lo encuentra lo enviar a la pagina de registro con un mensaje
    if(cliente){
      request.addFlash('mensaje','Email duplicado');
      return response.redirect('/registro');
    }else{
      //Realiza la creación de un nuevo cliente
      let cliente = await Cliente.create({
        email: request.body.correo,
        nombre: request.body.nombre,
        clave: request.body.clave
      });

      //Guarda la información del cliente en una sesion y lo envia al inicio
      request.session.cliente = cliente;
      request.addFlash('mensaje','Cliente registrado');
      return response.redirect('/');
    }
  },

  /**
  * Redirije a la pagina de inicio de sesión
  */
  inicioSesion: (request, response) =>{
    response.view('pages/inicio_sesion',{cliente: request.session.cliente});
  },

  /**
  * Permite buscar un usuario que cumpla con las credenciales ingresadas
  */
  procesarInicioSesion: async (request, response) =>{
    //Busca un registro con esas credenciales
    let cliente = await Cliente.findOne({email: request.body.correo, clave: request.body.clave});

    //comprueba si se encontro un registro y redirije a la pagina de inicio
    if (cliente) {
      request.session.cliente = cliente;
      //let carroCompra = await CarroCompra.find({cliente: cliente.id});
      //request.session.carroCompra = carroCompra;
      request.addFlash('mensaje','Sesión iniciada');
      return response.redirect('/');
    } else {
      //Si no encuentra un cliente redirije nuevamente al inicio de sesion y envia un mensaje
      request.addFlash('mensaje','Email o contraseña invalidos');
      return response.redirect('/inicio-sesion');
    }
  },
  /**
  * Finaliza la session actual
  */
  cerrarSesion: async (request, response) =>{
    request.session.destroy();
    return response.redirect('/');
  },
};

