import React, {useState} from 'react';
import blobs1 from './images/blobs1.png'
import blobs2 from './images/blobs2.png'


export default function App() {
    const [start, setStart] = useState(true)
    



    return (
        <main>
            {start && <div className="container-start">
                <h1 className="title">Quizzical</h1>
                <p className="description">Ai thông minh hơn học sinh lớp 5</p>
                <button onClick={() => setStart(prev => !prev)} className="btn-start">Start quiz</button>
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
