var tablero, direccion;

var teclas = {
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
}
var fondo = {
	imagenURL: "img/fondo.png",
	imagenOK: false
};

var tifis = {
	x: 100,
	y: 100,
	velocidad: 50,
	frenteOK: false,
	frenteURL: "img/diana-frente.png",
    atrasOK: false,
    atrasURL : "img/diana-atras.png",
    derOK: false,
    derURL : "img/diana-der.png",
    izqOK: false,
    izqURL : "img/diana-izq.png",
};

var liz = {
	lizURL: "img/liz.png",
	lizOK: false,
	x:400,
	y:200
};

function inicio () {
	var canvas = document.getElementById('campo');
	tablero = canvas.getContext("2d");
	
	fondo.imagen = new Image();
	fondo.imagen.src = fondo.imagenURL;
	fondo.imagen.onload = confirmarFondo;

	tifis.frente = new Image();
	tifis.frente.src = tifis.frenteURL;
	tifis.frente.onload = confirmarFrente;

	tifis.atras = new Image();
	tifis.atras.src = tifis.atrasURL;
	tifis.atras.onload = confirmarAtras;

	tifis.izq = new Image();
	tifis.izq.src = tifis.izqURL;
	tifis.izq.onload = confirmarIzq;

	tifis.der = new Image();
	tifis.der.src = tifis.derURL;
	tifis.der.onload = confirmarDer;

	liz.liz = new Image();
	liz.liz.src = liz.lizURL;
	liz.liz.onload = confirmarLiz;

	

	document.addEventListener("keydown",teclado);

}

function teclado(datos)
{
	var codigo = datos.keyCode
	if(codigo == teclas.UP)
	{
		
		tifis.y -= tifis.velocidad;
		console.log("Eje Y: " + tifis.y + " Eje X: " + tifis.x);
		if((tifis.y == 350 && tifis.x > 100) || (tifis.y < 250  && tifis.x == 200) || (tifis.y == 200 && tifis.x < 150) || tifis.y < 0)
        {
        	
            tifis.y += tifis.velocidad;
        }
	}

	if(codigo == teclas.DOWN)
	{
		tifis.y += tifis.velocidad;
		console.log("Eje Y: " + tifis.y + " Eje X: " + tifis.x);
		if(tifis.y==350 && tifis.x > 100 || (tifis.y == 200 && tifis.x < 150) || tifis.y > 450)
        {
            tifis.y -= tifis.velocidad;
        }
		
	}

	if(codigo == teclas.LEFT)
	{
		tifis.x -= tifis.velocidad;
		console.log("Eje Y: " + tifis.y + " Eje X: " + tifis.x);
		if((tifis.y<250 && tifis.x == 200) || (tifis.y<250 && tifis.x == 200) || (tifis.y == 200 && tifis.x == 100) || tifis.x < 0)
        {
            tifis.x += tifis.velocidad;
        }
	}

	if(codigo == teclas.RIGHT)
	{
		tifis.x += tifis.velocidad;
		console.log("Eje Y: " + tifis.y + " Eje X: " + tifis.x);
		if((tifis.x ==200 && tifis.y < 250) || (tifis.x>100 && tifis.y == 350) || tifis.x > 450)
        {
            tifis.x -= tifis.velocidad;
        }
		
	}

	direccion = codigo;
	dibujar();
}

function confirmarFondo () 
{
	fondo.imagenOK = true;
	dibujar();
}

function confirmarFrente () 
{
	tifis.frenteOK = true;
	dibujar();
}

function confirmarAtras () 
{
	tifis.atrasOK = true;
	dibujar();
}

function confirmarIzq () 
{
	tifis.izqOK = true;
	dibujar();
}

function confirmarDer () 
{
	tifis.derOK = true;
	dibujar();
}

function confirmarLiz () 
{
	liz.lizOK = true;
	dibujar();
}

function dibujar () 
{
	if(fondo.imagenOK)
	{
		tablero.drawImage(fondo.imagen,0,0);
	}

	if(liz.lizOK)
	{
		tablero.drawImage(liz.liz,liz.x,liz.y);
	}

	var tifiDibujo = tifis.frente;
	
	if(tifis.frenteOK && tifis.atrasOK && tifis.izqOK && tifis.derOK)
	{
		if(direccion == teclas.UP)
		{
			tifiDibujo = tifis.atras
		}

		if(direccion == teclas.DOWN)
		{
			tifiDibujo = tifis.frente
		}

		if(direccion == teclas.LEFT)
		{
			tifiDibujo = tifis.izq
		}

		if(direccion == teclas.RIGHT)
		{
			tifiDibujo = tifis.der
		}
		tablero.drawImage(tifiDibujo,tifis.x,tifis.y);
	}

	//capa 3: Liz
	
	
}