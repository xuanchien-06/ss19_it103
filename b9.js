let result;

// Phép cộng giữa chuỗi và số
result = "javascript" + 5; 
console.log(result); // "javascript5"
// Giải thích: khi có chuỗi và số sẽ chuyển số thành chuỗi và nối vào chuỗi. 
// Kết quả là "javascript" + "5" = "javascript5"

result = "javascript" - 1; 
console.log(result); // NaN
// Giải thích: "javascript" không thể chuyển thành số, do đó kết quả là NaN

result = "3" + 2; 
console.log(result); // "32"
// Giải thích: Khi cộng chuỗi ("3") và số (2), JavaScript sẽ chuyển số thành chuỗi và nối lại. 
// Kết quả là "3" + "2" = "32".

result = "5" - 4; 
console.log(result); // 1
// Giải thích: chuỗi "5" được chuyển thành số 5, sau đó thực hiện phép trừ 5 - 4 = 1.


result = isNaN("123"); 
console.log(result); // false
// Giải thích: isNaN() kiểm tra xem giá trị có thể chuyển thành số hợp lệ không. 
// "123" có thể chuyển thành số hợp lệ, vì vậy isNaN("123") trả về false.

result = isNaN("hello"); 
console.log(result); // true
// Giải thích: isNaN("hello") kiểm tra xem "hello" có thể chuyển thành một số hợp lệ không. 
// Vì "hello" không thể chuyển thành số, nên kết quả là true.

result = Number.isNaN("123"); 
console.log(result); // false
// Giải thích: Number.isNaN() kiểm tra xem giá trị có phải là NaN không mà không chuyển đổi kiểu dữ liệu. 
// "123" là một chuỗi hợp lệ và không phải NaN, vì vậy kết quả là false.

result = Number.isNaN(NaN); 
console.log(result); // true
// Giải thích: Number.isNaN(NaN) kiểm tra xem giá trị NaN có phải là NaN không. 
// Vì NaN luôn là NaN, nên kết quả là true.
