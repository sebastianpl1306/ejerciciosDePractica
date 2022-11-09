module.exports = {
  inicioSesion: async (request, response) =>{
    response.view('pages/admin/inicio_sesion');
  },
  /**
  * Permite buscar un usuario que cumpla con las credenciales ingresadas
  */
  procesarInicioSesion: async (request, response) =>{
    //Busca un registro con esas credenciales
    let admin = await Admin.findOne({email: request.body.correo, clave: request.body.clave});

    //comprueba si se encontro un registro y redirije a la pagina de inicio
    if (admin) {
      request.session.admin = admin;
      request.session.cliente = undefined;
      request.addFlash('mensaje','Sesión iniciada');
      return response.redirect('/admin/principal');
    } else {
      //Si no encuentra un admin redirije nuevamente al inicio de sesion y envia un mensaje
      request.addFlash('mensaje','Email o contraseña invalidos');
      return response.redirect('/inicio-sesion');
    }
  },
  principal:  async (request, response) =>{
    if (!request.session || !request.session.admin) {
      request.addFlash('mensaje', 'Sesión inválida');
      return response.redirect('/admin/inicio-sesion');
    }
    response.view('pages/admin/principal');
  },
  /**
  * Finaliza la session actual
  */
  cerrarSesion: async (request, response) =>{
    request.session.destroy();
    request.addFlash('mensaje','Sesión finalizada');
    return response.redirect('/');
  },
}