import React, { useState, useEffect } from 'react';
import blobs1 from './images/blobs1.png'
import blobs2 from './images/blobs2.png'
import Question from './components/Question'
import { nanoid } from 'nanoid'

export default function App() {
    const [start, setStart] = useState(false)
    const [fiveQuestions, setFiveQuestions] = useState([])
    // const [count, setCount] = useState(1)

    // function addCount() {
    //     setCount(prev => ++prev)
    //     console.log(count)
    // }

    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            .then(res => res.json())
            .then(data => setFiveQuestions(data.results))
    }, [start])

    // React.useState( () => {
    //     const answers = props.incorrects
    //     answers.push(props.correct)
    //     const random = Math.floor(Math.random() * 4)
    //     let temp = answers[random]
    //     answers[random] = props.correct
    //     answers[3] = temp
    //     setGenerateChoices(
    //             answers.map(answer => ({
    //             id: nanoid(),
    //             answer: answer,
    //             isChoose: false
    //         }))
    //     )
    // }, [])
    let questionsElements = []
        questionsElements = fiveQuestions.map(question => {
            const { correct_answer, incorrect_answers} = question
            const answers = incorrect_answers
            answers.push(correct_answer)
            const random = Math.floor(Math.random() * 4)
            let temp = answers[random]
            answers[random] = correct_answer
            answers[3] = temp
            return <Question
                choices={answers}
                // addCount={addCount}
                // count={count}
                key={nanoid()}
                question={question.question}
                correct={correct_answer}
                incorrects={incorrect_answers}
            />
        })

    return (
        <main>
            {start && <div className="container-start">
                <h1 className="title">Quizzical</h1>
                <p className="description">"Ai thông minh hơn học sinh lớp 5"</p>
                <button onClick={() => setStart(prev => !prev)} className="btn">Start quiz</button>
            </div>}

            {!start && <div className="container-questions">
                {questionsElements}
                <div>
                    <button
                        onClick={() => setStart(prev => !prev)}
                        className="btn btn-check">Check answers
                    </button>
                </div>
            </div>}

            <div className="img-background img-top">
                <img src={blobs1} alt="top-img"/>
            </div>
            <div className="img-background img-bottom">
                <img src={blobs2} alt="top-img"/>
            </div>
        </main>
    )
}
