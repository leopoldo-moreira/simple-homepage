const cgTheme = document.querySelector('#change-theme');
const mobileNav = document.querySelector('#navigator-mobile');

let lightMode = true;
const rootElement = document.documentElement;

const lightTheme = {
    '--background-color': '#F2F9FE',
    '--text-color': '#000000',
    '--navigator-item-color': '#667488',
    '--navigator-hover-color': 'black',
    '--sun-icon-fill': '#223343',
    '--sun-icon-stroke':' #223343',
    '--sun-icon-background-color':'white',
    '--moon-icon-fill':'white',
    '--moon-icon-background-color':'#223343',
    '--alarado-logo-color': '#223343',
    '--navbar-mobile-background-color':'white'
};

const darkTheme = {
    '--background-color': '#111629',
    '--text-color': '#FFFFFF',
    '--navigator-item-color': '#FFFFFF',
    '--navigator-hover-color': 'white',
    '--sun-icon-fill': 'white',
    '--sun-icon-stroke':' white',
    '--sun-icon-background-color':'#223343',
    '--moon-icon-fill':'#223343',
    '--moon-icon-background-color':'white',
    '--alarado-logo-color': 'white',
    '--navbar-mobile-background-color':'#223343'
};

cgTheme.addEventListener('click',function(){
   lightMode ? changeTheme(darkTheme) : changeTheme(lightTheme);
   lightMode = !lightMode;    
});

function changeTheme(theme){
    for (prop in theme){
        changeProperty(prop, theme[prop])
    }
}

function changeProperty(property, value){
    rootElement.style.setProperty(property,value);
}

function toggleNav() {
    var nav = rootElement.querySelector('#navigator-mobile');
    console.log('clicou')    
    nav.style.display = (nav.style.display == 'flex') ? 'none' : 'flex';
}

const burguerIcon = document.querySelector('#burguer-icon');
const closeIcon = document.querySelector('#close-icon');

burguerIcon.addEventListener('click', function(){
    mobileNav.style.display = (mobileNav.style.display == 'flex') ? 'none': 'flex';
})

closeIcon.addEventListener('click', function(){
    mobileNav.style.display = (mobileNav.style.display == 'flex') ? 'none': 'flex';
})