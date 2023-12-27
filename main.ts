import inquirer from "inquirer"

let score: number = 0;
let round: number = 0;

console.log("welcome to the number guessing game")

async function randomGuessing() {
    const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let randomGenerator: number = numbers[Math.floor(Math.random() * numbers.length)]
    console.log(randomGenerator);

    let question = await inquirer.prompt([
        {
            "type": "input",
            "name": "number",
            "message": "chose any number"

        }
    ])
    if (Number(question.number) === randomGenerator) {
        console.log("correct")
        score++
        round++

    } else {
        console.log("incorrect")
        round++
        score--
    }
}

async function startGame() {

    await randomGuessing();
    let againPrompt

    do {
        againPrompt = await inquirer.prompt([
            {
                type: "confirm",
                name: "confirm",
                message: "Wana have an other round?😉"
            }
        ])

        if (againPrompt.confirm === true) {
            console.log("Good Luck 😊");
            await randomGuessing();

        } else {
            console.log(`You score is ${score} and you have played ${round} ${round === 1 ? "round" : "rounds"}!!`);
            console.log("Good Bye 🙂");
        }
    } while (againPrompt.confirm);
}

startGame();