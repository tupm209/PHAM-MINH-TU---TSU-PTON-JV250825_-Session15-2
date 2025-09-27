let randomString = prompt("Hãy nhập vào 1 dãy ký tự");
let arrString = randomString.split("");

for (let i = 0; i < arrString.length; i++) {
  if (arrString[i].includes("-")) {
    arrString[i] = "_";
  }
}

let newString = arrString.join("");
alert(`Đây là dãy sau khi thay đổi ${newString}`);
