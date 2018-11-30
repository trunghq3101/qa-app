import React from 'react'

export default (props) => (
    <React.Fragment>
        <div>
            <div>
                <strong>{props.username}</strong>
            </div>
            <div>
                <small className="text-muted">Answered at  {props.answerInfo}</small>
            </div>
        </div>
        <p className="my-1 mx-2">{props.answer}</p>
    </React.Fragment>
)
