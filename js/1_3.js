var monCanvas;
var scene;
var monImage;
var monBitmap;
function init(){
monCanvas = document.getElementById("mon_canvas"); 
scene=new createjs.Stage(monCanvas);
monImage=new Image();
monImage.src="js/skull.png";
//nous devons attendre que l'image soit chargée avant de créer l'objet de type Bitmap
//une fois l'image chargée (onload), la fonction creationBitmap est appellée.
monImage.onload=creationBitmap;
}
//fonction qui permet la création de l'objet de type Bitmap
function creationBitmap(){
monBitmap=new createjs.Bitmap(monImage);
scene.addChild(monBitmap);
scene.update();
}
window.onload=init;