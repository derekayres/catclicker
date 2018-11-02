//CAT CLICKER PREMIUM PRO

//-------MODEL
var model = {
    currentCat: null,
    adminShow: false, //hides admin display area
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
  // init function initalizes with the beginning data.  Keep out of the DOM.
  init: function() {
    //set current cat to be the first one in the list
    model.currentCat = model.kitties[0];

    //tell views to initialize
    catListView.init();
    catView.init();
    adminView.init();
    adminView.hide();
  },

  getCurrentCat: function() {
    return model.currentCat;
  },
  //calls the array of cats
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
  },
  adminDisplay: function() {
    if (model.adminShow === false) {
        model.adminShow = true;
        adminView.show(); //displays the admin input boxes and buttons
    }
    else if (model.adminShow === true) {
      model.adminShow = false;
      adminView.hide(); //hides the admin input boxes and button
    }
  },

  //hides admin display when cancel button is clicked
  adminCancel: function() {
    adminView.hide();
  },

  // hides admin display and save the new cat data when save button is clicked
  adminSave: function() {
    model.currentCat.name= adminCatName.value;
    model.currentCat.url= adminCatSource.value;
    model.currentCat.clickCount= adminCatClicks.value;
    catView.render();
    catListView.render();
    adminView.hide();
  }
};

//-----VIEW
var catView = {

  init: function() {
      //store pointers to DOM elements for easy access later
      this.displayElement = document.getElementById('display'); //the holder of the name, image, and count
      this.nameElement = document.getElementById('name'); //the cat name above the image
      this.imageElement = document.getElementById('image'); //the cat image
      this.countElement = document.getElementById('count'); //the click count display

      //on click, increment the current cat's counter
      this.imageElement.addEventListener('click', function(){
        octopus.incrementCounter();
      });

      //render this view (update the DOM)
      this.render();
  },

  render: function() {
      //update the DOM elements with values from the current cat
      var currentCat = octopus.getCurrentCat(); //calls teh curent cat from octopus
      this.nameElement.textContent = currentCat.name;
      this.imageElement.src = currentCat.url;
      this.countElement.textContent = "Clicky click click: " + currentCat.clickCount;
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
      kittyNameHolder = document.createElement('h5'); //create h5 element
      kittyNameHolder.textContent = kitty.name; //fill the content of h5 with the cat's name

      //on click, setCurrentCat and render catView, uses closure
      kittyNameHolder.addEventListener('click', (function(kittyCopy) {
        return function() {
          octopus.setCurrentCat(kittyCopy);
          catView.render();
          octopus.incrementCounter(); //increments the clicker
        };
      })(kitty));

      //add element to the name list
      this.listElement.appendChild(kittyNameHolder);
    }
  }
};

var adminView = {
  init: function() {
    this.adminCatName = document.getElementById('adminCatName');
    this.adminCatSource = document.getElementById('adminCatSource');
    this.adminCatClicks = document.getElementById('adminCatClicks');
    var adminDisplayArea = document.getElementById('adminDisplayArea');

    this.adminButton.addEventListener('click', function() { //shows the admin display
      octopus.adminDisplay();
    });

    this.adminCancel.addEventListener('click', function() { //hides the admin display without saving any new cat data
      octopus.adminCancel();
    });

    this.adminSave.addEventListener('click', function() { //hides the admin display and saves new cat data
      octopus.adminSave();
    });

    this.render();
  },

  render: function() {
    var currentCat = octopus.getCurrentCat(); //calls current cats
    this.adminCatName.value = currentCat.name;
    this.adminCatSource.value = currentCat.url;
    this.adminCatClicks.value = currentCat.clickCount;
  },

  show: function() {
    adminDisplayArea.style.display = 'block'; //show the adminDisplayArea div on index html
  },
  hide: function() {
    adminDisplayArea.style.display = 'none';
  }
};

//go go go
octopus.init();

/*
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
      this.nameElement.textContent = currentCat.name;
      this.imageElement.src = currentCat.url;
      this.countElement.textContent = currentCat.clickCount;
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
*/


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
