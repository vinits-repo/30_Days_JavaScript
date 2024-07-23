document.addEventListener("DOMContentLoaded", () => {
  // Task1
  const para = document.getElementById("task1");
  document.getElementById("btn1").addEventListener("click", () => {
    para.textContent =
      "Text content is change due to click on the below button.";
  });

  // Task2
  const pic = document.getElementById("chaiCodeImg");
  const btn2 = document.getElementById("btn2");
  btn2.addEventListener("dblclick", () => {
    pic.style.display = pic.style.display === "none" ? "block" : "none";
  });

  // Task3
  const hoverDiv = document.getElementById("hoverDiv");
  hoverDiv.addEventListener("mouseenter", () => {
    hoverDiv.style.backgroundColor = "grey";
  });
  //Task4
  hoverDiv.addEventListener("mouseout", () => {
    hoverDiv.style.backgroundColor = "black";
  });

  // Task5
  const keyInput = document.getElementById("keyInput");
  keyInput.addEventListener("keydown", () => {
    console.log(`Key Pressed  : ${event.key}`);
  });

  // Task6
  const inputTwo = document.getElementById("task6");
  inputTwo.addEventListener("keyup", () => {
    document.getElementById("para").textContent = inputTwo.value;
  });

  // Task7
  const form = document.getElementById("form");
  const username = document.querySelector('input[name="username"]')
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(`${username.value}`);
  });

// Task8
const change = document.getElementById('change')
const paraSelect = document.getElementById('selectValue') 
change.addEventListener('change', () => {
  paraSelect.textContent = change.value
})

// Task9












});
