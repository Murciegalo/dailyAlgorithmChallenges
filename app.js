// ALGORITHMS
// =======================================
// 1. STRING REVERSAL
// =======================================

// built-in methods
const reverseString = str => 
  str.split('').reverse().join('');   //quickest for small str


// for-loop
const reversString = str => {
  let result=''
  // 1
  // for ( let char of str){    // best for long ones
  //   result = char + result
  // }

  // 2  // best for long ones
  return [...str].reduce(( acc , curr ) => curr + acc , '')
}

console.log(reversString('patata'));



// =======================================
// 2. Counting the Vowels in a String of Text
// =======================================
const vowels = [ 'a' , 'e' , 'i' , 'o' , 'u' ]

const vowelsCounter = str => {
  let counter = 0
  for( let v of str ){
    if(vowels.includes(v)){
      counter++
    }
  }
  return counter;
}

const vowelsCounterII = str => {
  const matched = str.match(/[aeiou]/gi); // Quickest option
  return matched.length;
}
console.log(vowelsCounterII('sarasa'));


// ==========================================
// 3. Finding the Most Recurring Character
// ==========================================
const sorterChars = str => {
  const sorted = {}
  let charArr = []
  let valuesArr = []
  let maxChar = ''

  for (let char of str ){
    if(sorted.hasOwnProperty(char)){
      sorted[char]++
    }
    else{
      sorted[char] = 1
    }
  }

  charArr = Object.keys(sorted)
  valuesArr = Object.values(sorted)

  maxChar = Math.max(...valuesArr)

  maxChar = charArr[valuesArr.indexOf(maxChar)]

  return maxChar
}

console.log(sorterChars('asdfasdabaasadasadadrttyt'));


// ==========================================
// 4. Capitalized Sentences
// ==========================================
const strCapitalize = (text) => {
  let wordsArray = text.toLowerCase().split(' ')
    let capsArray = wordsArray.map(word=>{
        return word[0].toUpperCase() + word.slice(1)
    })
    return capsArray.join(' ')
}

console.log(strCapitalize('test , raco'));

// ======================================
// 5. Palindrome Finder
// ======================================
const palinFind = (text) => {
  var textLen = text.length;
  for (var i = 0; i < textLen/2; i++) {
    if (text[i] !== text[textLen - 1 - i]) {
        return false;
    }
  }
  return true;
}

console.log(palinFind('monja'));


// ======================================
// 6. Hamming Distance
// ======================================
const hammingDistance = (stringA, stringB) => {
  let result = 0

  if (stringA.length == stringB.length) {
      for (let i = 0; i < stringA.length; i++) {
          if (stringA[i].toLowerCase() != stringB[i].toLowerCase()) {
              result++
          }
      }
      return result
  } else {
      throw new Error('Strings do not have equal length')
  }
}

console.log(hammingDistance('perro', 'gatos'));


// ======================================
// 6. Longest word in a sentence
// ======================================
const longest = str => {
  let arr = str.split(' ')
  let maxLength = 0
  let result;

  for ( let i = 0 ; i < arr.length ; i++){
    if(arr[i].length > maxLength ){
      maxLength = arr[i].length
      result = arr[i]
    }
  }
  return result;
}
console.log(longest('longest dont have the biggest number of characters'));


// ======================================
// 7. Search & Replace
// ======================================
const searchReplace = ( str , replaced , nuWorld ) => {
  return str.replace(replaced , nuWorld)
}

console.log(searchReplace("He is Sleeping on the couch", "Sleeping", "sitting"));


// ======================================
// 8. Anagrams finder
// ======================================

const formatStr = str => str.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');

const anagramsFinder = ( str1 , str2 ) => formatStr(str1) == formatStr(str2)

console.log('Anagram ?', anagramsFinder('listen' , 'silent'));


// ======================================
// 9. Pig Latin 
// ======================================
function pigLatin(str) {
  return str
  .replace(/^([aeiouy])(.*``*)/, '$1$2way')
  .replace(/^([^aeiouy]+)(.*)/, '$2$1ay')
}

console.log(pigLatin('pig'));

// ======================================
// 10. Array Chunking 
// ======================================
function chunkArray(array, size) {
  let result = []
  let arrayCopy = [...array]
  while (arrayCopy.length > 0) {
      result.push(arrayCopy.splice(0, size))
  }
  return result
}

// let result = []
// for (let i = 0; i < array.length; i += size) {
//     let chunk = array.slice(i, i + size)
//     result.push(chunk)
// }
// return result

// ======================================
// 10. Array Combined without duplicates
// ======================================
const arrCombinator = (...args) => {
  let result = args.flat()
  // return [ ...new Set([...result])]
  return result.filter( (el , I) => result.indexOf(el) === I )
}
console.log(arrCombinator([1,2,3,3,3], [1,4,5,2]));

// ======================================
// 11. Integer Reversal
// ======================================
const reverNum = (str) => {
  let num = str[0] === '-' ? '-' : '+'
  //coercion
  num = parseInt(`${num}1`);
  return parseInt([...str].slice(1).reduce((acc , curr ) => curr + acc , '')) * num

}

console.log(reverNum('-123'));




// PROJECT EULER
// =======================================
// 1. Multiples of 3 and 5
// =======================================
function multiplesOf3and5(number) {
  return [...Array(number).keys()]
    .filter(n => n % 3 === 0 || n % 5 === 0)
    .reduce((acc, n) => acc + n)  
}

console.log(multiplesOf3and5(1000));


// ======================================
// 2.  Largest palindrome product
// ======================================
function isPalindrome(num) {
  // get reverse
  let reversed = String(num)
    .split('')
    .reverse()
    .join('');
  // return equality check
  return Number(reversed) === num;
}

console.log(isPalindrome(89));
// ======================================
// 3.  Smallest Multiple of a given n
// ======================================
function smallestM(n){
  let result;
  // Get all n
  const nums = [];
  for( let i = 1 ; i <=n ; i++ ){
    nums.push(i)
  }
  //Check
  for( let i = 1 ; i < 1000 ; i++){
    for( let j = 1; j < n; j++){
      if( i % nums[j] === 0){
        result = i;
      }
    }
  }
  return result;
}

console.log(smallestM(5))

// ======================================
// 4.  Current Date & time
// ======================================
const current = (option) => Intl.DateTimeFormat('en-US', option).format( Date.now() ) 

console.log(`Today is: ${current({ weekday: "long"})}`);
console.log(
  `It's:${current({ hour: "2-digit"})} :${current({ minute: "2-digit" })}:${current({ second: "2-digit" })}`
);
console.log(Date());

// ======================================
// 5. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050. 
// ======================================
const newYear = () => {
  for (let year = 2014; year <= 2050; year++)
  {
    const d = new Date( year , 0 , 1 );
    if ( d.getDay() === 0 )
    console.log("1st January is being a Sunday  "+year);
  }
}
newYear();

// ======================================
// 6. Days left to next Christmas. 
// ======================================
const leftChristmas = () => Math.floor((new Date(2020 , 12 , 25) - Date.now())/ (1000 * 60 * 60 * 24));

console.log(leftChristmas());

// =========================================
// 7. Write a JavaScript program to calculate multiplication and division of two numbers (input from user).
// ==========================================

// Html file

// ========================================
// 8. Write a JavaScript program to get the website URL (loading page). 
// =========================================
const webUrl = () => console.log(document.URL);
webUrl();

// ========================================
// 21. Program to create a new string adding "Py" in front of a given string. If string begins with "Py" return string.    
// =========================================
const pyAdd = str => {
  if( str[0].toUpperCase() + str[1] === 'Py' ){
    return str 
  }
  return 'Py' + str
}
console.log(pyAdd('pyfredi'));


// =============================================
// Program to remove a character at the specified position and return the new string.

const removeChar = (str , pos) => str.replace( str.charAt(pos) , '')

console.log(removeChar('Porco' , 2));


// ==============================================
// To create a new string changing the position of first and last characters.

const changeChar = str => (
  str.charAt(str.length -1) + 
  str.slice(1 , str.length -1 ) + 
  str.charAt(0)
)

console.log(changeChar('Jamon'));


// ===============================================
// Program to create a new string with the first char added at the front and back.

const changeFirstChar = str => str.charAt(0) + str + str.charAt(0)

console.log(changeFirstChar('Jamon'));

// ===============================================
// Program to check whether a string starts with 'Java' 

const startsW = str => str.startsWith('Java')

console.log(startsW('Java'));


// ===============================================
// Program to find the largest integer
const findLargest = args => args.reduce(
  ( acc , curr ) => acc > curr ? acc : acc = curr 
, 0)

console.log(findLargest([1 ,2 ,3 ]));


// ===============================================
// Check whether a specified character exists within the 2nd to 4th position in a string
const checkSelect = ( str , char ) => str.slice(1 , 4).includes(char)

console.log(checkSelect('Trompeton' , 'r'));
 

// ===============================================
// Largest palindrome product
function isPalindrome(num) {
  // get reverse
  let reversed = String(num)
    .split('')
    .reverse()
    .join('');
  // return equality check
  return Number(reversed) === num;
}

function largestPalindromeProduct(n) {
  let highest = 0;
  // Find largest number
  let largestNum = '9';
  largestNum += Number(largestNum.repeat(n - 1));
  largestNum = Number(largestNum);

    // loop left number
  for (let i = largestNum; i > 0; i--) {
        // loop right number
    for (let j = largestNum; j > 0; j--) {
      let product = i * j;
            // check if palindrome
      if (isPalindrome(product)) {
        if (product > highest) highest = product;
        // we have the highest palindrome for this set, skip to next loop
        break;
      }
    }
  }
    // return the highest palindrome we found
  return highest;
}

// SMALLEST MULTIPLE
// ===============================================
function smallestMult(n) {
  const counter = []
  let x = 0
  // Good luck!
  for ( let i = 1; i <= 10 ; i++ ){
      counter.push(i)
  }
  for ( let i = 1; i <= counter.length ; i++){
    if( n % i == 0) {
      x++
    }
  }
  console.log(x);
  return x == counter.length
  
}

console.log(smallestMult(5));

// ===============================================
// Compare two objects to determine if they contain equivalent property values.
const x = { test: '1' , test2: '2' }
const y = { test: '4' , test2: '6' }

const objCheck = ( obj , obj2 ) => {
  return JSON.stringify(Object.keys(obj)) == JSON.stringify(Object.keys(obj2))
}
console.log(objCheck( x , y ));

// ===============================================
// Converts a specified number to an array of digits
const arrNum = n => [...`${n}`].map( el => parseInt(el))

console.log(arrNum(123));




// ===============================================
// filter out the specified values from a specified array.
const pullOut = ( arr , ...args ) => arr.filter(
  el => args.every( x => x != el )
)

console.log(pullOut(['a' , 'b' , 'c' , 'd' , 'e'], 'a' , 'c'));



// ===============================================
// to extract out the values at specified indexes from an array.
const extractArr = ( arr , ...args ) => {
  return arr.filter( (curr , I) => args.every( i => i !== arr[I] )) 
}

console.log(extractArr([ 1 , 2, 3, 4, 5 ] , 3 , 1  , 8));


// ===============================================
// Replace the names of multiple object keys with the values provided
const obj = { name: 'Bobo', job: 'Programmer', shoeSize: 100 };

const objReplace = ( keys , obj ) => {
  let result = {}
  for ( let key in obj ){           // Bobo
    result[ keys[ key ] || key ] = obj[ key ]
  }
  return result;
}

console.log(objReplace({ name: 'firstName', job: 'Actor' }, obj ))


// ===============================================
// function that returns true if provided function returns true for all elements in a collection
const truCheck = ( arr , fn = Boolean ) =>  arr.every(fn)

console.log(truCheck([ 1 , 2, 3, 4 ] , x => x > 0 ));


// ===============================================
// program to remove specified elements from the left of an array 
const leftR = ( arr , I ) => arr.slice(I)

console.log(leftR([ 1, 2, 3, 4 ] , 2));


// ===============================================
// program to filter out the non-unique values in an array
const filterUnique = arr => arr.filter( el  => arr.indexOf(el) ===  arr.lastIndexOf(el));

console.log(filterUnique([ 0 , 1 , 2, 3, 2, 4 ]));

// ===============================================
// program to filter out values against a provided comparator
const comparator = ( arr , c ) => arr.filter( el => el != c );


console.log(comparator([ 0 , 1 , 2, 3, 2, 4 ] , 3));


// ===============================================
// program to remove key-value pairs corresponding to the keys from an obj
const omit = ( obj , arr ) => arr.reduce(
  (acc, key) => (acc[key] ? delete obj[key] : obj, acc)
,
obj)

console.log(omit({ a: 1, b: '2', c: 3 }, ['b', 'c']));// {a: 1}


// ===============================================
// program to create an array of key-value pair arrays from a given object.
const arrCreator = obj => Object.keys(obj).map( el => [ el , obj[el] ]);

console.log(arrCreator({ a: 12 , b: 14 , c: 15}));



// ===============================================
// Program to create an obj from an array

const objCreator = arr => arr.reduce(( a, v ) => ( ( a[v[0]] = v[1]) , a), {}) 
const objCreator2 = arr => Object.fromEntries(arr)


console.log(objCreator([ [ 'a' ,12 ] , [ 'b' , 14 ] , [ 'c' , 15 ] ]));

// console.log(objCreator2([ [ 'a' ,12 ] , [ 'b' , 14 ] , [ 'c' , 15 ] ]));


// ===============================================
// program to remove falsey values from a given array.
const falsy = arr => arr.filter(Boolean)

console.log(falsy([ null , undefined , 0 , 1 ]));



// ===============================================
// program to Init a two dimension array of given width , height , value
const arrD = ( w , h , value ) => Array.from({ length: h }).map(
  () => Array.from({ length: w }).fill(value)
)

console.log(arrD( 3 , 3 , 5));


// ===============================================
// program to Init arrs with a given range
const arrRange = ( end , start = 0 ) => Array.from({ 
  length: Math.round(end + 1 - start)}).map( ( v, i ) => i + start )


console.log(arrRange(7));
console.log(arrRange( 9 , 3));

// ===============================================
// Count the ocurrences of a val within an arr
const countOccur = (arr, val) => arr.reduce(
  (a, cv) => (cv === val ? a + 1 : a), 0
);
console.log(countOccur([ 1 , 1 , 1 , 3 , 5, 6 ] , 1));


// ===============================================
// Create a deep clone of an Object
const deepClone = obj => Object.defineProperties(
  obj, Object.getOwnPropertyDescriptors(obj)
);

const a = { foo: 'bar', obj: { a: 1, b: 2 } }
const b = deepClone(a)

console.log(b) 




// ===============================================







// ===============================================







// ===============================================







// ===============================================







