const allbutton = document.querySelectorAll('button')
const h1 = document.querySelector('h1')
allbutton.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(button.id === 'yes-button'){
            h1.innerHTML="Yes I liked You !"
             window.location.href = "https://wa.link/gxszr8"; 
        }else if(button.id === 'no-button'){
            h1.innerHTML="I not like you !"
        }
    })
})