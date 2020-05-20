

function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}



/**                  declaration                    **/

const startGameBtn   = document.getElementById('startgame'),
      endGamediv     = document.getElementById('endgame'),
      endGameBtn     = document.getElementById('reloadgame'),
      gameContainer  = document.getElementById('game'),
      ball           = document.getElementById('ball'),
      scoreCard      = document.getElementById('score'),
      levelCard      = document.getElementById('level'),
      playAreaHeight = document.getElementById('playarea').clientHeight,
      playAreaWidth  = document.getElementById('playarea').clientWidth;

var interval = 1000;
    score    = 0,
    level    = 0;

/**                 getting started                 **/


startGameBtn.addEventListener('click',function(e){
    gameContainer.classList.add('hide');
    ball.classList.remove('hide');
    startGame();
});

function startGame(){
    ball.style.backgroundColor = generateRandomColor();
    let X = Math.floor(Math.random()*playAreaHeight);
    let Y = Math.floor(Math.random()*playAreaWidth);
    ball.style.top = X + 'px';
    ball.style.left = Y +'px';
    ball.style.height = '10vh';
    ball.style.width = '10vh';
}

var ourInterval =  setInterval(function(){
    startGame();
},interval);


ball.addEventListener('click',function(){
    updateScore();
});


/**                score and level                 **/

function updateScore(){
    score++
    scoreCard.innerHTML = score;
    if(score > 10){
        updateLevel();
    }
};

function updateLevel(){
    score = 0;
    level++;
    scoreCard.innerHTML = score;
    levelCard.innerHTML = level;
    interval = interval-100;
    alert('level up!')
    if(interval==700){
        alert('Reached Last Level');
    }
    else if(interval==600){
        endGame();
    }
    else{
        clearInterval(ourInterval);
        startIntervalAgain();
    }
}

function startIntervalAgain(){
    console.log('interval set to' + interval);
    var ourInterval =  setInterval(function(){
        startGame();
    },interval);
}

/**                end game                  **/


function endGame(){
    clearInterval(ourInterval);
    endGamediv.classList.remove('hide');
    ball.classList.add('hide');
}
endGameBtn.addEventListener('click',function(){
    location.reload();
})