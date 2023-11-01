const correctAnswers=["B", "C"];
const submitButton= document.getElementById("submit");
const resultElement= document.getElementById("result");

submitButton.addEventListener('click', ()=>{
    const selectedAnswers= [
        document.querySelector('input[name="answer1"]:checked'),
        document.querySelector('input[name="answer2"]:checked')
    ];
    let score=0;

    selectedAnswers.forEach((selectedAnswer, index)=>{
        if(selectedAnswer){
            const userAnswer= selectedAnswer.value;
            if(userAnswer===correctAnswers[index]){
                score++;
            }
        }
    });
    if (score === correctAnswers.length) {
        resultElement.innerHTML = `
            <h2 style="color: green;">Congratulations!</h2>
            <p>You got all the answers right!</p>`;
    } else {
        resultElement.innerHTML = `
            <h2 style="color: red;"> Better Luck Next Time</h2>
            <p>You got ${score} out of ${correctAnswers.length} correct.`;
    }
});