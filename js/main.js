// #team

// Name appears on hover
const t1 = document.querySelector("#t1");
const p_t1 = document.querySelector("#team-name-t1")

t1.addEventListener("mouseover", () => {
    p_t1.style["display"] = "block";
});

t1.addEventListener("mouseout", () => {
    p_t1.style["display"] = "none";
});


const t2 = document.querySelector("#t2");
const p_t2 = document.querySelector("#team-name-t2")

t2.addEventListener("mouseover", () => {
    p_t2.style["display"] = "block";
});

t2.addEventListener("mouseout", () => {
    p_t2.style["display"] = "none";
});


const t3 = document.querySelector("#t3");
const p_t3 = document.querySelector("#team-name-t3")

t3.addEventListener("mouseover", () => {
    p_t3.style["display"] = "block";
});

t3.addEventListener("mouseout", () => {
    p_t3.style["display"] = "none";
});


const t4 = document.querySelector("#t4");
const p_t4 = document.querySelector("#team-name-t4")

t4.addEventListener("mouseover", () => {
    p_t4.style["display"] = "block";
});

t4.addEventListener("mouseout", () => {
    p_t4.style["display"] = "none";
});

// #hide-menu

// navbar Side Menu

const sideMenu = document.querySelector("#side-menu");
const menu = document.querySelector("#hidden-menu");
const arrowBack = document.querySelector("#arrow-back");

menu.addEventListener("click", () => {
    sideMenu.style["transform"] = "translateX(0px)";
});

arrowBack.addEventListener("click", () => {
    sideMenu.style["transform"] = "translateX(500px)";
});

window.addEventListener("click", (e) => {
    if (e.composedPath()[0] != sideMenu && e.composedPath()[1] != menu) {
        sideMenu.style["transform"] = "translateX(500px)";
    }
});