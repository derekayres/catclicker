
//CAT CLICKER PREMIUM v2 - Model,Octopus, View

//-------MODEL
var model = {
    currentCat: null,
    kitties: [
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
    ]
};

//-------OCTOPUS
var octopus = {

  init: function() {
    //set current cat to be the first one in the list
    model.currentCat = model.kitties[0];

    //tell views to initialize
    catListView.init();
    catView.init();
  },

  getCurrentCat: function() {
    return model.currentCat;
  },

  getKitties: function() {
    return model.kitties;
  },

  //set the currently-selected cat to the object passed in
  setCurrentCat: function(kitty) {
    model.currentCat = kitty;
  },

  //increments the counter for the currently-selected cat
  incrementCounter: function() {
    model.currentCat.clickCount++;
    catView.render();
  }
};

//-----VIEW
var catView = {

  init: function() {
      //store pointers to DOM elements for easy access later
      this.displayElement = document.getElementById('display');
      this.nameElement = document.getElementById('name');
      this.imageElement = document.getElementById('image');
      this.countElement = document.getElementById('count');

      //on click, increment the current cat's counter
      this.imageElement.addEventListener('click', function(){
        octopus.incrementCounter();
      });

      //render this view (update the DOM)
      this.render();
  },

  render: function() {
      //update the DOM elements with values from the current cat
      var currentCat = octopus.getCurrentCat();
      this.nameElement = currentCat.name;
      this.imageElement = currentCat.url;
      this.countElement = currentCat.clickCount;
  }
};

var catListView = {

  init: function() {
    //store the DOM element for easy access later
    this.listElement = document.getElementById('list');

    //update the DOM
    this.render();
  },

  render: function() {
    var kitty, kittyNameHolder, i;
    //get the cats to render from Octo
    var kitties = octopus.getKitties();

    //empty the cat list
    this.listElement.innerHTML = "";

    //kitty loop
    for (i = 0; i < kitties.length; i++) {
      //this is the cat we are currently looping over
      kitty = kitties[i];

      //make new cat name ele and set content
      kittyNameHolder = document.createElement('h5');
      kittyNameHolder.textContent = kitty.name;

      //on click, setCurrentCat and render catView, uses closure
      kittyNameHolder.addEventListener('click', (function(kittyCopy) {
        return function() {
          octopus.setCurrentCat(kittyCopy);
          catView.render();
        };
      })(kitty));

      //add element to the name list
      this.listElement.appendChild(kittyNameHolder);
    }
  }
};

//go go go
octopus.init();



/*
//CAT CLICKER PREMIUM v1

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
 var currentCat;

 kittyNameHolder.addEventListener('click', function(kittyCopy) {
   return function() {
     currentCat = kittyCopy;
     image.src = kittyCopy.url;
     document.getElementById('count').innerHTML = 'Count: ' + kittyCopy.clickCount
     const display = document.getElementById('display');
     display.appendChild(image);
     console.log (kittyCopy);
   };
 }(kitty));

 kittyNameHolder.appendChild(kittyNameHolderContent);
 list.appendChild(kittyNameHolder);
}

display.addEventListener('click', function() {
  console.log('got here!!!');
  console.log(currentCat);
  currentCat.clickCount += 1;
  document.getElementById('count').innerHTML = 'Count: ' + currentCat.clickCount
})
*/

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
