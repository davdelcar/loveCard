function openCart(){
    const solapaConatainer = document.getElementById('solapa-id')
    const solapa = document.getElementById('solapa')
    const carta = document.getElementById('carta');
    const paper = document.getElementById('paper')
    solapa.classList.add('swing-top-fwd')
    carta.classList.remove('bounce-in-top')
    setTimeout(() => {
        solapaConatainer.classList.add('solapa-0')
        solapaConatainer.classList.remove('solapa')
        paper.classList.add('slide-fwd-top')
    }, 1000);
/*     setTimeout(() => {
        carta.classList.add('slide-out-left')
    }, 4000); */
}
const paper = document.getElementById('paper')
const draggable = document.getElementById("paper");
      const papel = document.getElementById("paper-container");
      var offsetX, offsetY;

      function startDrag(event) {
        papel.style.zIndex = "1000";
        offsetX = event.touches[0].clientX - draggable.offsetLeft;
        offsetY = event.touches[0].clientY - draggable.offsetTop;
      }

      function drag(event) {
        event.preventDefault();
        draggable.style.left = (event.touches[0].clientX - offsetX) + "px";
        draggable.style.top = (event.touches[0].clientY - offsetY) + "px";
      }

      function endDrag(event) {
        // handle end of drag event
      }