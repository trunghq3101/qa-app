import React from 'react'
import CommentDisplayController from '../../containers/Comment/CommentDisplayController/CommentDisplayController'

export default (props) => {

    return props.commentListId.length ?
        props.commentListId.map(item => (
            <CommentDisplayController key={item} commentId={item} />
        )) : null

}
