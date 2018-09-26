
let catcount = 0

var elem = document.getElementById('kitty');
elem.addEventListener('click', function(){
  catcount++;
  document.getElementById('catcount').innerHTML = "Clicky Click Counter:  " + catcount;
  //the element has been clicked... do stuff here
  console.log ('die kitty, die');
}, false);





/*
var elem = document.getElementById('kitty');
elem.addEventListener('click', function(){

  console.log ('die kitty, die');
}, false);


let catcount = 0;

function onClick(){
  cat-count++;
  document.getElementById('catcount').innerHTML = "Clicky Click Counter:  " + catcount;
}
*/
