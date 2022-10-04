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

    comentario: { type: 'string', minLength: 2 },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    usuario: {
      model: 'usuario',
      columnName: 'id_usuario'
    },

    cerrajeros: {
      model: 'cerrajeros',
      columnName: 'id_cerrajero'
    },
  },

  async beforeCreate(valores, proceed){
    const today = new Date();
    await Bitacora.create({tabla: 'Comentario', operacion: 'INSERT', fecha: today});
    return proceed();
  },

  async beforeUpdate(valores, proceed){
    const today = new Date();
    await Bitacora.create({tabla: 'Comentario', operacion: 'UPDATE', fecha: today});
    return proceed();
  },

  async beforeDestroy(valores, proceed){
    const today = new Date();
    await Bitacora.create({tabla: 'Comentario', operacion: 'DESTROY', fecha: today});
    return proceed();
  }
};

