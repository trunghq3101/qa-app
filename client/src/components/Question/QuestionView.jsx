import React from 'react'

export default (props) => (
    <div className="mt-3">
        <h3>{props.data.question}</h3>
        <p><small className="text-muted">{props.data.createdTimeToString}</small></p>
    </div>
)