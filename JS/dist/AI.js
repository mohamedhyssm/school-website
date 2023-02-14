"use strict";
let robot = document.getElementById('robot'), example = document.getElementById('example'), containerDiv = document.querySelector(".AI"), allExamples = Array.from(document.querySelectorAll("#example > div > span")), chat = document.getElementById('chat'), chatInput = chat.children[0];
// Setting
let arrayOfQuestions = ["what is the news today ?", "When are the exams for this term ?"], result = document.createElement("div");
result.className = "result";
const Answers = {
    notFound: "I'm sorry, I don't have the answer right now."
};
allExamples.forEach(span => {
    span.onclick = () => {
        chatInput.value = `${span.textContent}`;
    };
});
chatInput.onclick = () => {
    robot.remove();
    example.remove();
    containerDiv.append(result);
    containerDiv.setAttribute("style", "display: block");
};
chatInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        result.innerHTML = "";
        for (let i = 0; i < Answers.notFound.length; i++) {
            setTimeout(() => {
                result.append(Answers.notFound[i]);
            }, i * 50);
        }
    }
});
//# sourceMappingURL=AI.js.map