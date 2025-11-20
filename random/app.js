// //You have an array of numbers:

// // Use map() to double every number and return a new array.

// // const arr = [1, 2, 3, 4, 5];

// // const arr1 = arr.map(num => num * 2)
// // console.log(arr1);



// // //Given this array of strings:
// // // Use map() to capitalize the first letter of each name.

// // const names = ["sid", "john", "maria"];

// // const name = names.map(n => {
// //     return n[0].toUpperCase()+n.slice(1) ;
// // })

// // const uppper = names.map(n => n.toUpperCase() )
// // console.log(name , uppper);


// // //3rd question 
// // // Given an array of objects:
// // // Use map() to return only the names in a new array.



// // const users = [
// //   { name: "sid", age: 25 },
// //   { name: "ram", age: 30 },
// //   { name: "aisha", age: 28 }
// // ];

// // const userName = users.map(n => {
// //    return n.name  
// // }) 

// // console.log(userName);


// // //4th 
// // // You’re given an array:
// // // Use map() to return the square roots.

// // const nums = [4, 9, 16, 25];

// // const Sq = nums.map(n => n * n)
// // console.log(Sq);

// // //5th
// // //Use map() to return a new array where 
// // // the price is increased by 18% GST.

// // const orders = [
// //   { id: 1, price: 200 },
// //   { id: 2, price: 450 },
// //   { id: 3, price: 120 }
// // ];

// // const updated =  orders.map( n => {
// //     return n.price *1.18 
   
// // })

// // console.log(updated);

// //FILTERS 
// //1st
// // Use filter() to return numbers greater than 20.

// const num = [10, 23, 45, 2, 8, 99];

// const n = num.filter( n => n > 20)

// console.log(n);


// //2nd
// //Given:
// // Use filter() to return words with more than 3 letters.

// const words = ["apple", "bat", "cat", "watermelon", "hi"];

// const length = words.filter( n => n.length > 3 )

// console.log(length);



// //  3rd Given:
// // Use filter() to get only adults (age ≥ 18).

// const people = [
//     { name: "sid", age: 67 },
//     { name: "ram", age: 22 },
//     { name: "mira", age: 15 }
// ];

// const age = people.filter(n => n.age >18)
// .map(n => n.name);
// console.log(age);



// // 4rd  Given an array:
// // Use filter() to remove all falsy values.
// const arr = [0, null, undefined, "hello", 13, false, ""];

// const filter = arr.filter(Boolean);
// console.log(filter);




// //5th
// // Use filter() to return products costing less than 1000.

// const products = [
//   { name: "Keyboard", price: 1500 },
//   { name: "Mouse", price: 700 },
//   { name: "Monitor", price: 12000 },
//   { name: "Pen Drive", price: 400 }
// ];


// const pro = products.filter(n => n.price > 1000).map(n => n.name);
// console.log(pro);






//Async funcitons and promises
// let a  =10 ; 
// let b = 20 

// let res = a + b
// console.log(res);

// async function getData() {
//   let data  = await fetch('https://jsonplaceholder.typicode.com/posts')
//   console.log(data);
// }

// getData();

//2nd
// async function getnumber() {
//     return 42 ;
// }

// async function run() {
//   const num = await getnumber();
//   console.log(num);
// }


// run();


//3rd

function fetchUser() {
  return new Promise(res => {
    setTimeout(() => res({ name: "sid", age: 25 }), 1000);
  });
}

async function run() {
  const user = await fetchUser();
  console.log(user);
  
}

run();

//4th 

async function getData() {
  try {
    throw new Error("failed this time");
  }catch(err){
    console.log("caught" , err.message);
  }
}

getData();


//5th

async function getid() {
  return 10;
}
async function getName() {
  return "siddhesh";
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function combine() {
  
  const id  = await getid();
  const name  = await getName();

  await wait(3000);

  return {id , name}; 
}

combine().then(console.log);

