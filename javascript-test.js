var animals = [
  {name: "fluff", species: 'rabbit'},
  {name: "jeff", species: 'dog'},
  {name: "star", species: 'dog'},
  {name: "sparky", species: 'fish'},
  {name: "yeee", species: 'cash'},
  {name: "Jimmy", species: 'fish'}
]

// // var isDog = function(animal) {
// //   return animal.species === 'dog'
// }  

// dogs = animals.filter(isDog)

// var dogsFilterArray = []
// for (var i = 0; i < animals.length; i++) {
//   if (animals[i].species === 'dog')
//   dogsFilterArray.push(animals[i])
// }

// console.log(dogs);
// console.log(dogsFilterArray);

// var names = []
// for (var i = 0; i < animals.length; i++) {
//   names.push(animals[i].name)
// }

var names = animals.map((animal) => animal.name)

console.log(names);