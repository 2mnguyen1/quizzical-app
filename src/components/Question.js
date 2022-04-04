import React from 'react'
import Answer from './Answer'
import { nanoid } from 'nanoid'

export default function Question(props) {
    const [answers, setAnswers] = React.useState(props.choices)
    const [isCorrect, setIsCorrect] = React.useState(false)
    const [testing, setTesting] = React.useState(false)

    React.useState( () => {
        setAnswers(
                answers.map(answer => ({
                id: nanoid(),
                answer: answer,
                isChoose: false
            }))
        )
    }, [])


    function checkCorrectAnswer() {
        const updateCount = () => props.addCount()
        setTesting(true)
        let choosing
        for (let answer of answers) {
            if (answer.isChoose){
                choosing = answer.answer
            }
        }

        if (props.correct === choosing) {
            setIsCorrect(true)
            // updateCount()
        } else {
            setIsCorrect(false)
        }
    }

    const answersElement = answers.map(answer => (
        <Answer
            testing={testing}
            isCorrect={isCorrect}
            correct={props.correct}
            handleClick={handleClick}
            answer={answer.answer}
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


    function fixQuestion(str) {
        let result = ""
        for (let i = 0; i < str.length; i++) {
            if (str[i] === ';') {continue;}
            if (str[i] === '&') {
                i += 5
            } else {
                result += str[i]
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
                <button onClick={checkCorrectAnswer}></button>
            </ul>
        </div>
    )
}
