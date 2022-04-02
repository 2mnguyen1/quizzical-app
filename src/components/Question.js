import React from 'react'
import Answer from './Answer'
import { nanoid } from 'nanoid'

export default function Question(props) {
    const [answers, setAnswers] = React.useState([])


    const answersElement = answers.map(answer => (
        <Answer
            testing={props.testing}
            isCorrect={props.isCorrect}
            checkCorrectAnswer={props.checkCorrectAnswer}
            correct={fixQuestion(props.correct)}
            handleClick={handleClick}
            answer={fixQuestion(answer.answer)}
            isChoose={answer.isChoose}
            id={answer.id}
            key={answer.id}
        />
    ))

    function handleClick(id) {
        setAnswers(prevAnswers => (
            prevAnswers.map(answer => ({
                ...answer,
                isChoose: id === answer.id ? true : false
            }))
        ))
    }

    React.useState( () => {
        const answers = props.incorrects
        answers.push(props.correct)
        const random = Math.floor(Math.random() * 4)
        let temp = answers[random]
        answers[random] = props.correct
        answers[3] = temp
        setAnswers(
                answers.map(answer => ({
                id: nanoid(),
                answer: answer,
                isChoose: false
            }))
        )
    }, [])

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
                {answersElement}
            </ul>
        </div>
    )
}
