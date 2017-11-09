'use strict';

var score = 0;
console.log('score', score);

var userName = prompt('hello there! May I have your name?');
function userNameFunction(){
console.log('user name', userName);
alert('welcome ' + userName + '!');
}
userNameFunction();

function jordanNamefunction(){
var myName = prompt('Let me start off easy! Is my name Jordan?').toUpperCase();
if(myName === 'YES' || myName === 'Y') {
  console.log('my name', myName);
  alert(userName + ', you got it duuuude!');
  score++;
} else {
  console.log('my name', myName);
  alert('Noooope, my name is Jordan...');
}
}
jordanNamefunction();

var student = prompt('Am I a student at CodeFellows?').toUpperCase();
if(student === 'YES' || student === 'Y') {
  console.log('student', student);
  alert('That\'s right ' + userName + '!');
  score++;
} else {
  console.log('student', student);
  alert('Come on ' + userName + ', Seriously though?');
}

var homeTown = prompt('Am I from the bay?').toLowerCase();
if(homeTown === 'no' || homeTown === 'n') {
  console.log('hometown', homeTown);
  alert('That\'s correct' + userName + '!');
  score++;
} else {
  console.log('hometown', homeTown);
  alert('Nope, ' + userName + ', I born and raised in Seattle!');
}

var abroad = prompt('Have I lived abroad before?').toLowerCase();
if(abroad === 'yes' || abroad === 'y') {
  console.log('study abroad', abroad);
  alert('That\'s right! I use to live in South Korea');
  score++;
} else {
  console.log('study abroad', abroad);
  alert('Womp womp, I use to live in South Korea.');
}

var coding = prompt('Do I love coding?').toLowerCase();
if(coding === 'yes' || coding === 'y') {
  console.log('coding', coding);
  alert('You got that right ' + userName + '!');
  score++;
} else {
  console.log('coding', coding);
  alert('Womp womp. ' + userName + ', You\'re wrong. Thank you for trying!');
}



for(var i = 0; i < 4; i++){
  var doctorWho = prompt('Here\'s a fun random question! Do you know what number doctor Jodie Whittaker will be on Doctor Who? Pick a number between 1 - 15');
  console.log(doctorWho[i]);
  if(doctorWho === '13') {
    console.log('Doctor Who', doctorWho);
    alert('that\'s correct!');
    score++;
    break;
  } else if(doctorWho > '13'){
    console.log('Doctor Who', doctorWho);
    alert('that\'s too high');
  } else if(doctorWho < '13'){
    console.log('Doctor Who', doctorWho);
    alert('that\'s too low');
  }
}


var studied = ['seattle', 'seoul', 'beijing'];
for(var j = 0; j < 6; j++){
  var guessStudied = prompt('I\'ve studied in a number of major cities around the world. Can you guess which ones? Here is a hint. Washington State, South Korea, and China.').toLowerCase();
  console.log(guessStudied[j]);
  if(studied.includes(guessStudied)){
    alert('Thats right! I have studied in Seattle, Seoul, and Beijing if you couldn\'t guess them all');
    score++;
    break;
  } else {
    console.log('false', guessStudied);
    alert('Wrong');
  }
}

alert(userName + ' ! out of 7, you got ' + score + ' correct! Coolio!');
