module.exports = {
  carroCompra: async (request, response) => {
    if (!request.session || !request.session.cliente) {
      return response.redirect('/');
    }
    let elementos = await CarroCompra.find({cliente: request.session.cliente.id}).populate('foto');
    let totalCompra = 0;
    elementos.forEach(elemento => {
      totalCompra += parseInt(elemento.foto.precio);
    });
    return response.view('pages/carro_de_compra', {elementos: elementos, totalCompra: totalCompra});
  },
  agregarCarroCompra: async (request, response) => {
    let foto = await CarroCompra.findOne({foto: request.params.fotoId, cliente: request.session.cliente.id});
    if (foto) {
      request.addFlash('mensaje', 'La foto ya había sido agregada al carro de compra');
    }
    else{
      await CarroCompra.create({
        cliente: request.session.cliente.id,
        foto: request.params.fotoId
      });
      request.session.carroCompra = await CarroCompra.find({ cliente: request.session.cliente.id });
      request.addFlash('mensaje', 'Foto agregada al carro de compra');
    }
    return response.redirect('/');
  },
  eliminarCarroCompra: async (request, response) =>{
    let foto = await CarroCompra.findOne({foto: request.params.fotoId, cliente: request.session.cliente.id});
    if (foto) {
      await CarroCompra.destroy({
        cliente: request.session.cliente.id,
        foto: request.params.fotoId
      });
      request.session.carroCompra = await CarroCompra.find({cliente: request.session.cliente.id});
      request.addFlash('mensaje', 'Foto eliminada del carro de compra');
    }
    return response.redirect('/carro-de-compra');
  },
  procesarCompra: async (request, response) =>{
    request.session.carroCompra = await CarroCompra.destroy({cliente: request.session.cliente.id});
    request.addFlash('mensaje', 'Compra realizada con exito!');
    return response.redirect('/');
  }
}