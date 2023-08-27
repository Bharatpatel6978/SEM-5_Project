let form_outline2 = document.querySelector(".form-outline2");
let t_btn = document.querySelector(".three_line");
let t_btn_icon = document.querySelector(".toggle1 i");
let munu = document.querySelector(".dropdown_menu");
let a = document.querySelector(".ri-menu-line");
let main_memu = document.querySelector(".dropdown_main")
 function threeline() {
  munu.classList.toggle("open");
  a.classList.toggle("ri-menu-line");
  a.classList.toggle("ri-close-line")
}
function search()
{
    form_outline2.classList.add("form-outline3")
}
function myMenuFunction() {
  var i = document.getElementById("navMenu");

  if (i.className === "nav-menu") {
    i.className += " responsive";
  } else {
    i.className = "nav-menu";
  }
}
var lgbtn = document.getElementById("loginBtn");
var b = document.getElementById("registerBtn");
var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("forgetpass");

function login() {
    x.style.left = "4px";
    y.style.right = "-520px";
    lgbtn.className += " white-btn";
    b.className = "btn";
    x.style.opacity = 1;
    y.style.opacity = 0;
    z.style.opacity = 0;
    
}

function register() {
    x.style.left = "-510px";
    y.style.right = "5px";
    lgbtn.className = "btn";
    b.className += " white-btn";
    x.style.opacity = 0;
    y.style.opacity = 1;
    z.style.opacity = 0;
}
function Forget()
{
    x.style.left = "-1028px";
    z.style.right = "5px";
    lgbtn.className = "btn";
    b.className += " white-btn";
    x.style.opacity = 0;
    y.style.opacity = 0;
    z.style.opacity = 1;
    console.log("safs");
}