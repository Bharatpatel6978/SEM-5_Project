const toggle_menu = document.querySelector(".toggle_ul");
const open = document.querySelector(".three_line")
const close = document.querySelector(".close_line")
function toggle_open(){

  toggle_menu.classList.toggle("open");
  open.classList.toggle("close")
  close.classList.toggle("open")
//   document.querySelector(".three_line").style = "display:none;";
//   document.querySelector(".close_line").style = "display:block;";
}