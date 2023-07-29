const btn=document.querySelector('.toggleBtn')
const moveBtn=document.querySelector('.bgMove')
const fa=document.querySelector('.fa-solid')
const faMoon=document.querySelector('.fa-moon')

btn.addEventListener('click', function(){
    moveBtn.classList.toggle('active')
    fa.classList.toggle('dark')
    faMoon.classList.toggle('active')

    //if condtion  on dark and light mode
    if(moveBtn.classList=='active'){
        faMoon.classList.add('moon-active')
    }
    else{
        faMoon.classList.remove('moon-active')
    }

    //apply condtion when toogle button is active
    if(moveBtn.classList.contains('active')){
        document.body.classList.add('dark')
    }
    else{
        document.body.classList.remove('dark')
    }

})