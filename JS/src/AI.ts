let robot = <HTMLDivElement>document.getElementById('robot'),
  example = <HTMLDivElement>document.getElementById('example'),
  containerDiv = <HTMLDivElement>document.querySelector(".AI"),
  allExamples = <HTMLSpanElement[]>Array.from(document.querySelectorAll("#example > div > span")),
  chat = <HTMLDivElement>document.getElementById('chat'),
  chatInput = <HTMLInputElement>chat.children[0];

// Setting
let arrayOfQuestions: string[] = ["what is the news today ?", "When are the exams for this term ?"],

  result = document.createElement("div")
result.className = "result"

type Answers = {
  notFound: string
}

const Answers: Answers = {
  notFound : "I'm sorry, I don't have the answer right now."
}

allExamples.forEach(span => {
  span.onclick = () => {
    chatInput.value = `${span.textContent}`
  }
})

chatInput.onclick = () => {
  robot.remove()
  example.remove()
  containerDiv.append(result)
  containerDiv.setAttribute("style", "display: block")
}

chatInput.addEventListener("keydown", (event: KeyboardEvent) => {
  result.innerHTML = "";
  if (event.key === "Enter") {
    for (let i = 0; i < Answers.notFound.length; i++) {
      setTimeout(() => {
        result.append(Answers.notFound[i]);
      }, i * 50)
    }
  }
})