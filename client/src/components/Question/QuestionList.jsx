import React from 'react'
import classes from './Question.module.css'
import { Link } from 'react-router-dom'

export default (props) => {
    const transformedQuestions = props.questionsRawData.map(item => {
        return {
            id: item.id,
            url: item.url,
            numAnswers: item.answers.length ? item.answers.length : 0,
            questionInfo: item.questionInfo.toLocaleString(),
            question: item.question
        }
    })
    return (
        <div className={`mt-3 ${classes.QuestionList}`}>
            {transformedQuestions.map(item => (
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
                            </Link> |  <small>Posted at {item.questionInfo}</small>
                        </span>

                    </div>
                </div>
            ))}
        </div>
    )
}
