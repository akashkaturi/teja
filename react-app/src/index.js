// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// // import App from './App';
// import reportWebVitals from './reportWebVitals';

// const element = <h1>Hello world 2</h1>;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// function hello(){
//   for(var i=0; i<=10;i++)
//   {
//     console.log(i**i);
//   }
//   console.log(i);
// }

const person={
  name: 'Akash',
  talk() {},
  walk() {
    console.log('this',this);
  },
}



const target_member = 'name';
person[target_member]='akash';
person.walk();
// const walk=person.walk.bind(person); /* bind function */
// walk();
// console.log(person.name);



const square = (number)=> number*number; //arrow function.
console.log(square(4));


const jobs = [
{ id:1, isActive: true},
{ id:2, isActive: false},
{ id:3, isActive: true},
];

// const activeJobs = jobs.filter(function(job){job.isActive});
const activeJobs = jobs.filter(job=>job.isActive);
// console.log(activeJobs);

//Map function
person.walk();
const colors = ['red','blue','green','black'];
const col=colors.map(color=>`<li> ${color} </li>`)
console.log(col);

//Object destructuring
const address={
  street:'Ramalingeshwara',
  city:'',
  country:'',
};

const {street, city, country}=address;
console.log(street);

//Concatenation using spread operator

const first = [1,2,3];
const second =[ 4,5,6];
const combined = [...first,'a',...second];
const clone_first = [...first];
console.log(combined);
console.log(clone_first);