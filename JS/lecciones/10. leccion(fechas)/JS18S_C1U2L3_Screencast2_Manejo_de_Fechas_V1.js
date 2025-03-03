var fecha = new Date();
console.log(fecha.toDateString());
console.log(fecha.toISOString());

console.log(fecha.getDay());
console.log(fecha.getDate());
console.log(fecha.getMonth());
console.log(fecha.getFullYear());
console.log(fecha.getHours());
console.log(fecha.getMinutes());

console.log(fecha.getTime());

fecha = new Date(2015, 1, 1, 2, 3, 4, 1000);
console.log(fecha.getDate());
console.log(fecha.getFullYear());
console.log(fecha.getHours());
