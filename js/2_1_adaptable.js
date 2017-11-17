// settings
var monCanvas; // c'est là dedans que tout est tracé
var canvasSizeX = getCanvasWidth("mon_canvas"); 
var canvasSizeY = getCanvasHeight("mon_canvas");
var scene; // l'arrière plan, je crois
var monImage; // l'image que l'on importe (la boule 8)
var monBitmap; // l'image utilisable par Easel
var bmpSizeX = 256; // on stocke ici les dimensions de monBitmap
var bmpSizeY = 256;
var leftToRight = true; // est true si le déplacement se fait de gauche à droite
var downToUp = true; // est true si le déplacement se fait de bas en haut


function init()
{
    monCanvas = document.getElementById("mon_canvas"); // la div mon_canvas devient celui que l'on utilise dans Easel   
    scene=new createjs.Stage(monCanvas);
    monImage=new Image(); // création d'un objet image
    monImage.src="img/ball.png"; // on lui dit d'aller chercher le fichier ball.png

    monImage.onload=creationBitmap; // on lance la fonction creationBitmap au chargement

    //utilisations de l'objet EaselJS Ticker
	createjs.Ticker.useRAF=true;
	createjs.Ticker.setFPS(1200);
	createjs.Ticker.addEventListener("tick", handleTick);
}


////////////// FONCTIONS ////////////////////////////
/*
 * cette fonction génère un entier aléatoire compris entre x et y. x<y
 */
function randomInt(x, y)
{
	var num = Math.floor(Math.random()*(y-x+1)+x);;
	return num;
}

/*
 * fonction qui permet la création de l'objet de type Bitmap
 */
function creationBitmap()
{
	// variables
	var x_ 				= 10/*randomInt(0, 1600)*/;
	var y_ 				= randomInt(0, 600);
	var anglerotation 	= randomInt(0, 360);
	/*console.log("x_ : "+x_);
	console.log("y_ : "+y_);
	console.log("angle rotation : "+anglerotation);*/

	monBitmap=new createjs.Bitmap(monImage);

	//nous utilisons les attributs x et y de l'objet monBitmap pour déplacer le smiley
		
	monBitmap.x=x_;
	monBitmap.y=y_;

	//monBitmap effectue une rotation d'un nbre aléatoire de degrés entre 0 et 360
	
	monBitmap.rotation=anglerotation;
	monBitmap.regX=bmpSizeX/2;
	monBitmap.regY=bmpSizeY/2;

	scene.addChild(monBitmap);
	//scene.update();
}


function handleTick(event) 
{
    // Actions carried out each tick (aka frame) ==> ce qui se passe à chaque affichage d'une frame
    if (!event.paused) 
    {
        var Hmin = bmpSizeX/2;
        var Hmax = canvasSizeX-Hmin;
        var Lmin = bmpSizeY/2;
        var Lmax = canvasSizeY-Lmin;
        
        // Actions carried out when the Ticker is not paused. 
       	HPingPong(Hmin , Hmax, monBitmap);
       	VPingPong(Lmin, Lmax, monBitmap);
        monBitmap.rotation=monBitmap.rotation+1;
		scene.update();
		
    }
}

/*
 * permet le déplacement vers la droite d'un objet
 */
function moveRight(img)
{
	img.x=img.x+1;
}

/*
 * permet le déplacement vers la gauche d'un objet
 */
function moveLeft(img)
{
	img.x=img.x-1;
}

/*
 * permet le déplacement vers le haut d'un objet
 */
function moveUp(img)
{
	img.y=img.y+1;
}

/*
 * permet le déplacement vers le bas d'un objet
 */
function moveDown(img)
{
	img.y=img.y-1;
}

/*
 * fonction qui fait en sorte que l'objet rebondisse horizontalement 
 * sur les bords verticaux de l'écran
 */
function HPingPong(min, max, img)
{
	/*console.log("x : "+monBitmap.x);
	console.log("leftToRight : "+leftToRight);
	console.log("max : "+max);*/
	if (img.x <= max && leftToRight == true)
	{
		console.log ("to right");
		
		if (img.x == max)
		{
			leftToRight = false;
		}
		else
		{
			moveRight(img);
		}
	}
	else if (img.x >= 0 && leftToRight == false)
	{
		console.log("to left");
		if (img.x == min)
		{
			leftToRight = true;
		}
		else
		{
			moveLeft(img);
		}
	}
	return img.x;
}

/*
 * fonction qui gère le rebond vertical d'un objet
 */
function VPingPong(min, max, img)
{
	// affichages de debug
	/*console.log("y : "+monBitmap.y);
	console.log("downToUp : "+downToUp);
	console.log("max : "+max);*/
	if (img.y <= max && downToUp == true)
	{
		console.log ("to right");
		
		if (img.y == max)
		{
			downToUp = false;
		}
		else
		{
			moveUp(img);
		}
	}
	else if (img.y >= 0 && downToUp == false)
	{
		console.log("to left");
		if (img.y == min)
		{
			downToUp = true;
		}
		else
		{
			moveDown(img);
		}
	}
	return img.y;
}


// TODO débuguer les deux fonctions
/*
 * retourne le largeur du canvas
 */
function getCanvasWidth(canvas_id)
{
    var canvas = document.getElementById(canvas_id);
    var width = canvas.width;
    return width;
}

/*
 * retourne la hauteur du canvas
 */
function getCanvasHeight(canvas_id)
{
    var canvas = document.getElementById(canvas_id);
    var height = canvas.height;
    return height;
}




window.onload=init;
