module.exports = {

  friendlyName: 'View cerrajeros',

  description: 'Display "Cerrajeros" page.',

  exits: {
    success: {
      viewTemplatePath: 'pages/cerrajeros'
    }
  },

  fn: async function (inputs, exits) {
    const cerrajeros = await Cerrajeros.find().populate('comentarios').populate('empresa');
    // Respond with view.
    return exits.success({cerrajeros});
  }
};
