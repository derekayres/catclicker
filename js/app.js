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
