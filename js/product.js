
//Likes

const like = document.querySelector('.uil-thumbs-up');
const dislike = document.querySelector('.uil-thumbs-down');
const countLike = document.getElementById('count-like');
const postReviews = document.getElementById('post-reviews');
const addComment = document.getElementById('add-connent');
const description = document.querySelector('.description');
const reviewsContainer = document.querySelector('.reviews-container');


const discriptionTab = document.getElementById('dis-tab');
const reviewTab = document.getElementById('rev-tab');


discriptionTab.addEventListener('click', ()=>{
    const openTab = description.getAttribute('data-tab');
    description.setAttribute('data-tab', false)
    reviewsContainer.setAttribute('data-tab', false)
    reviewTab.classList.remove('active-tab')
        discriptionTab.classList.add('active-tab')

        
})

reviewTab.addEventListener('click', ()=>{
    const openTab = description.getAttribute('data-tab');

    if(openTab === 'false'){
        description.setAttribute('data-tab', true)
        reviewsContainer.setAttribute('data-tab', true)
        reviewTab.classList.add('active-tab')
        discriptionTab.classList.remove('active-tab')
    }
})


let likeCount = 0;

like.addEventListener('click', ()=>{
    like.classList.add('like');
    dislike.classList.remove('dislike');
    likeCount++;
    countLike.textContent = likeCount;
    
})

dislike.addEventListener('click', ()=>{
    like.classList.remove('like');
    dislike.classList.add('dislike');
    if(likeCount === 0){
      likeCount = 0
    }else{
        likeCount--;
    }
    countLike.textContent = likeCount;
    
})

addComment.addEventListener('click', ()=>{
    const createElement = document.createElement('div')
    createElement.classList.add('display-reviews')
    createElement.classList.add('flex')
    createElement.classList.add('bg-gray')
    postReviews.appendChild(createElement);
})