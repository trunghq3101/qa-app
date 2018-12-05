import React from 'react'
import classes from './Question.module.css'
import { Link } from 'react-router-dom'
import ControlBar from '../ControlBar/ControlBar';
import AnswerWithHandler from '../../hoc/ControlWithHandler/AnswerWithHandler';
import Control from '../Control/Control';
import BoxCard from '../UI/Box/BoxCard/BoxCard';

export default (props) => {

    return (
        <div className={`${classes.QuestionList}`}>
            {props.questions.map(item => {

                const AnswerButton = AnswerWithHandler(Control, "button", "Answer", item.id, () => { });

                return (
                    <BoxCard key={item.id}>
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
                                    <AnswerButton />
                                </React.Fragment>
                            )}
                        />
                    </BoxCard>
                )
            }
            )}
        </div>
    )
}
