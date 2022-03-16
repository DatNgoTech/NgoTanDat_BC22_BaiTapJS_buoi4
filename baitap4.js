/** Bài tập 1
 *  // ** Chương trình xuất 3 số nguyên theo thứ tự tăng dần
    // * Đầu vào
    // - Number_1, Number_2, Number_3 cho người dùng nhập
    // - 
    // * Xử lý
    // - Negative Value ( a > b) => a will be Place before b
    // - 
    // * Đầu ra 
    // - show kết quả
 * 
*/

document.getElementById("btn__KetQua1").onclick = function () {
  console.log("is clicked btnKetQua1");
  //   Input
  var number_1 = document.getElementById("number_1").value;
  var number_2 = document.getElementById("number_2").value;
  var number_3 = document.getElementById("number_3").value;

  // Calculate
  var numArray = [number_1, number_2, number_3];
  numArray.sort(function (a, b) {
    return a - b;
  });
  console.log(numArray);

  // Output
  var pKetQua1 = "Theo thứ tự tăng dần : " + numArray;
  document.getElementById("footer__BaiTap1").innerHTML = pKetQua1;
};

/** Bài tập 2
 *  // ** Chương trình xuất 3 số nguyên theo thứ tự tăng dần
    // * Đầu vào
    // - Number_1, Number_2, Number_3 cho người dùng nhập
    // - 
    // * Xử lý
    // - Negative Value ( a > b) => a will be Place before b
    // - 
    // * Đầu ra 
    // - show kết quả
 * 
*/

document.getElementById("btn__KetQua2").onclick = function () {
  console.log("is clicked btnKetQua2");
  var title = document.getElementById("sel1").value;
  var ten = document.getElementById("txtName").value;
  var gender = document.getElementById("sel-gender").value;

  if (gender == "Male") {
    var pKetQua2 = "Mr. " + ten;
    document.getElementById("footer__BaiTap2").innerHTML = pKetQua2;
  } else if (gender == "Female") {
    var pKetQua2 = "Ms. " + ten;
    document.getElementById("footer__BaiTap2").innerHTML = pKetQua2;
  }
};

/** Bài tập 3
 *  // ** Chương trình đếm nguyên, chẳn lẻ
    // * Đầu vào
    // - Number_1, Number_2, Number_3 cho người dùng nhập
    // - 
    // * Xử lý
    // - If - else
    // - 
    // * Đầu ra 
    // - show kết quả
 * 
*/

// Javascript program to count number of even
// and odd elements in an array

document.getElementById("btn__KetQua3").onclick = function () {
  console.log("is clicked btnKetQua3");

  //   Input
  var number_1_1 = document.getElementById("number_1_1").value;
  var number_2_2 = document.getElementById("number_2_2").value;
  var number_3_3 = document.getElementById("number_3_3").value;

  let arrayNumber = [number_1_1, number_2_2, number_3_3];
  let nn = arrayNumber.length;

  let evenCount = 0;
  let oddCount = 0;

  for (let i = 0; i < nn; i++) {
    // checking if a number is completely
    // Dư 1
    if (arrayNumber[i] & (1 == 1)) oddCount++;
    else evenCount++;
  }

  //Kết Quả
  var pKetQua3 =
    "Number of even elements = " +
    evenCount +
    "<br>" +
    "Number of odd elements = " +
    oddCount;
  document.getElementById("footer__BaiTap3").innerHTML = pKetQua3;
};

/** Bài tập 4
 *  // ** Chương trình Phân Biệt Tam Giác
    // * Đầu vào
    // - Number_1, Number_2, Number_3 cho người dùng nhập
    // - 
    // * Xử lý
    // - If - else
    // - 
    // * Đầu ra 
    // - show kết quả
 * 
*/
document.getElementById("btn__KetQua4").onclick = function () {
  console.log("is clicked btnKetQua4");

  var x = document.getElementById("txtA").value;
  var y = document.getElementById("txtB").value;
  var z = document.getElementById("txtC").value;

  if (x == y && y == z)
    document.getElementById("footer__BaiTap4").innerHTML =
      "Đây là Tam giác đều";
  // Check for isosceles triangle
  else if (x == y || y == z || z == x)
    document.getElementById("footer__BaiTap4").innerHTML =
      "Đây là Tam giác cân";
  // Otherwise scalene triangle
  else
    document.getElementById("footer__BaiTap4").innerHTML =
      "Đây là Tam giác thường";
};

/** Bài tập 1 thêm
 *  // ** Chương trình Báo cáo Ngày
    // * Đầu vào
    // - ngày tháng năm cho người dùng nhập
    // - 
    // * Xử lý
    // - +1
    // - 
    // * Đầu ra 
    // - show kết quả
 * 
*/

function calcNextDay(year, month, day) {
  var date = new Date(year, month - 1, day);
  var oneDay = 24 * 60 * 60 * 1000; //86 400 000 milliseconds in one day
  var nextDate = new Date(date.getTime() + oneDay);
  console.log(
    nextDate.getFullYear() +
      "-" +
      (nextDate.getMonth() + 1) +
      "-" +
      nextDate.getDate()
  );

  var pKetQua5 =
    nextDate.getDate() +
    "-" +
    (nextDate.getMonth() + 1) +
    "-" +
    nextDate.getFullYear() +
    " là ngày kế tiếp";
  document.getElementById("footer__BaiTap5").innerHTML = pKetQua5;
}

document.getElementById("btn__KetQua5").onclick = function () {
  console.log("is clicked btnKetQua5");

  var day = document.getElementById("dd").value;
  var month = document.getElementById("mm").value;
  var year = document.getElementById("yyyy").value;
  calcNextDay(year, month, day);
};

/** Bài tập 2 thêm
 *  // ** Chương trình Báo cáo Ngày
    // * Đầu vào
    // - Tháng , Năm, cho người dùng nhập
    // - 
    // * Xử lý
    // - Count days
    // - 
    // * Đầu ra 
    // - show kết quả
 * 
*/

function daysInMonth(month, year) {
  var d = new Date(year, month, 0).getDate();

  var pKetQua6 = d + " : là tổng ngày của tháng " + month + " năm " + year;
  document.getElementById("footer__BaiTap6").innerHTML = pKetQua6;
}

document.getElementById("btn__KetQua6").onclick = function () {
  console.log("is clicked btnKetQua6");

  var month = document.getElementById("mm1").value;
  var year = document.getElementById("yyyy1").value;
  daysInMonth(month, year);
};

/** Bài tập 3 thêm
 *  // ** Chương trình Đọc số bằng chữ
    // * Đầu vào
    // - nhập số
    // - 
    // * Xử lý
    // - English
    // - 
    // * Đầu ra 
    // - show kết quả
 * 
*/

function intToEnglish(number) {
  var NS = [
    { value: 1000, str: "thousand" },
    { value: 100, str: "hundred" },
    { value: 90, str: "ninety" },
    { value: 80, str: "eighty" },
    { value: 70, str: "seventy" },
    { value: 60, str: "sixty" },
    { value: 50, str: "fifty" },
    { value: 40, str: "forty" },
    { value: 30, str: "thirty" },
    { value: 20, str: "twenty" },
    { value: 19, str: "nineteen" },
    { value: 18, str: "eighteen" },
    { value: 17, str: "seventeen" },
    { value: 16, str: "sixteen" },
    { value: 15, str: "fifteen" },
    { value: 14, str: "fourteen" },
    { value: 13, str: "thirteen" },
    { value: 12, str: "twelve" },
    { value: 11, str: "eleven" },
    { value: 10, str: "ten" },
    { value: 9, str: "nine" },
    { value: 8, str: "eight" },
    { value: 7, str: "seven" },
    { value: 6, str: "six" },
    { value: 5, str: "five" },
    { value: 4, str: "four" },
    { value: 3, str: "three" },
    { value: 2, str: "two" },
    { value: 1, str: "one" },
  ];

  var result = "";
  for (var n of NS) {
    if (number >= n.value) {
      if (number <= 99) {
        result += n.str;
        number -= n.value;
        if (number > 0) result += " ";
      } else {
        var t = Math.floor(number / n.value);
        // console.log(t);
        var d = number % n.value;
        if (d > 0) {
          return intToEnglish(t) + " " + n.str + " " + intToEnglish(d);
        } else {
          return intToEnglish(t) + " " + n.str;
        }
      }
    }
  }
  document.getElementById("footer__BaiTap7").innerHTML = result;
}

document.getElementById("btn__KetQua7").onclick = function () {
  console.log("is clicked btnKetQua7");

  var number = document.getElementById("txtnumber").value;

  intToEnglish(number);
};
