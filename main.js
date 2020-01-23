/* ====================================
    dark theme
==================================== */
var darkTheme = document.querySelector(".darkLight");
var body = document.querySelector("body");
var category = document.querySelectorAll(".category");

var check = JSON.parse(localStorage.getItem("check")) || 1;
console.log(check);
// var check = true;

darkTheme.addEventListener("click", handleDarkLightTheme);

function handleDarkLightTheme(event) {
  if (check === 1) {
    event.target.classList.add("dark-theme");
    body.classList.add("dark-theme-body");
    category.forEach(v => v.classList.add("category_dark"));
    check = 11;
    localStorage.clear();
    localStorage.setItem("check", JSON.stringify(11));
    // console.log("p");
  } else {
    // console.log("p");
    check = 1;
    event.target.classList.remove("dark-theme");
    body.classList.remove("dark-theme-body");
    category.forEach(v => v.classList.remove("category_dark"));
    localStorage.clear();
    localStorage.setItem("check", JSON.stringify(1));
  }
}

function handleThemeAfterRefresh(check) {
  if (check === 11) {
    darkTheme.classList.add("dark-theme");
    body.classList.add("dark-theme-body");
    category.forEach(v => v.classList.add("category_dark"));
    // check = false;
    // localStorage.clear();
    // localStorage.setItem("check", JSON.stringify(false));
    console.log("pf");
  } else {
    console.log("pt");
    // check = true;
    darkTheme.classList.remove("dark-theme");
    body.classList.remove("dark-theme-body");
    category.forEach(v => v.classList.remove("category_dark"));
    // localStorage.clear();
    // localStorage.setItem("check", JSON.stringify(true));
  }
}

handleThemeAfterRefresh(check);
