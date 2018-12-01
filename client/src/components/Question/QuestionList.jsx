import React from 'react'
import classes from './Question.module.css'
import { Link } from 'react-router-dom'
import ControlBar from '../ControlBar/ControlBar';
import AnswerWithHandler from '../../hoc/ControlWithHandler/AnswerWithHandler';
import Control from '../Control/Control';

export default (props) => {

    return (
        <div className={`mt-3 ${classes.QuestionList}`}>
            {props.questions.map(item => {

                const AnswerButton = AnswerWithHandler(Control, "button", "Answer", item.id, () => {});

                return (
                    <div className="card my-2" key={item.id}>
                        <div className="card-body">

                            <Link to={item.url}>
                                <h4>
                                    {item.question}
                                </h4>
                            </Link>

                            <span className="text-muted">
                                <Link to={item.url} className="text-muted">
                                    <strong >
                                        {item.numAnswers === 0 ?
                                            "No Answer Yet" :
                                            `${item.numAnswers} Answers`}
                                    </strong>
                                </Link> |  <small>Posted at {item.createdTimeToString}</small>
                            </span>

                            <ControlBar
                                left={(
                                    <React.Fragment>
                                        <AnswerButton/>
                                    </React.Fragment>
                                )} />

                        </div>
                    </div>
                )
            }
            )}
        </div>
    )
}
