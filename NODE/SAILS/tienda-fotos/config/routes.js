/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/
  //Rutas principales
  'GET /': 'PrincipalController.inicio',
  'GET /acerca-de': {view: 'pages/acerca-de'},
  'GET /top-vendidas': 'PrincipalController.topVendidas',

  //Rutas de manejo de session
  'GET /registro': 'SesionController.registro',
  'POST /procesar-registro': 'SesionController.procesarRegistro',
  'GET /inicio-sesion': 'SesionController.inicioSesion',
  'POST /procesar-inicio-sesion': 'SesionController.procesarInicioSesion',
  'GET /cerrar-sesion': 'SesionController.cerrarSesion',

  //Rutas de carrito de compra y ordenes generadas
  'GET /carro-de-compra': 'CompraController.carroCompra',
  'GET /agregar-carro-compra/:fotoId': 'CompraController.agregarCarroCompra',
  'GET /eliminar-carro-compra/:fotoId': 'CompraController.eliminarCarroCompra',
  'GET /procesar-compra': 'CompraController.procesarCompra',
  'GET /mis-ordenes': 'CompraController.misOrdenes',
  'GET /detalle_orden/:ordenId': 'CompraController.detalleOrden',

  //Rutas de mis deseos
  'GET /mis-deseos': 'DeseosController.misDeseos',
  'GET /agregar-deseos/:fotoId': 'DeseosController.agregarDeseos',
  'GET /eliminar-deseos/:fotoId': 'DeseosController.eliminarDeseos',

  //Rutas del ADMIN
  'Get /admin/inicio-sesion': 'AdminController.inicioSesion',
  'Get /admin/procesar-inicio-sesion': 'AdminController.procesarInicioSesion',
  'Get /admin/principal': 'AdminController.principal',
  'Get /admin/cerrar-sesion': 'AdminController.cerrarSesion',
  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
