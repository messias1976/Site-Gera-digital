let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')


btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir')
})


let calcSrollValue = () => {
    let scrollProgress = document.getElementById("scrolltop");
    let progressValue = document.getElementById("icone");
    let pos = document.documentElement.scrollTop;
    let calcHeigth =
    document.documentElement.scrollHeight-document.documentElement.clientHeight;
    let scrollValue = Math.round ((pos * 100) / calcHeigth);
    if (pos > 100){
        scrollProgress.style.display = "grid";
    }else {
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
};

window.onscroll = calcSrollValue;
window.onload = calcSrollValue;
