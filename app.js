//pendefinisian variable
let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

//input fungsi
    function getCompChoice() {
        const choices = ['r', 'p', 's'];
        const randomNumber = Math.floor(Math.random() * 3);
        return choices[randomNumber];
    }


    function main() {
        rock_div.addEventListener('click', function() {
        game ("r");
        })
        paper_div.addEventListener('click', function() {
        game ("p");
        })
        scissor_div.addEventListener('click', function() {
        game ("s");
        })
        const resetButton = document.querySelector(".reset-button button");
        resetButton.addEventListener('click', reset);
    }; 

//proses fungsi
    function convertToWord(letter) {
        if (letter === "r") return "Rock";
        if (letter === "p") return "Paper";
        return "Scissor";
    }       
    function win(userChoice, compChoice) {
        userScore++;
        userScore_span.innerHTML = userScore;   
        compScore_span.innerHTML = compScore;
        const smallUserWord = `<sub style="font-size: 12px">user</sub>`;
        const smallCompWord = `<sub style="font-size: 12px">comp</sub>`;
        result_div.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} beats ${convertToWord(compChoice)} ${smallCompWord} . You win!`;
    }
    function lose(userChoice, compChoice) {
        compScore++;
        userScore_span.innerHTML = userScore; 
        compScore_span.innerHTML = compScore;
        const smallUserWord = `<sub style="font-size: 12px">user</sub>`;
        const smallCompWord = `<sub style="font-size: 12px">comp</sub>`;
        result_div.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} loses to ${convertToWord(compChoice)} ${smallCompWord} . You lost!`;
    } 
    function draw(userChoice, compChoice) {
        userScore_span.innerHTML = userScore;
        compScore_span.innerHTML = compScore;
        const smallUserWord = `<sub style="font-size: 12px">user</sub>`;
        const smallCompWord = `<sub style="font-size: 12px">comp</sub>`;
        result_div.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} equals ${convertToWord(compChoice)} ${smallCompWord} . It's a draw!`;
    } 

    //logika permainan
    function game(userChoice) {
        const compChoice = getCompChoice();
        switch (userChoice + compChoice) {
            case "rs": 
            case "pr":
            case "sp":
                win(userChoice, compChoice);
                break;
            case "rp":
            case "ps":
            case "sr":
                lose(userChoice, compChoice);
                break;  
            case "rr":
            case "pp":
            case "ss":
                draw(userChoice, compChoice);
                break;      
        }
    };

    //fungsi reset
    function reset() {
        userScore = 0;
        compScore = 0;
        userScore_span.innerHTML = userScore;
        compScore_span.innerHTML = compScore;
        result_div.innerHTML = "Make your move!";
    }
main();