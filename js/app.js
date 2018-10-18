var kitties = [
  {
    name: "Alexi",
    url: "./images/russian_blue.jpg",
    clickCount: 0
  },
  {
    name: "Bobbi",
    url: "./images/bobbi.jpg",
    clickCount: 0
  }
];

var master = document.getElementById('master');
for (var i = 0; i < kitties.length; i++) {
  var kitty = kitties[i];
  var kittyNameHolder = document.createElement("h3");
  var kittyNameHolderContent = document.createTextNode(kitty.name);
  var image = document.createElement("img");
  var counter = document.createElement("div");
  var counterCount = document.createTextNode("Clicky click counter: " + kitty.clickCount);
/*
I CANT SEEM TO GET THE CLICKER WORKING.
  counter.addEventListener('click', (function(numCopy) {
    return function() {
    clickCount++;
  })(clickCount);
*/
  kittyNameHolder.appendChild(kittyNameHolderContent);
  image.src = kitty.url;
  counter.appendChild(counterCount);
  master.appendChild(kittyNameHolder);
  master.appendChild(image);
  master.appendChild(counter)
}











/*
CODEPEN.COM
elem.addEventListener('click', function(){
  catcount++;
  document.getElementById('catcount').innerHTML = "Clicky Click Counter:  " + catcount;
  //the element has been clicked... do stuff here
  console.log ('die kitty, die');
}, false);



// clear the screen for testing
document.body.innerHTML = '';
document.body.style.background="white";

var nums = [1,2,3];

// Let's loop over the numbers in our array
for (var i = 0; i < nums.length; i++) {

    // This is the number we're on...
    var num = nums[i];

    // We're creating a DOM element for the number
    var elem = document.createElement('div');
    elem.textContent = num;

    // ... and when we click, alert the value of `num`
    elem.addEventListener('click', function() {
        alert(num);
    });

    // finally, let's add this element to the document
    document.body.appendChild(elem);
};



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
