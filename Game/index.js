const gameNumberElement=document.querySelector(".game_number");
const gamefeedbackElement=document.querySelector(".game_feddback");
const gameGuessElement=document.querySelector(".game_guess");
const gameHealthNumberElement=document.querySelector(".game_health-number");
const gameHealthElement=document.querySelector(".game_health-bar");
const gamePlayBtn=document.querySelector(".game_button-play");
const gameResetBtn=document.querySelector(".game_button-reset");
let gameHealth;
let gameOver;
let randomGuessNumber;

const updateData=(Element,message)=>{
    Element.textContent=message;
};

const init=()=>{
    gameHealth=100;
    gameOver=false;
    randomGuessNumber=Math.trunc(Math.random()*10)+1;
    updateData(gameHealthNumberElement,"100%");
    updateData(gamefeedbackElement,"?What is Your guess");
    updateData(gameNumberElement,"?");
    gameGuessElement.value="";
    gameHealthElement.style.backgroundColor="green";
    gameHealthElement.style.width=`${gameHealth}%`;

};
init();

const playGame=()=>{
    const guess=Number(gameGuessElement.value);
    if(!gameOver){
        if(guess <= 0){
            updateData(gamefeedbackElement,"Enter a valid number");
        }else if(guess === randomGuessNumber){
            gameNumberElement.textContent=randomGuessNumber;
            updateData(gamefeedbackElement,"You Win");
            gameOver=true;
        }else if(guess !== randomGuessNumber){
            if(gameHealth>20){
                updateData{
                    gamefeedbackElement,
                    
                }
            }
        }

    }
}
