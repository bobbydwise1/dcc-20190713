/*
Good morning! Here's your coding interview problem for today.

This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?
*/

const createRandomTwoToTen = (min, max) => {
  var min = Math.ceil(min);
  var max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var listLimit = createRandomTwoToTen(2,10);
console.log('listLimit = ', listLimit);

const createNumberList = (sizeOfList) => {
  var numberList = [];
  for (i = 0; i < sizeOfList; i++) {
    numberList.push(Math.round(Math.random()*10));
  };
  return numberList;
};

//var myList = createNumberList(3); //use this for fixed length for debug
var myList = createNumberList(listLimit);
console.log('myList = ', myList);

const addTopTwo = (myList) => {
  if (myList.length < 2) {
    return [0,0];
  };
  yourList = myList.slice(); //don't mutate myList
  top1 = Math.max(...yourList);
  console.log('top1 = ', top1)
  for ( i = 0; i < yourList.length; i++ ) {
    if (yourList[i] === top1) {
      yourList.splice(i,1);
      break;
    }
  }
  //console.log('what is left of myList = ', myList)
  //console.log('what is left of yourList = ', yourList)
  top2 = Math.max(...yourList);
  return [top1,top2];
};

var tops = addTopTwo(myList);

console.log('top1, top2 = ', tops, 'sum = ', tops[0]+tops[1]);

$(document).ready(function() {
  $('#output-section-1').text(myList);
  $('#output-section-2').text(tops);
  $('#output-section-3').text(tops[0]+tops[1]);
  });
