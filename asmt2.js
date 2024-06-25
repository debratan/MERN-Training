//1. Write a function that takes an array of numbers and returns the first and last elements of the array.

function element(arr){
    return [arr[0],arr[arr.length-1]];
}

var list1=[1,2,3,4,5];
console.log("First and Last number are:",element(list1));

// Output:
// First and Last number are: [ 1, 5 ]




//2. Write a function that returns a new array with each number squared using the map method.

function squared(arr){
    var newarr=[];
    arr.map((num) => { 
        num=Math.pow(num,2);
        newarr.push(num)});
    
    return newarr;
}
var list2=[1,2,3,4,5];
console.log("New Array:",squared(list2));

// Output:
// New Array: [ 1, 4, 9, 16, 25 ]



// 3. Explain the output of the following code snippet and why,
// console.log(foo);
// var foo = "Hello, World!";
// console.log(foo);

console.log(foo);  //foo variable is not declare properly bebore this statement.can't access next line statement.so it will print undefine.
var foo = "Hello, World!"; //Here foo is declare with var so it is valid.
console.log(foo);  //it can simplay print foo value , in this case "Hello, World."

// Output:
// undefined
// Hello, World!




// 4. Merge two arrays and add an additional element at the beginning of the merged array using the spread operator.

var arr1=[1,2,3,4]
var arr2=[5,6,7,8]
mergarr=[...arr1,...arr2];
mergarr.splice(0,0,0);
console.log("Merge array: ",mergarr);

// Output:
// Merge array:  [
//     0, 1, 2, 3, 4,
//     5, 6, 7, 8
//   ]




// 5. Given an array of objects representing users with name and age properties, write a function that returns an array of names of users who are over18.
// const users = [
//   { name: 'Alice', age: 22 },
//   { name: 'Bob', age: 17 },
//   { name: 'Charlie', age: 19 },
//   { name: 'David', age: 15 }
// ];

function users(users){
    newuser=[];
    for (let user of users){
        if (user.age>18){
            newuser.push(user);
        }
    }
    return newuser;
}
userlist=[
      { name: 'Alice', age: 22 },
      { name: 'Bob', age: 17 },
      { name: 'Charlie', age: 19 },
      { name: 'David', age: 15 }
    ];
console.log("Over 18 Age users: ",users(userlist));

// Output:
// Over 18 Age users:  [ { name: 'Alice', age: 22 }, { name: 'Charlie', age: 19 } ]




// 6. Write a function that takes an array of numbers and returns an object with two properties: sum, the sum of all the numbers, and product, the product of all the numbers using reduce method.

function sumproduct(arr){
    let sum=arr.reduce((acmt,value) => acmt+value,0);
    let product=arr.reduce((acmt,value) => acmt*value,1);
    let newarr={"sum":sum,"Product":product};
    return newarr;
}
let list3=[1,2,3,4];
console.log("Sum and Product:",sumproduct(list3));

// Output:
// Sum and Product: { sum: 10, Product: 24 }




// 7. Write a function that returns the array sorted by the length of each string, in ascending order.

function arrsort(arr){
    arr.sort((a,b)=> a.length-b.length);
    return arr;

}
let list4=["Python","C++","java","C"];
console.log("Length wise Sorted array:",arrsort(list4));

// Output:
// Length wise Sorted array: [ 'C', 'C++', 'java', 'Python' ]




// 8. Given an array of numbers, write a function that returns the index of the first number that is greater than 10. If no such number exists, return -1.  

function numsearch(arr){
    let found=true;
    for (var i=0;i<arr.length;i++){
        if (arr[i]>10){
            return i;
        }
        else{
            found=false;
        }
    }
    if (found === false)
        return -1;
}
let list5=[1,20,3,30];
console.log(numsearch(list5));
let list6=[1,2,3,3];
console.log(numsearch(list6));

// Output:
// 1
// -1




// 9. Write a function that removes the third element from an array and returns a new array with the removed element. Do not modify the original array.  

function arrremove(arr){
    return arr.slice(0,2).concat(arr.slice(3,));
}
let list7=[1,2,3,4,5];
console.log("After 3rd element remove new array:",arrremove(list7));

// Output:
// After 3rd element remove new array: [ 1, 2, 4, 5 ]




// 10. Write a function that concatenates two arrays without using the concat method. 

function arrconcat(arr1,arr2){
    return [...arr1,...arr2];
}
let list8=[1,2,3,4];
let list9=[5,6,7,8];
console.log("Concatenated array: ",arrconcat(list8,list9));

// Output:
// Concatenated array:  [
//     1, 2, 3, 4,
//     5, 6, 7, 8
//   ]