// COUNT DOWM

var countDownDate = new Date().getTime() + 5 * 60 * 1000; // Cập nhật thời gian mỗi giây và hiển thị kết quả
var x = setInterval(function () {
  var now = new Date().getTime(); // Lấy thời gian hiện tại
  var distance = countDownDate - now; // Tính toán khoảng cách thời gian giữa hiện tại và thời gian đếm ngược

  let days = Math.floor(distance / (1000 * 60 * 60 * 24)); // Tính toán số phút và giây còn lại
  let hours = Math.floor(distance / (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Hiển thị kết quả trên div countdown
  document
    .getElementById("timeCountDown")
    .getElementsByClassName("days")[0].innerHTML = days;
  document
    .getElementById("timeCountDown")
    .getElementsByClassName("hours")[0].innerHTML = hours;
  document
    .getElementById("timeCountDown")
    .getElementsByClassName("minutes")[0].innerHTML = minutes;
  document
    .getElementById("timeCountDown")
    .getElementsByClassName("seconds")[0].innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timeCountDown").innerHTML = "Đếm ngược kết thúc";
  }
}, 1000);

// ABOUT ME

const gt = document.getElementById("mn_GioiThieu");
const t_gt = document.getElementById("text_GioiThieu");

const da = document.getElementById("mn_DuAn");
const t_da = document.getElementById("text_DuAn");

const cn = document.getElementById("mn_ChucNang");
const t_cn = document.getElementById("text_ChucNang");

gt.addEventListener("click", () => {
  t_gt.style.display = "block";
  t_da.style.display = "none";
  t_cn.style.display = "none";
});

da.addEventListener("click", () => {
  t_gt.style.display = "none";
  t_da.style.display = "block";
  t_cn.style.display = "none";
});

cn.addEventListener("click", () => {
  t_gt.style.display = "none";
  t_da.style.display = "none";
  t_cn.style.display = "block";
});
