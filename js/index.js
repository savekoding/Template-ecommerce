
// Navigation Bar

const navOpen = document.querySelector('.mobile-open-btn');
const navClose = document.querySelector('.mobile-close-btn');
const primaryNavigation = document.getElementById('primary-navigation');

navOpen.addEventListener('click', ()=>{
    const visibility = primaryNavigation.getAttribute('data-visible');

    if(visibility === 'false'){
        primaryNavigation.setAttribute('data-visible', true);
        navClose.setAttribute('data-visible', true);
        cartItme.setAttribute('data-visible', false)
    }else{
        primaryNavigation.setAttribute('data-visible', false);
        navClose.setAttribute('data-visible', true);

    }
})

navClose.addEventListener('click', ()=>{
    const visibility = primaryNavigation.getAttribute('data-visible');

    if(visibility === 'true'){
        primaryNavigation.setAttribute('data-visible', false);
        navClose.setAttribute('data-visible', false);
    }
})


// ===========================Cart Menu===================

const shoppingBtn = document.getElementById('cart-box');
const cartItme = document.getElementById('cart-icon');
const crossBtn = document.getElementById('cross-btn');

shoppingBtn.addEventListener('click', ()=>{
    const showCart = cartItme.getAttribute('data-visible');
   
    if(showCart === 'false'){
        cartItme.setAttribute('data-visible', true)
    }else{
        cartItme.setAttribute('data-visible', false)
    }
})

crossBtn.addEventListener('click', ()=>{
    const showCart = cartItme.getAttribute('data-visible');
   
    if(showCart === 'true'){
        cartItme.setAttribute('data-visible', false)
    }
})
