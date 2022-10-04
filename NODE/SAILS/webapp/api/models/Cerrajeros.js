/**
 * Cerrajeros.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    nombre: { type: 'string', minLength: 2 },

    telefono: { type: 'string', minLength: 2 },

    zona: { type: 'string', minLength: 2 },

    disponible: { type: 'boolean'},

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    comentarios: {
      collection: 'comentarios',
      via: 'cerrajeros',
    },

    empresa: {
      model: 'empresas',
      columnName: 'id_empresa'
    },
  },

  async beforeCreate(valores, proceed){
    const today = new Date();
    await Bitacora.create({tabla: 'Cerrajeros', operacion: 'INSERT', fecha: today});
    return proceed();
  },

  async beforeUpdate(valores, proceed){
    const today = new Date();
    await Bitacora.create({tabla: 'Cerrajeros', operacion: 'UPDATE', fecha: today});
    return proceed();
  },

  async beforeDestroy(valores, proceed){
    const today = new Date();
    await Bitacora.create({tabla: 'Cerrajeros', operacion: 'DESTROY', fecha: today});
    return proceed();
  }
};

