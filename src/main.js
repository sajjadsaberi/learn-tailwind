// const dub = (num1,num2) => {
//     return num1**num2 ;
// } ;

// console.log(dub(5,2));

//map :

const arr = [2,4,16,88,10,9,0,64] ;

// const newArr = arr.map((item) => item * 2 );

// console.log(newArr) ;

// const fil = newArr.filter((items) => items >= 10) ;

// console.log(fil) ;

const result = arr.reduce((accumulator,currentItem) => accumulator + currentItem,0) ;
console.log(result);

//

const arry = [1,3,5,7,9,11,13,15,17,19] ;

const container = [] ;

arry.forEach((number, index) => {
    console.log("number is :" + number);
    console.log("index is :" + index) ;
}) ;

console.log(arry) ;

//......................................

//Destructuring :

const data = {
    name: "ali",
    age: "28",
    address: {
        city: "bam",
        street: "bahonar"
    }
};

// const age = data["age"] ;
// const street = data.address.street ;

// console.log(age);
// console.log(data.address.city);
// console.log(street);

//des :> 

const { 
    name, 
    address: {city,street}, 
    age 
} = data ;

console.log(city);


//.....................................

//Spread Operator :

const numbers1 = [1,3,5,7,9] ;
const numbers2 = [2,4,6,8,10] ;

const nums = [...numbers1, ...numbers2] ;

const nums2 = ["start", 0 , ...numbers1, 10 , "End"];

console.log(nums) ;
console.log(nums2);

//.......................................

//Ternary Operator :

const Num3 = 10 ;

const result1 = Num3 >= 10 ? "Num is greater than 10" : "Num is less than 10" ;

console.log(result1); 

//.......................................

//Promise : async JS : 

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(json => console.log(json));

//........................................

// Async Await :

async function getData() {
// const getData = async () => {   --- for arrow function
    const rest = await fetch('https://randomuser.me/api/') ;
    const json = await rest.json() ;
    console.log(json.results[0].gender);
}

getData();

//.........................................

//export and import :

















