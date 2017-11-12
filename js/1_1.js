//définition des variables
var monCanvas;
var scene;
function init(){
//nous récupérons le canvas
monCanvas = document.getElementById("mon_canvas");
//nous créons une scène
scene=new createjs.Stage(monCanvas);
scene.update();
}
//on attend que la page soit chargée avant de lancer la fonction init
window.onload=init;