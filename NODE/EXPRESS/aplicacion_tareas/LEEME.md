```Javascript

  <ul>
    <% for(let i=0; i<tareas.length; i++) { %>
    <li><%=tareas[i].descripcion%></li>
    <% } %>
  </ul>

const query = `SELECT * FROM tareas`

respuesta.render('index', {tareas: filas})

<form action="/agregar-tarea" method="POST">
    <p>
    <label for="descripcion">Nueva Tarea: </label>
    <input type="text" name="descripcion">
    <button type="submit">Agregar</button>
    </p>
  </form>
  
  <hr>

aplicacion.post('/agregar-tarea', function (peticion, respuesta) {

  pool.getConnection(function(err, connection) {


  })

})


    const query = `INSERT INTO tareas (descripcion) VALUES (${connection.escape(peticion.body.descripcion)})`
    connection.query(query, function (error, filas, campos) {
      respuesta.redirect("/")
    })
    connection.release()

```
