const input = document.querySelector("input");
const lstCon = document.querySelector(".list-container");
var id = 0;
var map = new Map();
function addTopic() {
  if (input.value === "") {
    alert("Please select a topic");
  } else {
    let li = document.createElement("li");
    li.innerText = input.value;
    map.set(id, input.value);
    li.id = id;
    lstCon.appendChild(li);
    let editBTn = document.createElement("button");
    editBTn.classList.add("edit-btn");
    editBTn.id = id;
    editBTn.innerText = "Edit";
    li.appendChild(editBTn);
    let deleteBTn = document.createElement("button");
    deleteBTn.innerText = "Delete";
    deleteBTn.id = id++;
    li.appendChild(deleteBTn);
    deleteBTn.classList.add("del-btn");
  }
  input.value = "";
}

lstCon.addEventListener("click", (e) => {
  if (e.target.className === "del-btn") {
    e.target.parentElement.remove();
  } else if (e.target.className === "edit-btn") {
    let input = document.createElement("input");
    input.type = "text";
    input.value = map.get(Number(e.target.id));
    e.target.parentElement.appendChild(input);
  }

  console.log(e.target.parentElement.innerText);
});
