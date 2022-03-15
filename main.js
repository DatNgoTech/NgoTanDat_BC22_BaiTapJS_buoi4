//kiểu dữ liệu boolean: true/false
var isLogin = false;

//Phép so sánh bằng (==) so sánh về giá trị
var number_1 = 5;
var number_2 = "5";
console.log(number_1 == number_2);

//phép so sánh bằng (===) so sánh về giá trị & so sánh kiểu dữ liệu
var number_3 = 10;
var number_4 = "10";
console.log(number_3 === number_4);

//phép so sánh khác (!=) so sánh về giá trị
var number_5 = 9;
var number_6 = 10;
console.log(number_5 != number_6);

//phép so sánh khác (!==) so sánh về giá trị & so sánh kiểu dữ liệu
var number_7 = 9;
var number_8 = "9";
console.log(number_7 !== number_8);

//phép so sánh lớn (>) 
var number_9= 20;
var number_10= 10;
console.log(number_9 > number_10);

//phép so sánh lớn bằng (>=) 
var number_11= 20;
var number_12= 20;
console.log(number_11 >= number_12);

//phép so sánh bé (<) 
var number_13= 100;
var number_14= 10;
console.log(number_11 < number_12);

//phép so sánh bé bằng (<=) 
var number_15= 7;
var number_16= 7;
console.log(number_11 <= number_12);

/**so sánh và (&&)
 * Nếu như tất cả biểu thức có giá trị là true => true
 * Nếu như tất cả biểu thức có giá trị là false => false
 * Nếu như có 1 biểu thức là false => false
 */
var bt_1 = true;
var bt_2 = true;
var bt_3 = false;
console.log(bt_1 && bt_2 && bt_3);

/**so sánh hoặc (||)
 * Nếu như tất cả biểu thức có giá trị là true => true
 * Nếu như có 1 biểu thức là true => true
 */ 
 var bt_4 = true;
 var bt_5 = false;
 var bt_6 = false;
console.log(bt_4 || bt_5 || bt_6);

/**Phủ Định (!)
 * 
 */ 

var bt_7 = false;
console.log(!bt_7);

/**
 * Cấu trúc điều kiện
 */ 
if (false){
//hành động được thực thi
console.log("Hành động được thực thi")}

/**
 * Chuyển số âm => dương
 * -5 => 5
 */ 
var d = -5;
if (d < 0){
    //Chuyển âm sang dương
    d = -d;
    console.log(d)
}

/**
 * Giả sử
 * -mua laptop 22 triệu
 * -cuối tháng trả 10 tr
 * -nợ lại 12 tr
 * => tiền phạt 1.5/100 * 12tr
 * 
 * -không nợ.
 * => nếu như nợ lớn hơn 0. Bị Phạt
 */ 
var creditCardBalance = 33000;
var payment = 24000;
var balance = creditCardBalance - payment;

if(balance > 0){
    //bị phạt
    var pentalty = 0.015 * balance;
    console.log("Tiền bị phạt là "+ pentalty);
}

/**
 * Cấu trúc điều kiện If else
 */ 
if(1==2){
    // hành động 1
    console.log("hành động 1")
}else{
    // hành động 2
    console.log("hành động 2")
};

/**
 * tìm số lớn nhất trong 2 số
 * - tạo biến soThu_1 = 10;
 * - tạo biến soThu_2 = 20;
 * -tạo biến soLonNhat;
 * nếu soThu_1 lớn hơn soThu_2 => soThu_1 là SLN
 * Ngược lại: soThu_2 là SLN
 */ 
var soThu_1 = 10;
var soThu_2 = 20;
var soLonNhat;

 if(soThu_1 > soThu_2){
    soLonNhat = soThu_1;
 }else{
     soLonNhat = soThu_2;
 }

 console.log("Số lớn nhất là "+ soLonNhat);

 /**
 * Viết chương trình tính toán tính lương
 * Giả sử:
 * - lươngTheoGio = 100000;
 * - soGioLam = 40 => soGioLam * luongTheoGio
 * - soGioLam = 50 => (40 * luongTheoGio) + (50-40) * luongTheoGio * 1.5 
 */ 
var luongTheoGio = 125000;
var soGioLam = 50;
var luongGioLam;

if(soGioLam > 40){
    luongGioLam = (40 * luongTheoGio) + (soGioLam - 40) * luongTheoGio * 1.5
}else{
    luongGioLam = soGioLam * luongTheoGio;
}
console.log("Lương của bạn là " + luongGioLam + "VND");

/**
 * Toán tử điều kiện <=> toán tử 3 ngôi
 */ 
// if ( 2==2 ){
//     console.log("DK đúng");
// }else{
//     console.log("DK sai");
// };

//DK ? "DK đúng" : "Dk sai"
2 == 2 ? console.log("DK đúng") : console.log("DK sai");

/**
 * Cấu trúc điều kiện If else if
 */ 
var so = 20;
if(so == 1){
    console.log("Đây là số 1");
}else if (so == 2){
    console.log("Đây là số 2");
}else if (so == 3){
    console.log("Đây là số 3");
}else {
    console.log("WTH ???");
};

/**
 * Tính DTB
 */ 
var toan = 9;
var ly = 8;
var hoa = 7;
var DTB = (toan + ly + hoa) / 3;

if (DTB >= 8.5){
    console.log("Giỏi!");
}else if(6.5 <= DTB && DTB < 8.5){
    console.log("Khá!");
}else if(5 <= DTB && DTB <6.5){
    console.log("TB");
}else {
    console.log("Yếu");
};

/**
 * Tính Shop
 * giả sử : Coca
 * donGia = 10000
 * soLuong = ?
 * Nếu soLuong < 50: soLuong * donGia
 * nếu 50 <= soLuong <= 100 : (49 * donGia) + (soLuong - 49) * donGia * 0.92
 * nếu 100 < soLuong: (49* donGia) + 50 * donGia * 0.92 + (soLuong - 100) * donGia * 0.88
 */ 

// Buổi 5 JS
/**
 * Switch Case
 * 
 */
var number = 1;
switch (number) {
    case 1:
        console.log("Đây là số 1");
        break;

    case 3:
        console.log("Đây là số 2");
        break;

    default:
        break;
}