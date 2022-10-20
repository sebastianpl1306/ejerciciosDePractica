module.exports = {
  inicio: async (request, response) =>{
    let fotos = await Foto.find();
    response.view('pages/homepage',{fotos: fotos, cliente: request.session.cliente});
  },
};
