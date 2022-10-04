module.exports = {

  friendlyName: 'Crear cerrajeros',

  description: '',

  inputs: {
  },


  exits: {
    success:{
      responseType: 'redirect'
    }
  },


  fn: async function (inputs, exits) {
    try {
      await Cerrajeros.create({
        nombre: 'Antonio',
        telefono: '3553684255',
        zona: 'Bogotá',
        disponible: true,
        empresa: 1
      });
      // All done.
      return exits.success('/cerrajeros');
    } catch (error) {
      console.log(error);
      return exits.success('/cerrajeros');
    }
    
  }


};
