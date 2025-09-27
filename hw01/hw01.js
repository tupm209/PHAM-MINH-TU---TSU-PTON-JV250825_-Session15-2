let arr = ["c", "s", "c", "2", "6", "1"];
let newArr = arr.slice(0,3);
console.log(newArr);
let newArr2 = arr.slice(3,6);
console.log(newArr2);

let reverseArr = newArr2.concat(newArr);
console.log(reverseArr);

arr = reverseArr.join('');
console.log(arr);