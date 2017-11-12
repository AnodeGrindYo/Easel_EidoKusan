var monCanvas;
var scene;
var monImage;
var monBitmap;

function init(){
monCanvas = document.getElementById("mon_canvas");
scene=new createjs.Stage(monCanvas);
//Nous définissons un objet image
monImage=new Image();
//Un objet de type Image possède un attribut "src" qui doit être égal au chemin de l'image
//monImage.src="../img/smiley.png";
monImage.src="smiley.png";
//L'objet image n'est pas facilement exploitable, nous créons donc un objet de type Bitmap
//Le paramètre doit être un objet de type image
monBitmap=new createjs.Bitmap(monImage);
scene.addChild(monBitmap);
scene.update();
}
window.onload=init;