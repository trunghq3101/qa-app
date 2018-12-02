import React from 'react'

export default (props) => (
    <div className="row my-2">
        <div className="col-4 border-right">
            <h6>{props.data.username}</h6>
            <small className="text-muted">Commented at {props.data.createdTimeToString}</small>
        </div>
        <div className="col-8">
            <p>{props.data.comment}</p>
        </div>
    </div>
)