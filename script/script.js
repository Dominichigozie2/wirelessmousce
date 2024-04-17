const btn = document.querySelectorAll('.btn');



btn.forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
        const x = e.pageX - btn.offsetLeft;
        const y = e.pageY - btn.offsetTop;
        btn.style.setProperty('--x', x + 'px');
        btn.style.setProperty('--y', y + 'px');
    })
})
//mouseover animation in buttons /

const menuBtn = document.querySelector('.manu-bar');
const sideMenu = document.querySelector('.side-menu');
const menuBtnIcon = menuBtn.querySelector('i');

console.log(menuBtnIcon);
menuBtn.addEventListener('click', () => {
    sideMenu.classList.toggle('active');
    menuBtnIcon.classList.toggle('bx-x');

    window.addEventListener("scroll", () =>{
        sideMenu.classList.remove('active');
        menuBtnIcon.classList.remove('bx-x');
    });
});