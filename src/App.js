import React, { useState, useEffect } from 'react';
import blobs1 from './images/blobs1.png'
import blobs2 from './images/blobs2.png'
import Question from './components/Question'
import { nanoid } from 'nanoid'

export default function App() {
    const [start, setStart] = useState(true)
    const [fiveQuestions, setFiveQuestions] = useState([])

    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            .then(res => res.json())
            .then(data => setFiveQuestions(data.results))
    }, [])

    const questionsElements = fiveQuestions.map(question => (
        <Question
            key={nanoid()}
            question={question.question}
            correct={question.correct_answer}
            incorrects={question.incorrect_answers}/>
    ))


    return (
        <main>
            {start && <div className="container-start">
                <h1 className="title">Quizzical</h1>
                <p className="description">Ai thông minh hơn học sinh lớp 5</p>
                <button onClick={() => setStart(prev => !prev)} className="btn">Start quiz</button>
            </div>}

            {!start && <div className="container-questions">
                {questionsElements}
                <div>
                    <button className="btn btn-check">Check answers</button>
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
