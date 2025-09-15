// const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
// const btn = document.getElementById('btn')
// const color = document.querySelector('.Color')
// btn.addEventListener('click',()=>{
//     let hexcolor = "#";
//     for(let i = 0; i < 6; i++){
//         hexcolor += hex[getRandomNumber()];
//     }
//     color.textContent = hexcolor;
//     document.body.style.backgroundColor = hexcolor;
// })

// function getRandomNumber(){
//     return Math.floor(Math.random()* hex.length)
// }
const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
const btn = document.getElementById('btn')
const color = document.querySelector('.Color')

btn.addEventListener('click',()=>{
    let hexcolor = '#'
    for(let i = 0;i< 6;i++){
        hexcolor += hex[Math.floor(Math.random()*hex.length)]
    }
    document.body.style.backgroundColor = hexcolor
    color.textContent = hexcolor
})
