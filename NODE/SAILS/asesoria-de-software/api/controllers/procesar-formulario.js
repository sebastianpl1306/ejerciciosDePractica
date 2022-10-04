module.exports = {


  friendlyName: 'Procesar formulario',


  description: '',


  inputs: {
    nombre:{
      type: 'string',
      require: true
    },
    apellido:{
      type: 'string',
      require: true
    },
    servicio:{
      type: 'string',
      require: true
    },
    email:{
      type: 'string',
      require: true
    },
    telefono:{
      type: 'number',
      require: true
    }
  },


  exits: {
    success: {
      responseType: 'redirect'
    }
  },


  fn: async function (inputs, exits) {
    const data = {nombre: inputs.nombre, apellido: inputs.apellido, servicio: inputs.servicio, email: inputs.email, telefono: inputs.telefono};

    await Solicitud.create(data);

    sails.log.info(`Se ha creado una solicitud data:`,data);
    return exits.success('/servicio');
  }


};
