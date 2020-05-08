// let min = 1;
// let max = 10;
// let winningNum = getWinningNum(min,max);
// let guessesLeft = 3;

// const game = document.querySelector('#game');
// const minNum = document.querySelector('.min-num');
// const maxNum = document.querySelector('.max-num');
// const guessBtn = document.querySelector('#guess-btn');
// const guessInput = document.querySelector('#guess-input');
// const message = document.querySelector('.message');


// minNum.textContent = min;
// maxNum.textContent = max


// game.addEventListener('mousedown',(e)=>{
//     if(e.target.className === 'play-again'){
//         window.location.reload()
//     }
// })

// guessBtn.addEventListener('click', () => {
//     let guess = parseInt(guessInput.value)

//     if (isNaN(guess) || guess < 1 || guess > max) {
//         setMessage(`Please enter value in between ${min} and ${max}`, 'red')

//     } else {

//         if (guess === winningNum) {
//             gameOver(true, `${guess} is the correct answer, you won`)


//         } else {
//             guessesLeft = guessesLeft - 1;
//             if (guessesLeft != 0) {
//                 guessInput.value = ''
//                 setMessage(`${guess} is wrong answer, You have ${guessesLeft} attempt left`, 'red')

//             } else {

//                 gameOver(false, `You Lost, Correct answer is ${winningNum}`)
//             }
//         }
//     }
// })

// function setMessage(msg, color) {
//     message.textContent = msg
//     message.style.color = color

// }

// function gameOver(won, msg) {
//     let color;
//     won === true ? color = 'green' : color = 'red'

//     guessInput.disabled = true
//     guessInput.style.borderColor = color
//     message.style.color = color
//     message.textContent = msg
//     guessBtn.value = 'Play again'
//     guessBtn.className += 'play-again'
// }

// function getWinningNum(min, max){
//     return Math.floor(Math.random()*(max-min+1)+min)
// }

let min = 1,
    max = 10,
    winningNum = getWinningNum(min,max),
    guessAttempt = 3;

const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessInput = document.querySelector('#guess-input'),
    //   guessInput = document.querySelector('.guess-input'),
    guessBtn = document.querySelector('#guess-btn'),
    message = document.querySelector('.message');


minNum.textContent = min;
maxNum.textContent = max

game.addEventListener('mousedown',(e)=>{
    if(e.target.className==='play-again'){
        window.location.reload()
    }
})

guessBtn.addEventListener('click', (e) => {
    const guess = parseInt(guessInput.value)
    if (isNaN(guess) || guess < 1 || guess > max) {
       setMessage(`Wrong Input, Please put value between ${min} and ${max}`,'red')
    } else {
        if (guess === winningNum) {
            gameOver(true,`YOU WON...!!!`)
        } else {
            guessAttempt = guessAttempt - 1
            if (guessAttempt != 0) {
                setMessage(`wrong answer!!, you have ${guessAttempt} attempt left`,'red')
                guessInput.value = ''
            } else {
                gameOver(false,`you loose!!! correct answer is ${winningNum}`)
            }
        }
    }
})
function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';
    guessInput.disabled = true
    guessInput.style.borderColor = color
    message.style.color = color
    message.textContent = msg
    guessBtn.value = 'Play again'
    guessBtn.className += 'play-again'

}
function setMessage(msg,color){
    message.textContent = msg;
    message.style.color = color
}
function getWinningNum(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
