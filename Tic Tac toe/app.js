let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newGameBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-con");
let msg = document.querySelector("#win-msg");

let turnO = true;
let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach(box => {
    box.addEventListener('click', () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    }
)});

const resetGame = () => {
    turnO = true;
    enableBtns();
    msgContainer.classList.add('hide');
};

const disableBtns = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enableBtns = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (Winner) => {
    msg.innerHTML = `Congratulations, Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBtns();
};


const checkWinner = () => {
   for(let pattern of winPatterns ){
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val == pos2Val && pos2Val == pos3Val) {
            console.log(pos1Val)

            showWinner(pos1Val);
        }
    }
   }
};

resetBtn.addEventListener('click', resetGame);

newGameBtn.addEventListener('click', resetGame);