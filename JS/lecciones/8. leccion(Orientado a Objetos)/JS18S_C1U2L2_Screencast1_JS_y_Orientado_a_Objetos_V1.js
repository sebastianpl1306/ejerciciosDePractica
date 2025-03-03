class Persona{

  constructor(){
    this.nombre = "luis";
    this.apellido = "torres";
  }

}

var p = new Persona();
console.log(p.nombre);
console.log(p.apellido);

class Persona{

  constructor(){
    this.nombre = "luis";
    this.apellido = "torres";
  }

  nombreCompleto(){
    return `${this.nombre} ${this.apellido}`
  }

}

var p = new Persona();
console.log(p.nombre);
console.log(p.apellido);
console.log(p.nombreCompleto());

class Mascota{
  constructor(nombreApodo){
    this.apodo = nombreApodo;
  }
}

var m1 = new Mascota("tobby");
console.log(m1.apodo);

class Mascota{
  constructor(nombreApodo){
    this.apodo = nombreApodo;
  }

  setPropietario(propietario){
    this.propietario = propietario;
  }

}

m1.setPropietario(p);
console.log(m1.propietario.nombreCompleto())


class Empleado extends Persona{
  constructor(id){
    super();
    this.id = id;
  }
}

var emp = new Empleado(123);
console.log(emp.id);
console.log(emp.nombre);
console.log(emp.nombreCompleto());



