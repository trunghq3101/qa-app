import React from 'react'
import classes from './Input.module.css'
import TextareaAutoResize from '../../../containers/TextareaAutoResize/TextareaAutoResize'

export default (props) => {
    let InputView = null

    switch (props.inputType) {
        case "question":

            InputView = <TextareaAutoResize
                name="question"
                onChange={props.changed}
                value={props.value}
                placeholder={props.placeholder}
                className={`${classes.Input} ${classes.Question}`} />
            break;

        case "answer":
            InputView = <TextareaAutoResize
                name="answer"
                onChange={props.changed}
                value={props.value}
                placeholder={props.placeholder}
                className={`${classes.Input} ${classes.Answer}`} />
            break;

        default:
            break;
    }

    return InputView
}
