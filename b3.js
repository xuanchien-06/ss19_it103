let type = prompt("Chọn chế độ cần chuyển đổi:\n1. VND --> USD\n2. USD --> VND");

if (type !== "1" && type !== "2") {
    console.log("Không hợp lệ. Vui lòng nhập 1 hoặc 2.");
} else {
    let cash = +prompt("Nhập vào số tiền: ");
    if (isNaN(cash) || cash <= 0) {
        console.log("Không hợp lệ vui lòng nhập 1 hoặc 2");
    } else {
        if (type == "1") {
            cash = cash / 23000;
            console.log(`${cash} USD`);
        } else if (type == "2") {
            cash = cash * 23000;
            console.log(`${cash} VND`);
        }
    }
}
