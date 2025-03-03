let character = prompt("Nhập vào 1 ký tự: ");
if (character.length == 1) {
    if ('a' <= character && character <= 'z' || 'A' <= character && character <= 'Z') {
        console.log(`Ký tự ${character} là chữ cái`);
    } else {
        console.log(`Không phải chữ cái`);
    }
} else {
    console.log("Không phải chữ cái");
}
