burger = document.querySelector('.burger')
navigation = document.querySelector('.navigation')
rightnav = document.querySelector('.rightnav')
navList = document.querySelector('.nav-list')

burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-nav');
    navList.classList.toggle('v-nav');
    navigation.classList.toggle('h-nav');
})