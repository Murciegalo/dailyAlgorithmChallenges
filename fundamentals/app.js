//DOM
let h = document.getElementsByTagName('h1');
h[0].style.textAlign="center";
h[0].style.margin="40px";

//CHALLENGES

// 1. Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one. 

  //OPTION 1
let user1 = { nome: "victor", idade: 34 };
let user2 = { nome: "victor", idade: 34 };

const objComparador = (user1 , user2) => {
  return JSON.stringify(user1) === JSON.stringify(user2) ? true : false;
}

//console.log(objComparador(user1, user2));

  //OPTION 2

const matches = (obj, source) =>
                                  //here checks for length    here for same key name
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);

console.log(matches(user1, user2));

//
//------------------------
//

// 2. Write a JavaScript program to target a given value in a nested JSON object, based on the given key.
const data = {
  level1: {
    level2: {
      level3: 'some data'
    }
  }
};

const jsonRufus = (obj , target) => {
  //Brings back Values from Objs
  const stock = Object.values(obj);
  console.log(stock);
  target in obj
    ? obj[target]
    : Object.values(obj).reduce((acc, val) => {
      if (acc !== undefined) return acc;
      if (typeof val === 'object') return jsonRufus(val, target);
    }, undefined);
}

console.log(jsonRufus(data, 'level3'));
// console.log(jsonRufus(data, 'level4'));


//
//------------------------
//

// 3. Write a JavaScript program to converts a specified number to an array of digits.

