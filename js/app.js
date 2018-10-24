//CAT CLICKER PREMIUM
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
  },
  {
    name: "Burrito Boi",
    url: "./images/burrito_boi.jpg",
    clickCount: 0
  },
  {
    name: "Grumpi",
    url: "./images/grumpi.jpg",
    clickCount: 0
  },
  {
    name: "Rounder",
    url: "./images/rounder.jpg",
    clickCount: 0
  }
];

for (var i = 0; i < kitties.length; i++) {
  var kitty = kitties[i];
  var kittyNameHolder = document.createElement('h5');
  var kittyNameHolderContent = document.createTextNode(kitty.name);
  var image = document.createElement("img");

  kittyNameHolder.addEventListener('click', function(kittyCopy) {
    return function() {
      image.src = kittyCopy.url;
      kittyCopy.clickCount = 0;
      document.getElementById('count').innerHTML = 'Count: ' + kittyCopy.clickCount
      const display = document.getElementById('display');
      display.appendChild(image);
      display.addEventListener('click', function(e) {

        console.log('got here!!!', e);

         kittyCopy.clickCount += 1;
         document.getElementById('count').innerHTML = 'Count: ' + kittyCopy.clickCount
      })
      console.log (kittyCopy);
    };
  }(kitty));

  kittyNameHolder.appendChild(kittyNameHolderContent);
  list.appendChild(kittyNameHolder);
}

/*var counter = document.createElement("div");
var counterCount = document.createElement("span");
var currentCat = document.createElement("img");
kitty.image = currentCat;
counterCount.innerHTML = ("Clicky click counter: " + kitty.clickCount);
kitty.counterCount = counterCount;
currentCat.addEventListener('click',function(kittyCopy) {
  return function() {
    kittyCopy.clickCount++;
    kittyCopy.counterCount.innerHTML = "Clicky click counter: " + kittyCopy.clickCount;
    display.appendChild(counter);
    display.appendChild(currentCat);
    console.log (kittyCopy);
  };
}(kitty));*/




/*
var master = document.getElementById('master');
for (var i = 0; i < kitties.length; i++) {
  var kitty = kitties[i];
  var kittyNameHolder = document.createElement("h3");
  var kittyNameHolderContent = document.createTextNode(kitty.name);
  var image = document.createElement("img");
  var counter = document.createElement("div");
  var counterCount = document.createElement("span");
  counterCount.innerHTML = ("Clicky click counter: " + kitty.clickCount);
  kitty.counterCount = counterCount;

  image.addEventListener('click', (function(kittyCopy) {
    return function() {
      kittyCopy.clickCount++;
      kittyCopy.counterCount.innerHTML = "Clicky click counter: " + kittyCopy.clickCount;
      console.log (kittyCopy);
    };
  })(kitty));

  kittyNameHolder.appendChild(kittyNameHolderContent);
  image.src = kitty.url;
  counter.appendChild(counterCount);
  master.appendChild(kittyNameHolder);
  master.appendChild(image);
  master.appendChild(counter);
}






/*
REVISION 2
 kitties = [
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
  var counterCount = document.createElement("span");
  counterCount.innerHTML = ("Clicky click counter: " + kitty.clickCount);
  kitty.counterCount = counterCount;

  image.addEventListener('click', (function(kittyCopy) {
    return function() {
      kittyCopy.clickCount++;
      kittyCopy.counterCount.innerHTML = "Clicky click counter: " + kittyCopy.clickCount;
      console.log (kittyCopy);
    };
  })(kitty));

  kittyNameHolder.appendChild(kittyNameHolderContent);
  image.src = kitty.url;
  counter.appendChild(counterCount);
  master.appendChild(kittyNameHolder);
  master.appendChild(image);
  master.appendChild(counter);
}
*/
