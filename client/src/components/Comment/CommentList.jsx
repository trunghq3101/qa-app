import React from 'react'
import CommentView from './CommentView';
export default (props) => {
    const transformedComments = props.commentsRawData.map( item => {
        return {
            id: item.id,
            username: item.user.username,
            commentInfo: item.commentInfo.toLocaleString('vi-VN', { timezone: 'UTC'}),
            comment: item.comment
        }
    })
    return (
        <div className="mt-4 border-top pt-2">
            {transformedComments.map(item => (
                <CommentView
                    key={item.id} 
                    username={item.username}
                    commentInfo={item.commentInfo}
                    comment={item.comment}/>
            ))}
        </div>
    )
}
