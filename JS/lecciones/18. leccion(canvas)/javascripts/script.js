function dibujar(){

  var canvas = document.getElementById('lienzo')
  var contexto = canvas.getContext('2d');
  var centro = {
    x: canvas.width / 2,
    y: canvas.height / 2,
  }

  contexto.beginPath();
  contexto.arc(centro.x, centro.y, 50, 0, 2 * Math.PI, false);
  contexto.fillStyle = 'yellow';
  contexto.fill();
  contexto.lineWidth = 3;
  contexto.strokeStyle = 'black';
  contexto.stroke();

  contexto.beginPath();
  contexto.arc(centro.x - 15, centro.y - 15, 8, 0, 2 * Math.PI, false);
  contexto.arc(centro.x + 15, centro.y - 15, 8, 0, 2 * Math.PI, false);
  contexto.fillStyle = 'black';
  contexto.fill();

  contexto.beginPath();
  contexto.arc(centro.x, centro.y, 30, 0, Math.PI, false);
  contexto.stroke();

}

dibujar();
