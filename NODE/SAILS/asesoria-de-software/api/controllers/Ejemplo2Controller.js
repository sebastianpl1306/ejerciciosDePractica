module.exports = {
  crear: async function (request, response) {
    return response.view('pages/controlador2');
  },

  editar: async function (request, response) {
    return response.send('editar');
  }
}