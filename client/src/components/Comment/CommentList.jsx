import React from 'react'
import CommentHolder from '../../containers/CommentHolder/CommentHolder';

export default (props) => {

    return props.commentListId.length ?
        props.commentListId.map(item => (
            <CommentHolder key={item} commentId={item} />
        )) : null

}
