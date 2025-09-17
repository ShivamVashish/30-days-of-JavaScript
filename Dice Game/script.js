const player0El = document.querySelector('#player--0');
const player1El = document.querySelector('#player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('#dice-img');
const btnNew = document.querySelector('#btn--new');
const btnRoll = document.querySelector('#btn--roll');
const btnHold = document.querySelector('#btn--hold');
const h1msg = document.querySelector('#message')
let totalplayer = [0,0]
let currentscore = 0
let activeplayer = 0
let playing = true
btnRoll.addEventListener('click',()=>{
    if(playing){
    const dice = Math.floor(Math.random()*6)+1;
        diceEl.src = `dice${dice}.png`
         diceEl.classList.remove('hidden');
       if(dice !== 1){
        currentscore = currentscore + dice;
        document.querySelector(`#current--${activeplayer}`).textContent = currentscore
       }else{
        document.querySelector(`#current--${activeplayer}`).textContent = 0
        currentscore = 0
        activeplayer = activeplayer === 0 ? 1 : 0;
       }
    }    
    btnNew.addEventListener('click',()=>{
        diceEl.classList.add('hideen')
        totalplayer = [0,0]
        currentscore = 0
        activeplayer = 0
        playing = true

            diceEl.classList.add('hidden');
        document.querySelector('#score--0').textContent = 0
        document.querySelector('#score--1').textContent = 0
        document.querySelector('#current--0').textContent = 0
        document.querySelector('#current--1').textContent = 0
        h1msg.textContent = ''
    })  
    btnHold.addEventListener('click',()=>{
        if(playing){
        totalplayer[activeplayer] +=  currentscore;
        document.querySelector(`#score--${activeplayer}`).textContent = totalplayer[activeplayer]
        currentscore = 0;
        if(totalplayer[activeplayer] >= 10){
            playing = false;
        document.querySelector(`#player--${activeplayer}`).classList.add('Winner')
        h1msg.textContent = `Winner Player ${activeplayer + 1}`
        // h1msg.style.backgroundColor = 'red'
        // h1msg.style.color = 'white';
        }else{
            document.querySelector(`#current--${activeplayer}`).textContent = 0
            activeplayer = activeplayer === 0 ? 1 : 0;
            player0El.classList.toggle('opacity-60');
            player1El.classList.toggle('opacity-60');
        } 
        }
    })
})