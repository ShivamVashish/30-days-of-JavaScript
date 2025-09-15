const colors = ['Green','Red','Magenta','Yellow','#f15025']
const btn = document.getElementById('btn')
const color = document.querySelector('.Color')


btn.addEventListener('click',()=>{
    const randomnumber = Math.floor(Math.random()*colors.length)
document.body.style.backgroundColor = colors[randomnumber]
color.textContent = colors[randomnumber]
})