const colors = [
  '#FF5733', // Bright Orange
  '#33FF57', // Bright Green
  '#5733FF', // Bright Blue
  '#FF33A1', // Bright Pink
  '#33A1FF', // Sky Blue
  '#A1FF33', // Lime Green
  '#FFBD33', // Gold
  '#33FFBD', // Cyan
  '#BD33FF', // Purple
  '#FF3333', // Red
  '#3333FF', // Blue
  '#33FF33', // Green
  '#FFD700', // Gold
  '#C0C0C0', // Silver
  '#A64D79', // Mauve
  '#7A88A1', // Slate Blue
  '#6B8E23', // Olive Drab
  '#FF4500', // Orange Red
  '#2E8B57', // Sea Green
  '#4682B4', // Steel Blue
  '#D2B48C', // Tan
  '#9932CC', // Dark Orchid
  '#8B0000', // Dark Red
  '#008B8B', // Dark Cyan
  '#FFDAB9', // Peach Puff
  '#B0C4DE', // Light Steel Blue
  '#F08080', // Light Coral
  '#20B2AA', // Light Sea Green
  '#87CEEB', // Sky Blue
  '#9370DB'  // Medium Purple
];
const shortQuotes = [
  "Love what you do. - Steve Jobs",
  "Innovate or follow. - Steve Jobs",
  "Believe in your dreams. - E. Roosevelt",
  "Plant a tree now. - Chinese Proverb",
  "Focus on the light. - Aristotle",
  "Spread love. - Mother Teresa",
  "One step begins a journey. - Lao Tzu",
  "Be what you decide to be. - R. W. Emerson",
  "Show up. - Woody Allen",
  "The mind is everything. - Buddha",
  "Be worthy of a book. - B. Franklin",
  "Tough people last. - R. Schuller",
  "I am my decisions. - S. Covey",
  "Change your thoughts. - N. V. Peale",
  "Decide to act. - A. Earhart",
  "Set a clear goal. - Aristotle",
  "Have a definite plan. - N. Hill",
  "Embrace your challenges. - B. Williams",
  "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
  "Winning isn't everything, but wanting to win is. - Vince Lombardi"
];
let intervalId
const button = document.querySelector('#button-click')
function timer (){
const container = document.querySelector('#changer-container')
const maincontainer = document.querySelector('#main-container')
const randomCOlors = Math.floor(Math.random()*colors.length)

container.style.backgroundColor = colors[randomCOlors]
maincontainer.style.backgroundColor = colors[randomCOlors]
const Changer = document.querySelector('#Changer')
const random = Math.floor(Math.random()*shortQuotes.length)
Changer.textContent = shortQuotes[random]
}
button.addEventListener('click',()=>{

// if(!intervalId){
    timer()
  // intervalId =   setInterval(timer,4000)
// }

})





