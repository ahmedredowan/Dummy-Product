/*----------Toggle Menu----------*/
$(".nav-toggle").click(function(){
    $(".nav-menu").toggleClass("show");
})

/*--------------Owl Carousel------------*/
$('#owl-demo').owlCarousel({         
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        560:{
            items:2
        },
        992:{
            items:3
        }
    }
    
})

/*----------Active Link Navigation Menu---------*/
const sections = document.querySelectorAll('section[id]');
function activeScroll(){
   const scrollY = window.pageYOffset;
    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop+sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-menu');
        }
        else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-menu');
        }
    })

}
window.addEventListener('scroll',activeScroll);

/*-----------Header Background Change------------*/
function headerScroll(){
    const headerId = document.getElementById('header');
    if(this.scrollY >= 80){
        headerId.classList.add('header-scroll');
    }
    else{
        headerId.classList.remove('header-scroll');
    }
}
window.addEventListener('scroll',headerScroll);

/*-----------Scroll Top------------*/
function scrollTop(){
    const scroll_top_id = document.getElementById('scroll-top');
    if(this.scrollY >= 500){
        scroll_top_id.classList.add('show-scroll-top');
    }
    else{
        scroll_top_id.classList.remove('show-scroll-top');
    }
}
window.addEventListener('scroll',scrollTop);

/*-----------Theme Color Change------------*/
const theme_icon_id = document.getElementById('icon-theme-id');
const dark_theme = 'dark-theme';
const icon_theme = 'bx-toggle-right';

const selected_theme = localStorage.getItem('selected-theme');
const selected_icon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(dark_theme) ? 'dark' : 'light';
const getCurrentIcon = () => theme_icon_id.classList.contains(icon_theme) ? 'bx-toggle-right' : 'bx-toggle-right';

if(selected_theme){
    document.body.classList[selected_theme === 'dark' ? 'add' : 'remove'](dark_theme);
  theme_icon_id.classList[selected_icon === 'bx-toggle-left' ? 'add' : 'remove'](icon_theme);
}

theme_icon_id.addEventListener('click',()=>{
    document.body.classList.toggle(dark_theme);
    theme_icon_id.classList.toggle(icon_theme);

    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());

})