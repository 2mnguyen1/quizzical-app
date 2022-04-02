import React from 'react';

export default function Answer(props) {
    const [isDisabled, setIsDisabled] = React.useState(true)


    const styleSelecting = {
        backgroundColor: props.isChoose ? '#D6DBF5' : '',
    }

    let styleValidate = {}
    if (props.isChoose) {
        if (props.isCorrect) {
            styleValidate = {
                backgroundColor: '#94D7A2'
            }
        } else {
            styleValidate = {
                backgroundColor: '#f8bcbc'
            }
        }
    }

    const styles = props.testing ? styleValidate : styleSelecting


    return (
        <li onClick={() => {props.handleClick(props.id); props.checkCorrectAnswer(props.correct, props.answer);}}  style={styles} >
            {props.answer}
        </li>
    )
}
