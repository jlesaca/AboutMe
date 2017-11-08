'use script';

var userName = prompt('hello there! May I have your name?')
  console.log('user name', userName);
  alert('welcome ' + userName + '!');

var myName = prompt('Let me start off easy! Is my name Jordan?')
var myName = myName.toUpperCase();
if(myName === 'YES' || myName === 'Y') {
  console.log('my name', myName);
  alert(userName + ', you got it duuuude!');
} else {
  console.log('my name', myName);
  alert('Noooope, my name is Jordan...')
};

var student = prompt('Am I a student at CodeFellows?');
var student = student.toUpperCase();
if(student === 'YES' || student === 'Y') {
  console.log('student', student);
  alert('That\'s right ' + userName + '!')
} else {
  console.log('student', student)
  alert('come on ' + userName + ', Seriously though?')
};

var homeTown = prompt('Am I from the bay?');
var homeTown = homeTown.toLowerCase();
if(homeTown === 'no' || homeTown === 'n') {
  console.log('hometown', homeTown);
  alert('That\'s correct' + userName + '!')
} else {
  console.log('hometown', homeTown);
  alert('Nope, ' + userName + ', I born and raised in Seattle!')
};

var abroad = prompt('Have I lived abroad before?');
var abroad = abroad.toLowerCase();
if(abroad === 'yes' || abroad === 'y') {
  console.log('study abroad', abroad);
  alert('That\'s right! I use to live in South Korea')
} else {
  console.log('study abroad', abroad);
  alert('Womp womp, I use to live in South Korea.')
};

var coding = prompt('Do I love coding?');
var coding = coding.toLowerCase();
if(coding === 'yes' || coding === 'y') {
  console.log('coding', coding);
  alert('You got that right ' + userName + '!')
} else {
  console.log('coding', coding);
  alert('Womp womp. ' + userName + ', You\'re wrong. Thank you for trying!')
};
