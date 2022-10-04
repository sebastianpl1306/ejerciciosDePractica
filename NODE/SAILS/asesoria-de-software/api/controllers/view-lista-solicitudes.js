module.exports = {


  friendlyName: 'View lista solicitudes',


  description: 'Display "Lista solicitudes" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/lista-solicitudes'
    }

  },


  fn: async function (inputs, exits) {
    let nombreCompleto = await sails.helpers.nombreCompleto('sebastian', 'pabon');
    sails.log.info(`${nombreCompleto} Visito la pagina`);
    const solicitudes = await Solicitud.find({});
    // Respond with view.
    return exits.success({solicitudes});

  }


};
