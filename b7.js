let num1 = +prompt("Nhập vào số thứ nhất: ");
let num2 = +prompt("Nhập vào số thứ 2: ");
let num3 = +prompt("Nhập vào số thứ 3: ");
let max = num1;
num2 > max ? max = num2 : max;
num3 > max ? max = num3 : max;
alert(`Số lớn nhất là: ${max}`);