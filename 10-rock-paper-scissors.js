   // =================================
            let score = JSON.parse(localStorage.getItem("score")) || {
                wins: 0,
                losses: 0,
                ties: 0,
            };
            // this is the same as above but shorter syntax
            /* if (!score) {
                score = {
                    wins: 0,
                    losses: 0,
                    ties: 0
                }
            } */
            //==========================

            updateScoreElement();

            function playGame(palyerMove) {
                const computerMove = pickComputerMove();

                let result = "";

                if (palyerMove === "scissors") {
                    if (computerMove === "rock") {
                        result = "Lose";
                    } else if (computerMove === "paper") {
                        result = "Win";
                    } else if (computerMove === "scissors") {
                        result = "Tie";
                    }
                } else if (palyerMove === "paper") {
                    if (computerMove === "rock") {
                        result = "Win";
                    } else if (computerMove === "paper") {
                        result = "Tie";
                    } else if (computerMove === "scissors") {
                        result = "Lose";
                    }
                } else if (palyerMove === "rock") {
                    if (computerMove === "rock") {
                        result = "Tie";
                    } else if (computerMove === "paper") {
                        result = "Lose";
                    } else if (computerMove === "scissors") {
                        result = "Win";
                    }
                }

                // score setting based by result
                if (result === "Win") {
                    score.wins += 1;
                } else if (result === "Lose") {
                    score.losses += 1;
                } else if (result === "Tie") {
                    score.ties += 1;
                }

                /* score values to local storage, using JSON.stringify
                becuase local storage only stores strings
                */
                localStorage.setItem("score", JSON.stringify(score));

                updateScoreElement();

                document.querySelector(".js-result").innerHTML = result;

                document.querySelector(".js-moves").innerHTML = `You:  You
            <img src="./${palyerMove}-emoji.png" alt="" class="move-icon" />
            <img src="./${computerMove}-emoji.png" alt="" class="move-icon" />
            Computer `;
            }

            function updateScoreElement() {
                document.querySelector(
                    ".js-score"
                ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
            }

            function pickComputerMove() {
                const randomNumber = Math.random();
                let computerMove = "";
                if (randomNumber < 1 / 3) {
                    computerMove = "rock";
                } else if (randomNumber < 2 / 3) {
                    computerMove = "paper";
                } else {
                    computerMove = "scissors";
                }
                return computerMove;
            }