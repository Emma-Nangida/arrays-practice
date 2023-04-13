// const words=['hello','world','welcome'];
// console.log(words)
let num=[24,true,"hello",38];
let num2=new Array(24,true,"hello",38);
num.unshift("juice");
num2.shift();
console.log(num);
console.log(num2);

let num3=[20,"Emma",false,40];
let num4=new Array(20,"Emma",false,40);
num3.push("Winai");
num4.shift();
num3.unshift("Dolai");
num4.unshift("Ltonilai");
console.log(num3);
console.log(num4);

// //given an array of numbers xreturn an array even where every item in x is multiplied by 5

let x=[5,8,2,87,33,67];
let even=x.map(function(items){
    return items*5
})

console.log(even);

let z=[1,2,3,4,5];
let notEven=z.map(function(item){
return item*5
})
console.log(notEven);


let b=[2,4,6,8,10];
let iseven=b.map(function(item){
return item%5
})
console.log(iseven);


let result=x.forEach(function(item){
return item*5
})
console.log(result);

let resultb=[];
b.forEach(function(item){
    resultb.push(item*5)
})
console.log(resultb);

let resultr=[];
z.forEach(function(item){
resultr.push(item*5)
})
console.log(resultr);

//Find the last element of the following arrays.
//arr1 = [3,7,34,90,12]
//arr2 = [true, "green", "where",12,56]

let array1=[3,7,34,90,12];
let lastElement=array1.slice(-1);
console.log(lastElement);

array2=[true,"green","where",12,56];
let lastelement=array2.slice(-1);
console.log(lastelement);


//Write a JS program that will join the following array elements into a string
//myPets = ["Cow", "Python", "Snake", "Dog"];

let array=["Cow","Python","Snake","Dog"];
console.log(array.join(''));

let mypets=["Cow", "Python", "Snake", "Dog"];
console.log(mypets.join(','));

//Write a JS script to sort the following array items
//var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];

var arr3=[ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
arr3.sort();
console.log(arr3);
console.log(arr3.reverse());

//Write a program to remove duplicates from the following array.
//Console the array without duplicates, and console another array that only contains the duplicates
//ar arr = ["apple", "mango", "apple",
            //"orange", "mango", "mango"];

var arr=["apple", "mango", "apple","orange", "mango", "mango"];
console.log(arr);
function removeDuplicates(arr){
    return [...new Set(arr)];
}
console.log(removeDuplicates(arr));

//Find the last element of the following arrays.
//arr1 = [3,7,34,90,12]
//arr2 = [true, "green", "where",12,56]

let arr1=[3,7,34,90,12];
let arr2=[true,"green","where",12,56];
let lastElement3=arr1.slice(-1);
let lastElement4=arr2.slice(-1);
console.log(lastElement3);
console.log(lastElement4);

//find the first element of the following arrays.
//arr4 = ["emmayo",30,40,50,false,"peter"]
//arr5 = ["false","white","black",30,400]

let arr7 = ["emmayo",30,40,50,false,"peter"];
let arr5 = ["false","white","black",30,400];

console.log(arr7[0]);
console.log(arr5[0]);

// //find the length and the elemement of the first index in the array
// const information=[];
// information[0] ="Joan";
// information[1] ="Naewa";
// information=[2] =18;
// // information.length;
// console.log(information);


//string
//Write a JS script to sort the following string
//let word = "lufituaeble"
let word="lufituaeble"
let x4=word.split('')
console.log(x4.sort().join(''));





