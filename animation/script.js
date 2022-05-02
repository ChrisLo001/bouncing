let canvas;
let ctx;

let incrementor = 0;

let decrementor = 500;

window.onload = function () {
  canvas = document.getElementById("creativeCoding");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext("2d");
  setInterval(drawBoxxy, 50);
};

function drawBoxxy() {
  ctx.fillStyle = "green";
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

  ctx.fillStyle = "blue";
  ctx.fillRect(incrementor++, 10, 100, 100);
  ctx.fillStyle = "black";
  ctx.fillRect(decrementor--, decrementor--, 250, 250);
  ctx.fillStyle = "red";
  ctx.fillRect(incrementor++, decrementor--, incrementor++, incrementor++);
  ctx.fillStyle = "yellow";
  ctx.fillRect(incrementor++, incrementor++, 125, 125);
}

var x = 5;
x++;
console.log(x);


x--;
console.log(x);

x--;
console.log(x);





var y = 3;
y--;
console.log(y);



y--;
console.log(y);


