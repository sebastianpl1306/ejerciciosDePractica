const path = require('path');
const fs = require('fs');

module.exports = {
  inicioSesion: async (request, response) =>{
    response.view('pages/admin/inicio_sesion');
  },
  /**
  * Permite buscar un usuario que cumpla con las credenciales ingresadas
  */
  procesarInicioSesion: async (request, response) =>{
    console.log('ejemplo');

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
      return response.redirect('/admin/inicio-sesion');
    }
  },
  principal:  async (request, response) =>{
    if (!request.session || !request.session.admin) {
      request.addFlash('mensaje', 'Sesión inválida');
      return response.redirect('/admin/inicio-sesion');
    }
    let fotos = await Foto.find();
    response.view('pages/admin/principal',{fotos});
  },
  /**
  * Finaliza la session actual
  */
  cerrarSesion: async (request, response) =>{
    request.session.destroy();
    return response.redirect('/');
  },
  /**
  * Permite ir al formulario para agregar una foto
  */
  agregarFoto: async (request, response) =>{
    response.view('pages/admin/agregar_foto');
  },
  /**
  * Permite procesar el formulario de agregar una foto
  */
  procesarAgregarFoto: async (request, response) =>{
    let foto = await Foto.create({
      titulo: request.body.titulo,
      precio: request.body.precio,
      descripcion: request.body.descripcion,
      activa: false
    }).fetch();

    request.file('foto').upload({}, async (error, archivos) =>{
      if(archivos && archivos[0]){
        let upload_path = archivos[0].fd;
        let ext = path.extname(upload_path);

        await fs.createReadStream(upload_path).pipe(fs.createWriteStream(path.resolve(sails.config.appPath, `assets/images/${foto.id}${ext}`)));

        await Foto.update({id: foto.id}, {ruta: `${foto.id}${ext}`, activa: true});
        request.addFlash('menasaje', 'Foto agregada');
        return response.redirect('/admin/principal');
      }
    });
    request.addFlash('menasaje', 'No hay foto seleccionada');
    return response.redirect('/admin/agregar-foto');
  },
  clientes: async (request, response) =>{
    if (!request.session || !request.session.admin) {
      request.addFlash('mensaje', 'Sesión inválida');
      return response.redirect('/admin/inicio-sesion');
    }
    let clientes = await Cliente.find();
    response.view('pages/admin/view_clientes', {clientes});
  }
}