let score = 0
// Question 1
let question1 = prompt(
  `Question 1:
  Who is the best soccer player ever?
  A) Messi
  B) Ronaldo
  C) Neymar`
);
//I can use \n to start a new line


if (question1 === "A") {
  score++;
}
alert(`Your score was ${score}/3!`);

//Question 2
let question2 = prompt(
    `Question 2:
    Who is more likel to win 2026 Super Bowl?
    A) Patriots
    B) Seahawks`
);


if (question2 === "B") {
    score++;
}
alert(`Your score was ${score}/3!`);

//Question3
let question3 = prompt(
    `Question 3:
    Who won 3 league titles in a row in the Liga MX(mexico soccer league)?
    A)Chivas
    B)Monterrey
    C)America`
);

if (question3 === "C") {
    score++;
}
alert(`Your score was ${score}/3!`);

// Final results
if (score === 0) {
  alert("You did not get any correct. Keep practicing!");
} else if (score === 3) {
  alert("You got all questions correct!");
} else {
  alert("Nice job 👍 You got " + score + " out of 3 correct.");
}