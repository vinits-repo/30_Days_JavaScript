// Task1
const title = document.getElementById("hello");
title.innerText = "Hare Krishna";

// Task2
const title1 = document.querySelector(".first-div");
title1.style.backgroundColor = "blue";

// Task3
const newDiv = document.createElement("div");
newDiv.textContent = "This is a new Div for Task3";
newDiv.style.backgroundColor = "grey";
newDiv.style.marginTop = "16px";

const body = document.querySelector("body");
body.appendChild(newDiv);

// Task4
const oldUl = document.getElementById("task4");
const newLi = document.createElement("li");
newLi.textContent = "React"; //new li
oldUl.appendChild(newLi);

// Task5
const para = document.getElementById("task5");
para.remove();

// Task6
oldUl.removeChild(oldUl.lastChild);

// Task7
const img = document.getElementById("img");
img.src = "/chaicode.png";

// Task8
title1.classList.remove("first-div");
title1.classList.add("new-class-list");

// Task9
const editPara = document.getElementById("task9");
const btn = document.getElementById("btn");
if (editPara && btn) {
  btn.addEventListener("click", () => {
    editPara.textContent = "New texts of para";
  });
} else {
  console.error("error");
}

// Task10
const heading = document.getElementById("task10");
heading.addEventListener("mouseenter", () => {
  heading.style.borderColor = "orange";
});
heading.addEventListener("mouseleave", () => {
  heading.style.borderColor = "white";
});
