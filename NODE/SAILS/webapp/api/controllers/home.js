module.exports = {
  friendlyName: 'View homepage',
  description: 'Display "HomePage" page.',
  exits: {
    success: {
      viewTemplatePath: 'pages/homepage'
    }
  },
  fn: async function (inputs, exits) {
    const articulos = await Articulo.find();
    // Respond with view.
    return exits.success({articulos});
  }
};