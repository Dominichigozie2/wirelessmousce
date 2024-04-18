const btn = document.querySelectorAll('.btn');

btn.forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
        const x = e.pageX - btn.offsetLeft;
        const y = e.pageY - btn.offsetTop;
        btn.style.setProperty('--x', x + 'px');
        btn.style.setProperty('--y', y + 'px');
    })
})
const Bbtn = document.querySelectorAll('.bbtn');

btn.forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
        const x = e.pageX - btn.offsetLeft;
        const y = e.pageY - btn.offsetTop;
        btn.style.setProperty('--x', x + 'px');
        btn.style.setProperty('--y', y + 'px');
    })
})

console.log(btn);//mouseover animation in buttons /

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



// for the nav list
document.addEventListener("DOMContentLoaded", function() {
    // Get all the navigation links
    var navLinks = document.querySelectorAll('.nav-link');

    // Loop through each link and add a click event listener
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Prevent the default action of the link
            event.preventDefault();

            // Remove the 'active' class from all links
            navLinks.forEach(function(navLink) {
                navLink.classList.remove('active');
            });

            // Add the 'active' class to the clicked link
            link.classList.add('active');

            // Get the target section ID from the link's href attribute
            var targetId = link.getAttribute('href').substring(1);

            // Find the target section by ID
            var targetSection = document.getElementById(targetId);

            // Scroll to the target section
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});










// for the scroll animationPlayState: 

const trans = document.querySelectorAll(".transformY");
const scaler = document.querySelectorAll(".scale");
const fadeLeft = document.querySelectorAll(".fade-from-left");
const fade = document.querySelectorAll(".fade-from-right");
const section = document.querySelectorAll(".fade-in");
const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -200px 0px"
};
const appearOnScroll = new IntersectionObserver(function(entries,
    appearOnScroll){
entries.forEach(entry =>{
    if(!entry.isIntersecting){
        entry.target.classList.remove("appear");
    }else{
        entry.target.classList.add("appear");
    }
})
},appearOptions);

section.forEach(sections =>{
    appearOnScroll.observe(sections);
});
fade.forEach(faders =>{
    appearOnScroll.observe(faders);
});
fadeLeft.forEach(fader =>{
    appearOnScroll.observe(fader);
});
scaler.forEach(scale =>{
    appearOnScroll.observe(scale);
});
trans.forEach(transY =>{
    appearOnScroll.observe(transY);
});