/**
 * SesionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  registro: async (request, response) =>{
    response.view('pages/registro');
  },

  procesarRegistro: async (request, response) =>{
    let cliente = await Cliente.findOne({email: request.body.correo});
    if(cliente){
      request.addFlash('mensaje','Email duplicado');
      return response.redirect('/registro');
    }else{
      let cliente = await Cliente.create({
        email: request.body.correo,
        nombre: request.body.nombre,
        clave: request.body.clave
      });
      request.session.cliente = cliente;
      return response.redirect('/');
    }
  }
};

