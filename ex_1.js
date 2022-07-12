let cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7,
      "mass":"150"
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity": 5,
      "mass":"160"
    },
    {
        "color": "yello",
        "type": "porche",
        "registration": new Date('2018-04-03'),
        "capacity": 4,
        "mass":"170"
    },
   { "color": "silver",
      "type": "rolls royce",
      "registration": new Date('2018-05-03'),
      "capacity": 4,
      "mass":"180"
    }
  ];

  const names=cars.map(ca=>ca.color)
  console.log(names);
//   ouput=> [ 'purple', 'red', 'yello', 'silver' ]

const poeopertiesOfCars=cars.map(ca=>{
    return {
        color:ca.color,
    capacity:ca.capacity
}
})
console.log(poeopertiesOfCars);
// output=> [
//   { color: 'purple', capacity: 7 },
//   { color: 'red', capacity: 5 },
//   { color: 'yello', capacity: 4 },
//   { color: 'silver', capacity: 4 }
// ]

// get the total capacity of height

const totalCapacity=cars.reduce((prevcapacity,cars)=>{
    return prevcapacity+cars.capacity
},0);
console.log(totalCapacity);
// output=>20   and number(cars.capacity)


// get cars with mass greater than 4

const greaterThanMass=cars.filter((cars)=>{
    return cars.mass > 150
})
console.log(greaterThanMass);


// sort by date
const sortByDate=cars.sort((cars1,cars2)=>{
   if(cars1.registration<cars2.registration) {
       return -1;
   }
   if(cars1.registration>cars2.registration){
       return 1;
   }
   return 0
})
console.log(sortByDate);


// sort by color
const sortBycolor=cars.sort((cars1,cars2)=>{
    if(cars1.color<cars2.color) {
        return -1;
    }
    if(cars1.color>cars2.color){
        return 1;
    }
    return 0
 })
 console.log(sortByDate);


//  does every cars have mass more then 4

console.log(cars.every((car)=>car.mass>4));

// is there at least one 5 capacity car

console.log(cars.some((car)=>car.capacity>4));

// is there at least one character whos capacity is more then 5
console.log(cars.some((car)=>car.capacity>7));