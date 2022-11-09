module.exports = {
  misDeseos: async (request, response) =>{
    if (!request.session || !request.session.cliente) {
      return response.redirect('/');
    }
    let elementos = await Deseados.find({cliente: request.session.cliente.id}).populate('foto');
    response.view('pages/mis_deseos', {elementos});
  },
  agregarDeseos: async (request, response) => {
    let foto = await Deseados.findOne({foto: request.params.fotoId, cliente: request.session.cliente.id});
    if (foto) {
      request.addFlash('mensaje', 'La foto ya había sido agregada a mis deseos');
    }
    else{
      await Deseados.create({
        cliente: request.session.cliente.id,
        foto: request.params.fotoId
      });
      request.addFlash('mensaje', 'Foto agregada a deseos');
    }
    return response.redirect('/');
  },
  eliminarDeseos: async (request, response) =>{
    let foto = await Deseados.findOne({foto: request.params.fotoId, cliente: request.session.cliente.id});
    if (foto) {
      await Deseados.destroy({
        cliente: request.session.cliente.id,
        foto: request.params.fotoId
      });
      request.addFlash('mensaje', 'Foto eliminada de deseos');
    }
    return response.redirect('/mis-deseos');
  },
}