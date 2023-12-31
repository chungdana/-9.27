'use strict';

//array

//2. index position
const fruits = ['/사과', '/바나나'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

console.clear();
//3.looping over an array
//print all fruits
//a. for
for (let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

//b.for of
for (let fruit of fruits){
    console.log(fruit);
}

//c.foreach
fruits.forEach((fruit)=>console.log(fruit));

//4. Addition, deletion, copy
//push: add an item to the end
fruits.push('/딸기', '/복숭아');
console.log(fruits);

//pop: remove an item from the end
fruits.pop();
console.log(fruits);

//note!! shift, unshift are slower than pop push
//splice: remove an item by index position
fruits. push('/딸기','/복숭아','/레몬');
console.log(fruits);
fruits.splice(1,1);
console.log(fruits);
fruits.splice(1,1,'/사과','/수박');
console.log(fruits);

//combine two arrays
const fruits2= ['/망고','/참외'];
const newfruits = fruits.concat(fruits2)
console.log(newfruits);

//5. Searching
//find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('/딸기'));
console.log(fruits.indexOf('/수박'));
console.log(fruits.indexOf('/참외'));

//includes
console.log(fruits.includes('/수박'));
console.log(fruits.includes('/참외'));

//lastIndexDf
console.clear();
fruits.push('/사과');
console.log(fruits);
console.log(fruits.indexOf('/사과'));
console.log(fruits.lastIndexOf('/사과'));