const solapaConatainer = document.getElementById("solapa-id");
const solapa = document.getElementById("solapa");
const carta = document.getElementById("carta");
const paper = document.getElementById("paper");
const draggable = document.getElementById("paper");
const papel = document.getElementById("paper-container");
function openCart() {
  solapa.classList.add("swing-top-fwd");
  carta.classList.remove("bounce-in-top");
  setTimeout(() => {
    solapaConatainer.style.zIndex = "0";
    paper.classList.add("slide-fwd-top");
  }, 1000);
}

var offsetX, offsetY;

function startDrag(event) {
  papel.style.zIndex = "1000";
  offsetX = event.touches[0].clientX - draggable.offsetLeft;
  offsetY = event.touches[0].clientY - draggable.offsetTop;
  console.log(offsetX);
  console.log(offsetY);
}

function drag(event) {
  event.preventDefault();
  draggable.style.left = event.touches[0].clientX - offsetX + "px";
  draggable.style.top = event.touches[0].clientY - offsetY + "px";
}

function endDrag(event) {
  const container = document.getElementById("container");
  draggable.classList.remove("slide-fwd-top");
  draggable.style.position = "fixed";
  container.insertBefore(papel, container.firstChild);
  papel.style.top = "223px";
  papel.style.bottom = "0px";
  papel.style.left = "45px";
  papel.style.right = "0px";
  
  setTimeout(() => {
    carta.classList.add("slide-out-left");
  }, 1000);
}
