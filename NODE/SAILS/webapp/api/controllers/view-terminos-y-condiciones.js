module.exports = {


  friendlyName: 'View terminos y condiciones',


  description: 'Display "Terminos y condiciones" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/terminos-y-condiciones'
    }

  },


  fn: async function (inputs, exits) {
    const articulos = await Articulo.find();
    // Respond with view.
    return exits.success({articulos});

  }


};
