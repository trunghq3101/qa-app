import React from 'react'
import AnswerHolder from '../../containers/AnswerHolder/AnswerHolder';

export default (props) => {
    return (
        <React.Fragment>
            {props.answerListId.map(item => (
                <AnswerHolder key={item} answerId={item} />
            ))}
        </React.Fragment>
    )
}
