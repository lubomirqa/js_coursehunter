// val = Number('5');

// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed(5));

//date manipulations
const birthday = new Date('2/2/2019');
birthday.setFullYear(2018);
birthday.setMonth(3);
let val;

val = birthday.getDay();
val = birthday.getFullYear();
val = birthday.getDate();

console.log(birthday);


//if-else manipulations
let string = '100';

if(string === '100'){
  console.log('CORRECT');}
  else {
    console.log('INCORRECT');
  }

 if(typeof string === String){
   console.log('CORRECT');
 } 
 else {
   console.log('INCORRECT');
 }


const name = 'John',
      age = 30,
      job = 'Web developer',
      city = 'Miami';

let html;

function hello(){
  return 'Hello World!';
}

function under30(){
  return 'Age is under 30';
}

function over30(){
  return 'Age is over 30';
}

let arr = [10, 20, 30, 50, 75, 100];

function over50(num){
  return num > 50;
}

//switch manipulations

let day;

switch(new Date().getDay()){
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;           
}

//functions manipulations
let meal = 'Cereal';

var dodo = {
  morning: function(){
    return 'Make a ' + meal;
  },
  noon: function(){
    return 'Make a supper';
  },
  evening: function(){
    return 'Delete';
  }
};

dodo.midnight = function(){
  return 'Go to ' + meal;
};

html = `
<ul>
  <li>Name: ${name}</li>
  <li>Age: ${age}</li>
  <li>Job: ${job}</li>
  <li>City: ${city}</li>
  <li>Hello: ${hello()}</li>
  <li>Counting: ${2+2}</li>
  <li>${age > 30 ? over30() : under30()}</li>
  <li>${arr.sort(function(x, y){
    return x - y;
  })}</li>
  <li>${arr.find(over50)}</li>
  <li>Today is ${day}</li>
  <li>${dodo.morning()}</li>
  <li>${dodo.noon()}</li>
  <li>${dodo.evening()}</ li>
  <li>${dodo.midnight()}</li>
</ul> `;



document.body.innerHTML = html;

if(confirm('Are you sure?')){
  console.log('Yes');
}
else {
  console.log('No');
}