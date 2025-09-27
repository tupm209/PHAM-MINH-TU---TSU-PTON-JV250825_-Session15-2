let firstString = prompt("Hãy nhập chuỗi thứ nhất");
let secondString = prompt("Hãy nhập chuỗi thứ hai");

let arrString1 = firstString.split("");
let arrString2 = secondString.split("");
let count = 0;

for (let i = 0; i < arrString1.length; i++) {
  if (arrString1[i] === arrString2[i]) {
    count++;
  }
}

if (count === arrString1.length) {
  alert("2 chuỗi khớp nhau!");
} else {
  alert("2 chuỗi không khớp nhau!");
}
