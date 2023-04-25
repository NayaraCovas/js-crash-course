//var (is globaly scoped-we do not want to use it), let, const
//const cannot be changed and has to have a value
// const age= 30;
// age=31;
// console.log(age);

// let score;
// score = 10;
// console.log(score); 

//Strings, Numbers, Boolean, null, undefined, Symbol

// const name = 'John';
// const age =30;
// const rating =4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;

// console.log(typeof name);

// const name = 'John';
// const age =30;

// //concatenation
// console.log('My name is ' + name + ' and I am ' + age);

// //Template string
// console.log(`My name is ${name} and I am ${age}`);

// console.log(hello);

// const s = 'Hello World';
// console.log(s.length);

// const s = 'Hello World';
// console.log(s.toUpperCase());

// const s = 'Hello World';
// console.log(s.substring(0,5));
// result is Hello

// const s = 'Hello World';
// console.log(s.substring(0,5).toUpperCase());
// result is HELLO

// const s = 'Hello World';
// console.log(s.split(''));
// It splits a stray into a array
// ('') to split by letter
// result:
//  length
// : 
// 11
// [[Prototype]]
// : 
// Array(0)

// const s = 'technology, computers, it, code';
// console.log(s.split(', '));
// 0: "technology"
// 1: "computers"
// 2: "it"
// 3:"code"
// length: 4
// [[Prototype]]: Array(0)

//Arrays - variables that hold multiple values
//arrays are 0 based

/* const numbers = new Array(1,2,3,4,5);
console.log(numbers); */
/* 
const fruits = ['apples', 'oranges', 'pears'];

console.log(fruits[1]); */


/* const fruits = ['apples', 'oranges', 'pears'];
fruits[3] = 'grapes';
console.log(fruits); */

/* const fruits = ['apples', 'oranges', 'pears'];
fruits[3] = 'grapes'; (add grapes to the index 3)
fruits.push('mangos') (push mango to the end of the array)
fruits.unshift('strawberries');(push strawberries to the beggining of the array)
fruits.pop();(removes last)
console.log(Array.isArray('hello'));(gives the result false bc is is string and not array)
console.log(fruits.indexOf('oranges'));(gives the index of orange)
console.log(fruits); */





                        //object literals  are key value pair

/* const person ={
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state:'MA'
    }

} 
// console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
//result movies
console.log(person.address.city);
//Boston */

//destructuring (if we want to creat variables)

/* const person ={
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state:'MA'
    }

}  */
/* const {firstName,lastName} = person;

console.log(firstName); */
/* 
const {firstName,lastName, address: {city}} = person;

console.log(city); */

//ADD Property

// const person ={
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '50 main st',
//         city: 'Boston',
//         state:'MA'
//     }

// } 

// person.email = 'john@gmail.com';
// console.log(person);


//ARRAYS of objects
/* const todos = [
    {
        id:1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id:2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id:3,
        text: 'Dentist appt',
        isCompleted: false
    }
   
]; */
// console.log(todos);
// console.log(todos[1].text);

            //CONVERTING TO JSON (how we would send data to a server)

/* const todos = [
    {
        id:1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id:2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id:3,
        text: 'Dentist appt',
        isCompleted: false
    }
   
];

const todoJSON = JSON.stringify(todos);
console.log(todoJSON); */

                                      //LOOPS
//Parameters:assignment of interator(variable)/the condition/the increment
/* const todos = [
    {
        id:1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id:2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id:3,
        text: 'Dentist appt',
        isCompleted: false
    }
   
]; */


// For
// for(let i = 0; i <= 10; i++){
//     console.log(i);
/* for(let i = 0; i <= 10; i++){
        console.log(`For Loop Number: ${i}`);
}

//While
let i = 0;
while(i<10){
    console.log(`While Loop Number: ${i}`);
    i++;
}
 */

/* for(let i = 0; i < todos.length; i++){
    console.log(todos[i].text);
} */

/* for(let todo of todos) {
    // console.log(todo);
        // console.log(todo.text);
        console.log(todo.id);


} */

//High order array methods

//forEach, map, filter
/* todos.forEach(function(todo) {
       console.log(todo.text); 
}); */
/* 
const todoText = todos.map(function(todo) {
    return todo.text; 
});
console.log(todoText); */


/* const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
});
console.log(todoCompleted); */

/* const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})
console.log(todoCompleted); */


                              //Conditional
// == value, === value and data type

/* const x = 9;

if(x === 10) {
    console.log('x is 10');
} else if(x > 10) {
    console.log('x is greater than 10');

}else {
    console.log('x is less than 10');
} */

 //multiple conditions  OR ||, AND &&
/* const x = 4;
const y = 11;

if(x > 5 || y> 10) {
    console.log('x is more than 5 or y is more than 10');
} */


/* const x = 6;
const y = 11;

if(x > 5 && y> 10) {
    console.log('x is more than 5 or y is more than 10');
}
 */


    //TERNARY OPERATOR
   //It is a shorthand if statement and is used to assign variables based on a condition ?(then) :(else)
// condition-if it is true-if it is not true
 /*   const x = 11;

   const color = x > 10 ? 'red' : 'blue';
   console.log(color);

 */


   //Switches 
  /*  const x = 'green';

   const color = x > 10 ? 'red' : 'blue';
   switch(color){
    case 'red':
        console.log('color is red');
        break;
        case 'blue':
            console.log('color is blue');
            break;
            default:
                console.log('color is not red or blue');
                break;
   }
 */

                                    //Functions
  /* function addNums(num1, num2){
    console.log(num1 + num2);
  }  
  //   in order to call the function   
  addNums(5,4);
  resultado will be 9 */





 /*  function addNums(num1 = 1, num2 = 1){
    return num1 + num2;
  }  
   
  console.log(addNums(5,5));
//   resultado will be 10
 */



//arrow functions

 /* const addNums = (num1 = 1, num2 = 1) =>{
    return num1 + num2;
  }  
   
  console.log(addNums(5,5)); */
//   resultado will be 10

// another example

/* const addNums = (num1 = 1, num2 = 1) =>console.log(num1 + num2);
   
  addNums(5,5); */
//   resultado sera 10

//example with return with 2 parameters
/* const addNums = (num1 = 1, num2 = 1) => num1 + num2;

console.log(addNums(5,5));
result will also gonna be 10 */

//example with return with 1 parameter

/* const addNums = num1  => num1 + 5;
console.log(addNums(5)); */
// result will also gonna be 10


//example with forEach

/* const addNums = num1  => num1 + 5;
console.log(addNums(5)); 
todos.forEach((todo) => console.log(todo));
 */


                                 //Object oriented programming
//   constructure function with protortypes or es6 classes 
//to set to the properties of the object use (this)
//Constructor function
/* function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBithYear = function() {
        return this.dob.getFullYear();
    }
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

//Instantiete object with the Constructor function
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Marie', 'Smith', '3-6-1970');
// console.log(person2.firstName);
// console.log(person2.dob.getFullYear());
console.log(person1.getBithYear());
console.log(person1.getFullName()); */


//Using prototypes
// Object oriented programming in es5

/* function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    }

Person.prototype.getBithYear = function() {
    return this.dob.getFullYear();  
}
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

//Instantiete object with the Constructor function
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Marie', 'Smith', '3-6-1970');

console.log(person2.getFullName());
console.log(person1); */

//Synthetic SUGAR
//Instead of using this:
/* function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    }

Person.prototype.getBithYear = function() {
    return this.dob.getFullYear();  
}
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
} */

//use this bc is better (Synthetic SUGAR):



     /*         Class
method: is a function inside of a class */
/* class Person {
    constructor(firstName, lastName, dob) {
         this.firstName = firstName;
         this.lastName = lastName;
         this.dob = new Date(dob);
    }

    getBithYear() {
        return this.dob.getFullYear();   
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`; 
    }

}

//Instantiete object with the Constructor function
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Marie', 'Smith', '3-6-1970');

console.log(person2.getFullName());
console.log(person1); */


                    //DOM-DOCUMENT OBJECT MODEL 1;10min
  //window object is the parent object of the browser
/* console.log(window);
// window.alert(1);
alert(1); */



//Selectors: 
//Single element selectors
/*  console.log(document.getElementById('my-form'));
  ou 
const form = document.getElementById('my-form');
 console.log(form); */

//query selector (single element selector and only selects the first one)
/* console.log(document.getElementById('my-form')); 
// console.log(document.querySelector('.container'));
console.log(document.querySelector('h1')); */


//Multiple element selectors

// console.log(document.querySelectorAll('.item')); best option
// console.log(document.getElementsByClassName('item'));do not use this  bc ypu cannot use array methods on it (you should have to convert ot array it you want to use)
// console.log(document.getElementsByTagName('li')); 


/* const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item)); */

//Manipulating the DOM

// const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
/* ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText ='Brad'; */
//innerhtml to add html dinamicaly
/* ul.lastElementChild.innerHTML ='<h1>Hello</h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'red';
 */

/* const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.className);
}); */


/* const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    //when clicked it changes the background color
    document.querySelector('#my-form').style.background ='#ccc';
       //when clicked it first changes the form background  and then it changes the body background to dark and text white 
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items')
    .lastElementChild.innerHTML = '<h1>Hello</h1>'
}); */



/* const btn = document.querySelector('.btn');
btn.addEventListener('mouseover', (e) => {
    e.preventDefault();
    //when clicked it changes the background color
    document.querySelector('#my-form').style.background ='#ccc';
       //when clicked it first changes the form background  and then it changes the body background to dark and text white 
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items')
    .lastElementChild.innerHTML = '<h1>Hello</h1>'
});
 */





                                //FORM SCRIPT


  const myForm = document.querySelector('#my-form');  
  const nameInput = document.querySelector('#name');                       
  const emailInput = document.querySelector('#email');                       
  const msg = document.querySelector('.msg');     
  const userList = document.querySelector('#users'); 
  
  //Submit event on the form:
  myForm.addEventListener('submit', onSubmit);

  function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
       msg.innerHTML = 'Please enter all fields';

       setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);
        //Clear fields

        nameInput.value = '';
        emailInput.value = '';
    }   
  }