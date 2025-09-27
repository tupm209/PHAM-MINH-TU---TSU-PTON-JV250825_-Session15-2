let arr = ["a", 1, 2, 5, "c", 3, "d", 4];

let count = 0;

for (const element of arr) {
  if (typeof element === "number") {
    count++;
  }
}

console.log(arr);
console.log(`Có ${count} ký tự số trong mảng.`);
