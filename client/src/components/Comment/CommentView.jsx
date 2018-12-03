import React from 'react'

export default (props) => (
    <React.Fragment>
        <h6>{props.data.username}</h6>
        <small className="text-muted">{props.data.createdTimeToString}</small>
        <p>{props.data.comment}</p>
    </React.Fragment>
)