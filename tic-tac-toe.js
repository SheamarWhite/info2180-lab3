window.onload = (event) => {
    console.log("Page finsihed");
    //const button = document.querySelector("button")[0].setAttribute("id", but);
    const button = document.getElementsByTagName("button")[0].setAttribute("id", "butt");
    const board1 = document.getElementById("board");
    const head1= document.createElement("style");
    const text = document.createTextNode("div:hover");
    const div0 = board1.getElementsByTagName("div")[0];
    div0.className = "square";
    div0.setAttribute("index", 0);
    //div0.setAttribute("style", "div.hover");
    const div1 = board1.getElementsByTagName("div")[1];
    div1.className = "square";
    div1.setAttribute("index", 1);
    const div2 = board1.getElementsByTagName("div")[2];
    div2.className = "square";
    div2.setAttribute("index", 2);
    const div3 = board1.getElementsByTagName("div")[3];
    div3.className = "square";
    div3.setAttribute("index", 3);
    const div4 = board1.getElementsByTagName("div")[4];
    div4.className = "square";
    div4.setAttribute("index", 4);
    const div5 = board1.getElementsByTagName("div")[5];
    div5.className = "square";
    div5.setAttribute("index", 5);
    const div6 = board1.getElementsByTagName("div")[6];
    div6.className = "square";
    div6.setAttribute("index", 6);
    const div7 = board1.getElementsByTagName("div")[7];
    div7.className = "square";
    div7.setAttribute("index", 7);
    const div8 = board1.getElementsByTagName("div")[8];
    div8.className = "square";
    div8.setAttribute("index", 8);
    head1.append(text);
    document.head.append(head1);
    

    const cell = document.querySelectorAll(".square");
console.log(cell);
//const button = document.getElementsByTagName("button")[0].setAttribute("id", "butt");
const winConditions = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];
const press = document.querySelector("button");
//console.log(btn);
let currentPlayer = "X";
let options = ["", "", "", "", "", "", "", "", ""];
let running = false;

startGame();

function startGame(){
  cell.forEach(cell => cell.addEventListener("click", cellClicked));
  press.addEventListener("click", restartGame);
  running = true;
}

function cellClicked(){
  const cellIndex = this.getAttribute("index");

  if (options[cellIndex] != "" || !running){
    return;
  }

  updateCell(this, cellIndex);
  changePlayer();
  checkWinner();
}

function restartGame(){
  currentPlayer = "X";
  options = ["", "", "", "", "", "", "", "", ""];
  document.getElementById("status").textContent = "Move your mouse over a square and click to play an X or an O.";
  cell.forEach(cell => cell.textContent = "");
  running = false;
  startGame();
}

function updateCell(cell, index){
  options[index] = currentPlayer;
  cell.textContent = currentPlayer;
}

function changePlayer(){
  if(currentPlayer == "X"){
    currentPlayer = "O";
  }
  else if(currentPlayer == "O"){
    currentPlayer = "X";
  }
}

function checkWinner(){
  let win = false;

  for(let i=0; i < winConditions.length; i++){
    const condition = winConditions[i];
    const A = options[condition[0]];
    const B = options[condition[1]];
    const C = options[condition[2]];

    if(A =="" || B == "" || C ==""){
      continue;
    }
    if(A == B && B == C){
      win = true;
      break;
    }
  }

  if(win){
    //document.getElementById("status").setAttribute("id", status.you-won);
    document.getElementById("status").textContent = `Congratulations! ${currentPlayer = (currentPlayer == "X") ? "O" : "X"} is the Winner!`;
    running = false;
  }
  else if (!options.includes("")){
    document.getElementById("status").textContent = "Draw";
  }

}

};