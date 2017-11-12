var monCanvas;
var scene;
var monImage;
var monBitmap;
var leftToRight = true;
var downToUp = true;

function init()
{
    monCanvas = document.getElementById("mon_canvas");
    scene=new createjs.Stage(monCanvas);
    monImage=new Image();
    monImage.src="img/ball.png";

    monImage.onload=creationBitmap;
    //utilisations de l'objet EaselJS Ticker
	createjs.Ticker.useRAF=true;
	createjs.Ticker.setFPS(2400);
	createjs.Ticker.addEventListener("tick", handleTick);
}


////////////// FONCTIONS ////////////////////////////
function randomInt(x, y)
{
	var num = Math.floor(Math.random()*(y-x+1)+x);;
	return num;
}

//fonction qui permet la création de l'objet de type Bitmap
function creationBitmap()
{
	// variables
	var x_ 				= 10/*randomInt(0, 1600)*/;
	var y_ 				= randomInt(0, 600);
	var anglerotation 	= randomInt(0, 360)
	console.log("x_ : "+x_);
	console.log("y_ : "+y_);
	console.log("angle rotation : "+anglerotation);

	monBitmap=new createjs.Bitmap(monImage);
	
	//nous utilisons les attributs x et y de l'objet monBitmap pour déplacer le smiley
		
	monBitmap.x=x_;
	monBitmap.y=y_;

	//monBitmap effectue une rotation d'un nbre aléatoire de degrés entre 0 et 360
	
	monBitmap.rotation=anglerotation;
	monBitmap.regX=128;
	monBitmap.regY=128;

	scene.addChild(monBitmap);
	//scene.update();
}

/*function tick()
{
	monBitmap.x=monBitmap.x+1;
	scene.update();
}*/

function handleTick(event) 
{
    // Actions carried out each tick (aka frame)
    if (!event.paused) 
    {
        // Actions carried out when the Ticker is not paused.
       	HPingPong(128, 1472);
       	VPingPong(128, 472);
        monBitmap.rotation=monBitmap.rotation+1;
		scene.update();
		
    }
}

function moveRight()
{
	monBitmap.x=monBitmap.x+1;
}

function moveLeft()
{
	monBitmap.x=monBitmap.x-1;
}

function moveUp()
{
	monBitmap.y=monBitmap.y+1;
}

function moveDown()
{
	monBitmap.y=monBitmap.y-1;
}

function HPingPong(min, max)
{
	
	console.log("x : "+monBitmap.x);
	console.log("leftToRight : "+leftToRight);
	console.log("max : "+max);
	if (monBitmap.x <= max && leftToRight == true)
	{
		console.log ("to right");
		
		if (monBitmap.x == max)
		{
			leftToRight = false;
		}
		else
		{
			moveRight();
		}
	}
	else if (monBitmap.x >= 0 && leftToRight == false)
	{
		console.log("to left");
		if (monBitmap.x == min)
		{
			leftToRight = true;
		}
		else
		{
			moveLeft();
		}
	}
	return monBitmap.x;
}

function VPingPong(min, max)
{
	
	console.log("y : "+monBitmap.y);
	console.log("downToUp : "+downToUp);
	console.log("max : "+max);
	if (monBitmap.y <= max && downToUp == true)
	{
		console.log ("to right");
		
		if (monBitmap.y == max)
		{
			downToUp = false;
		}
		else
		{
			moveUp();
		}
	}
	else if (monBitmap.y >= 0 && downToUp == false)
	{
		console.log("to left");
		if (monBitmap.y == min)
		{
			downToUp = true;
		}
		else
		{
			moveDown();
		}
	}
	return monBitmap.y;
}

window.onload=init;

/*while(true)
{
	init();
}*/