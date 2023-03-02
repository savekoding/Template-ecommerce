
const sideNav = document.getElementById('side-nav');
const arrow = document.getElementById('arrow');

arrow.addEventListener('click', ()=>{
  const categoryShow = sideNav.getAttribute('data-category')

  if(categoryShow === 'false'){
      sideNav.setAttribute('data-category', true)
      arrow.setAttribute('data-category', true)
  }else{
      sideNav.setAttribute('data-category', false)
      arrow.setAttribute('data-category', false)
  }
})