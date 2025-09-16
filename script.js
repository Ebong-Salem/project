const btnOpen=document.querySelector('#open-menu')
const btnClose=document.querySelector('#close-menu')
const menu=document.querySelector('.navig')


btnOpen.addEventListener('click',()=>{
    menu.classList.add('active')

})

btnClose.addEventListener('click',()=>{
    menu.classList.remove('active')
})


const arrow=document.querySelector('.btn-scroll-down')

window.addEventListener('scroll',()=>{
    if(window.pageYOffset > 100){
        arrow.classList.add('active')
    }

    else{
        arrow.classList.remove('active')
    }
})

