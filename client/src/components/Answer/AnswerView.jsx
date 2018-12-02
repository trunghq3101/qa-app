import React from 'react'

export default (props) => (
    <React.Fragment>
        <div>
            <div>
                <strong>{props.data.username}</strong>
            </div>
            <div>
                <small className="text-muted">Answered at  {props.data.createdTimeToString}</small>
            </div>
        </div>
        <p className="my-1 mx-2">{props.data.answer}</p>
    </React.Fragment>
)
