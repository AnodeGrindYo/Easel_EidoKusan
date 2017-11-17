// c'est dans ce fichier que j'appelle mes autres fichiers js

// cette fonction sert à inclure un autre fichier js
function include(fileName)
{
  document.write("<script type='text/javascript' src='"+fileName+"'></script>" );
}



include("js/2_1_adaptable.js");