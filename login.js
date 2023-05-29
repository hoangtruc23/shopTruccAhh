var paymentForm = document.getElementById("paymentForm");
var loginForm = document.getElementById("loginForm");

var purchase = document.querySelector(".purchase-block");
var login = document.querySelector(".login");
paymentForm.addEventListener("click", () => {
  purchase.style.display = "block";
  login.style.display = "none";
});
loginForm.addEventListener("click", () => {
    purchase.style.display = "none";
  login.style.display ="block";
});

// NHAP TT VA XUAT TT Khach Hang

function xuatTT() {
  document.getElementById("TenKH").innerHTML =
    document.forms["purchaseInfor"]["ip_TenKH"].value;
  document.getElementById("SDTKH").innerHTML =
    document.forms["purchaseInfor"]["ip_SDT"].value;
  document.getElementById("DCKH").innerHTML =
    document.forms["purchaseInfor"]["ip_DiaChi"].value;
}

var btn_Submit = document.getElementById("btn_submit_info");
var show_submit_form = document.getElementById("purchase_Two");
var fill_form = document.querySelector(".purchase-block");
//  Nhan Vao Gui De In Ra Bill Xac Nhan
btn_Submit.addEventListener("click", () => {
  show_submit_form.style.display = "block";
  fill_form.style.display = "none";
});

//  XAC NHAN DE HIEN THI DONG CAM ON
var btn_done_form = document.getElementById("btn_done_form");
var text_thanks = document.querySelector(".thanksPurchase");
btn_done_form.addEventListener("click", () => {
  text_thanks.style.display = "block";
  show_submit_form.style.display = "none";
});
