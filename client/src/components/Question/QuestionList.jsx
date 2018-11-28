import React from 'react'
import classes from './Question.module.css'

export default (props) => {
    const transformedQuestions = props.questionsRawData.map(item => {
        return {
            id: item.id,
            url: item.url,
            numAnswers: item.answers.length,
            questionInfo: item.questionInfo.toLocaleString(),
            question: item.question
        }
    })
    return (
        <div className={`mt-3 ${classes.QuestionList}`}>
            {transformedQuestions.map(item => (
                <div className="card my-2" key={item.id}>
                    <div className="card-body">
                        <a 
                            href={item.url} 
                            target="_blank" 
                            rel="noopener noreferrer">
                            <h4>
                                {item.question}
                            </h4>
                        </a>
                        <span className="text-muted">
                            <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted">
                                <strong >
                                    {item.numAnswers === 0 ?
                                        "No Answer Yet" :
                                        `${item.numAnswers} Answers`}
                                </strong>
                            </a> |  <small>Posted at {item.questionInfo}</small>
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}
