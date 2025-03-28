//for navbar in mobile screens

const sidemenu = document.querySelector('#sidemenu')
const navbar = document.querySelector('nav')
const navlinksul = document.querySelector('nav ul')

function openMenu(){
    sidemenu.style.transform = 'translateX(-16rem)';
}

function closeMenu(){
    sidemenu.style.transform = 'translateX(16rem)';
}

//for header

window.addEventListener('scroll', ()=>{
    if (scrollY > 50){
        navbar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
        navlinksul.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50');
    }
    else{
        navbar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
        navlinksul.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50');
    }
})

// Honey pot

document.getElementById("honeypot").addEventListener("input", function() {
    if (this.value !== "") {
        // Prevent form submission if honeypot is filled
        event.preventDefault();
        alert("Bot detected.");
    }
});