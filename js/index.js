'use strict';

// Demo for objects to constructors

var jeff = {
  course: '201d4',
  firstName: 'Jeff',
  lastInitial: 'G',
  faveNumber: 10,
  isCodeNinja: true,
  intro: function() {
    console.log('My name is ' + this.firstName + ' and my favorite number is ' + this.faveNumber);
  }
};

// I would need 242 lines of code to model our class this way
// (22 students * 11 lines each)

// What if... I had a function to make these many similar objects for me? A function where I could pass in a student's unique characteristics as arguments, and then that function would make the individual objects?

// Something like this would then make Jeff:
var mahClass = [];

function Student(firstName,lastInitial,faveNumber){
  this.course = '201d4';
  this.firstName = firstName;
  this.lastInitial = lastInitial;
  this.faveNumber = faveNumber;
  this.isCodeNinja = true;
  this.intro = function () {
    console.log('My name is ' + this.firstName + ' and my favorite number is ' + this.faveNumber);
  };
  mahClass.push(this);
};
// What if I wanted to make an array of students?
var jeff = new Student('Jeff', 'G',10);
var Susan = new Student('Susan', 'B', 11);
var miguel = new Student('Miguel','A',4);
