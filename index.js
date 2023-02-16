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
    setTimeout(() => {
        carta.classList.add('slide-out-left')
    }, 4000);
}