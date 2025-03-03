let a = +prompt("Nhập vào số a: ");
let b = +prompt("Nhập vào số b: ");
let c = +prompt("Nhập vào số c: ");
if (a === 0) {
    console.log("Phương trình vô nghiệm");
} else {
    let denta = b * b - 4 * a * c;
    if (denta > 0) {
        let x1 = ((-b - Math.sqrt(denta)) / (2 * a));
        let x2 = ((-b + Math.sqrt(denta)) / (2 * a));
        console.log(`Phương trình có 2 nghiệm phân biệt:\nx1 = ${x1}\nx2 = ${x2}`);
    } else if (denta === 0) {
        let x = (-b / (2 * a));
        console.log(`Phương trình có nghiệm kép: x1=x2=${x}`);
    } else {
        console.log(`Phương trình vô nghiệm`);
    }
}
