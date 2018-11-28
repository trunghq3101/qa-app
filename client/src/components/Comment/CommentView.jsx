import React from 'react'

export default (props) => (
    <div className="row my-2">
        <div className="col-4 border-right">
            <h6>{props.username}</h6>
            <small className="text-muted">Commented at {props.commentInfo}</small>
        </div>
        <div className="col-8">
            <p>{props.comment}</p>
        </div>
    </div>
)