import React from 'react'
import AnswerHolder from '../../containers/AnswerHolder/AnswerHolder';
import Aux from '../../hoc/Aux/Aux';

export default (props) => {

    const transformedAnswers = props.answersRawData.map( item => {
        return {
            id: item.id,
            username: item.user.username,
            answer: item.answer,
            answerInfo: item.answerInfo.toLocaleString('vi-VN', { timezone: 'UTC'})
        }
    })
    return (
        <React.Fragment>
            {transformedAnswers.map(item => (
                <AnswerHolder
                    key={item.id}
                    username={item.username}
                    answer={item.answer}
                    answerInfo={item.answerInfo} />
            ))}
        </React.Fragment>
    )
}
