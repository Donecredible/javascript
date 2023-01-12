let toggleNavStatus = false;
let toggleClrStatus = false;
let getBackground = document.querySelector("body");
let getSidebar = document.querySelector(".nav-sidebar");
let getSidebarTitle = document.querySelector(".nav-sidebar span");
let getSidebarUl = document.querySelector(".nav-sidebar ul");
let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

let toggleNav = function () {
  if (toggleNavStatus === false) {
    getSidebarUl.style.visibility = "visible";
    getSidebar.style.width = "272px";
    getSidebarTitle.style.opacity = "0.5";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "1";
    }

    toggleNavStatus = true;
  }
};

let toggleNavClose = function () {
  if (toggleNavStatus === true) {
    getSidebar.style.width = "50px";
    getSidebarTitle.style.opacity = "0";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "0";
    }
    getSidebarUl.style.visibility = "hidden";

    toggleNavStatus = false;
  }
};

let toggleClrHome = function () {
  if (toggleClrStatus === false) {
    getSidebar.style.width = "50px";
    getSidebarTitle.style.opacity = "0";
    getBackground.style.backgroundColor = "#f1f1f1";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "0";
    }
    getSidebarUl.style.visibility = "hidden";

    toggleNavStatus = false;
  }
};

let toggleClrRed = function () {
  if (toggleClrStatus === false) {
    getSidebar.style.width = "50px";
    getSidebarTitle.style.opacity = "0";
    getBackground.style.backgroundColor = "red";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "0";
    }
    getSidebarUl.style.visibility = "hidden";

    toggleNavStatus = false;
  }
};

let toggleClrOrg = function () {
  if (toggleClrStatus === false) {
    getSidebar.style.width = "50px";
    getSidebarTitle.style.opacity = "0";
    getBackground.style.backgroundColor = "orange";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "0";
    }
    getSidebarUl.style.visibility = "hidden";

    toggleNavStatus = false;
  }
};

let toggleClrPrp = function () {
  if (toggleClrStatus === false) {
    getSidebar.style.width = "50px";
    getSidebarTitle.style.opacity = "0";
    getBackground.style.backgroundColor = "purple";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "0";
    }
    getSidebarUl.style.visibility = "hidden";

    toggleNavStatus = false;
  }
};

let toggleClrGrn = function () {
  if (toggleClrStatus === false) {
    getSidebar.style.width = "50px";
    getSidebarTitle.style.opacity = "0";
    getBackground.style.backgroundColor = "green";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "0";
    }
    getSidebarUl.style.visibility = "hidden";

    toggleNavStatus = false;
  }
};

const colors = ["grey", "red", "orange", "purple", "green"];

let arrayLength = getSidebarLinks.length;
for (let i = 0; i < arrayLength; i++) {
  getSidebarLinks[i].style.backgroundColor = colors[i];
}
