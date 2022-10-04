module.exports = {


  friendlyName: 'Eliminar comentario',


  description: '',


  inputs: {
    comentarioId: {
      description: 'El ID del comentario',
      type: 'number',
      required: true
    }
  },


  exits: {
    success:{
      responseType: 'redirect'
    }
  },


  fn: async function (inputs, exits) {
    await Comentarios.destroy({id: inputs.comentarioId});
    return exits.success('/cerrajeros');
  }
};
