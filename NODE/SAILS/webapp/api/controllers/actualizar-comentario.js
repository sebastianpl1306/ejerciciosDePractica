module.exports = {


  friendlyName: 'Actualizar comentario',


  description: '',


  inputs: {
    comentarioId: {
      description: 'El ID del comentario',
      type: 'number',
      required: true
    },
    contenido: {
      type: 'string'
    }
  },


  exits: {
    success: {
      responseType: 'redirect'
    }
  },


  fn: async function (inputs) {
    await Comentario.update({ id: inputs.comentarioId }, { contenido: inputs.contenido });
    return exits.success('/');

  }


};
