import React from 'react'
import AnswerHolder from '../../containers/AnswerHolder/AnswerHolder';

export default (props) => {
    return (
        <React.Fragment>
            {props.answers.map(item => (
                <AnswerHolder
                    key={item.id}
                    username={item.username}
                    answer={item.answer}
                    createdTime={item.createdTimeToString} />
            ))}
        </React.Fragment>
    )
}
