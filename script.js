const tasks = document.querySelector("#tasks");
const inputField = document.querySelector("#inputField");
const addBtn = document.querySelector("#addBtn");
const removeBtn = document.querySelector(".removeBtn");

console.log("hi");

addBtn.addEventListener("click", () => {
  if (inputField.value === "") {
    alert("You must write something!");
  } else {
    const newli = document.createElement("li");
    const taskcol1 = document.createElement("div");
    taskcol1.classList.add("taskcol1");
    const check = document.createElement("i");
    check.classList.add("far", "fa-circle");
    const taskDesc = document.createElement("span");
    taskDesc.innerHTML = inputField.value;

    taskcol1.append(check, taskDesc);

    const taskcol2 = document.createElement("div");
    taskcol2.classList.add("removeBtn");
    const removeIcon = document.createElement("i");
    removeIcon.classList.add("fas", "fa-times");
    taskcol2.append(removeIcon);

    newli.append(taskcol1, taskcol2);
    tasks.append(newli);
    inputField.value = "";
  }
  saveData();
});

tasks.addEventListener("click", (e) => {
  if (e.target.tagName === "I" && e.target.classList.contains("fas")) {
    e.target.parentElement.parentElement.remove();
  } else if (
    e.target.tagName === "DIV" &&
    e.target.classList.contains("removeBtn")
  ) {
    e.target.parentElement.remove();
  } else if (e.target.tagName === "I" && e.target.classList.contains("far")) {
    e.target.classList.toggle("fa-circle");
    e.target.classList.toggle("fa-check-circle");
    e.target.classList.toggle("checked");
    e.target.nextElementSibling.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.classList.toggle("checked");
    e.target.previousElementSibling.classList.toggle("fa-circle");
    e.target.previousElementSibling.classList.toggle("fa-check-circle");
    e.target.previousElementSibling.classList.toggle("checked");
  } else if (
    e.target.tagName === "DIV" &&
    e.target.classList.contains("taskcol1")
  ) {
    e.target.children[0].classList.toggle("fa-circle");
    e.target.children[0].classList.toggle("fa-check-circle");
    e.target.children[0].classList.toggle("checked");
    e.target.children[1].classList.toggle("checked");
  } else {
    e.target.children[0].children[0].classList.toggle("fa-circle");
    e.target.children[0].children[0].classList.toggle("fa-check-circle");
    e.target.children[0].children[0].classList.toggle("checked");
    e.target.children[0].children[1].classList.toggle("checked");
  }
  saveData();
});

function saveData() {
  localStorage.setItem("data", tasks.innerHTML);
}

function showData() {
  tasks.innerHTML = localStorage.getItem("data");
}

showData();
