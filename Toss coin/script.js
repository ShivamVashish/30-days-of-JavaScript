const h1 = document.querySelector('h1');
const button = document.querySelector('button');
const headtell = ['Head', 'Tail'];
const coinImage = document.querySelector('img'); // इमेज एलिमेंट को सेलेक्ट किया
button.addEventListener('click',()=>{
    h1.innerHTML = "Processing..."
    coinImage.src = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzVzdW82bjN0ZHg0aGF2b2RnM3pvaXF6cThkanU5aXltYzVreHVlMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8MWdaFQEYEicGIkfHU/giphy.gif"
        button.disabled= true;
    setTimeout(()=>{
        const randomnumber = Math.floor(Math.random()*headtell.length)
        h1.innerHTML = headtell[randomnumber]
        button.disabled= false; 
    },4000)
})