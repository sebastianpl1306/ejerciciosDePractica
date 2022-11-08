module.exports = {
  inicio: async (request, response) =>{
    let fotos = await Foto.find();
    response.view('pages/homepage',{fotos: fotos, cliente: request.session.cliente});
  },
  topVendidas: async (request, response) =>{
    let consulta = `
      SELECT titulo, descripcion, ruta, COUNT(*) AS cantidad
      FROM orden_detalle
      INNER JOIN foto ON orden_detalle.foto_id = foto.id
      GROUP BY titulo, descripcion, foto_id, ruta
      ORDER BY
      COUNT (*) DESC
      LIMIT 10
    `;
    let topFotos = await sails.sendNativeQuery(consulta);
    response.view('pages/top_vendidas',{ fotos: topFotos.rows });
  },
};
