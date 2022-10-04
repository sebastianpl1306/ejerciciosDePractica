module.exports = {
  friendlyName: 'helper_nombre_completo',

  description: 'Nos permite concatenar el nombre completo',

  inputs:{
    nombre: {
      type: 'string',
      example: 'luis',
      description: 'Nombre de la persona',
      required: true
    },
    apellido: {
      type: 'string',
      example: 'blanco',
      description: 'Apelido de la persona',
      required: true
    }
  },

  exits: {},

  fn: async function (inputs, exits) {
    // Respond with view.
    let result = `${inputs.nombre} ${inputs.apellido}`;
    return exits.success(result);
  }

};