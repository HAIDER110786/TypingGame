const wordPlacement = document.querySelector('#wordToType');
const timer = document.querySelector('#timer');
const input = document.querySelector('#wordInput');

let columnNum = 0;
let currentTime = 5;

const wordList = ['vub','nweoin','sijcwei','wieji','wiej','sijew','eifji','adkfmwed','aqwjddd','ekmk','ofw'
,'joqjo','sas','wvrl','cqwml','wkedowj','weknwqkn','nkjf','ekcowj','jcwo','wemcowjo','wiejo','skecnk','eknk'
,'skndck','kjco','seknw','kenk','sjfow','hfbuhu'];

const changeWord = () =>{
    columnNum++;
    if(columnNum>29){columnNum=0;}
    wordPlacement.innerHTML = wordList[columnNum];
}

document.addEventListener('DOMContentLoaded',()=>{
    const DynamicButtonStartGame = document.createElement('button');
    DynamicButtonStartGame.className = "startButton";
    DynamicButtonStartGame.textContent = "Start the Game";
    timer.appendChild(DynamicButtonStartGame);
})

document.querySelector('#timer').addEventListener('click',(e)=>{
    if(e.target.classList.contains('startButton')){
        input.disabled=false;
        input.focus();
        wordPlacement.innerHTML = wordList[columnNum];
        startTimer();
    }
})



input.addEventListener('keyup',()=>{
    if(wordList[columnNum].length == input.value.length){
        if(wordList[columnNum] == input.value){
            resetTimer();
        }
    }
})

function resetTimer(){
    currentTime = 5;
    timer.innerHTML = `00:05`;
    changeWord();
    document.querySelector('#wordInput').value = '';
}

function startTimer(){
    timer.innerHTML = `00:0${currentTime}`;
    setTimeout(() => {
        if(currentTime>0){
            currentTime--;
            startTimer();
        }
        else{
            input.disabled = true;    
            timer.innerHTML='';
            const DynamicButtonPlayAgain = document.createElement('button');
            DynamicButtonPlayAgain.className = "startButton";
            DynamicButtonPlayAgain.textContent = "Play Again";
            timer.appendChild(DynamicButtonPlayAgain);
            alert("GAME OVER");
            currentTime = 5;
            document.querySelector('#wordInput').value = '';
            columnNum = 0;
            wordPlacement.innerHTML='';
        }
    }, 1000);
}