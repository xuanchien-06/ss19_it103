//input = str(length>0)
// str.includes("") để kiểm tra trong chuỗi str có chứa khoảng trắng hay không
let str = prompt("Nhập vào chuỗi: ");
if (str.length > 0) {
    if (str.includes(" ")) {
        console.log("Chuõi chứa dấu cách");
    } else {
        console.log("Chuỗi không chứa dấu cách")
    }
} else {
    console.log("Sai định dạng");
}