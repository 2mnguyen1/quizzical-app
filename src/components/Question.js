import React from 'react'

export default function Question(props) {
    const [answers, setAnswers] = React.useState(mixAnwser())


    function mixAnwser() {
        const answers = props.incorrects
        answers.push(props.correct)
        const random = Math.floor(Math.random() * 4)
        let temp = answers[random]
        answers[random] = props.correct
        answers[3] = temp
        return answers
    }

    function fixQuestion(question) {
        let result = ""
        for (let i = 0; i < question.length; i++) {
            if (question[i] === ';') {continue;}
            if (question[i] === '&') {
                i += 5
            } else {
                result += question[i]
            }
        }
        return result
    }

    return (
        <div className="quiz-question">
            <h2 className="question">
                {fixQuestion(props.question)}
            </h2>
            <ul className="choices">
                <li>{fixQuestion(answers[0])}</li>
                <li>{fixQuestion(answers[1])}</li>
                <li>{fixQuestion(answers[2])}</li>
                <li>{fixQuestion(answers[3])}</li>
            </ul>
        </div>
    )
}
