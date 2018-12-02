import React from 'react'
import CommentHolder from '../../containers/CommentHolder/CommentHolder';

export default (props) => {

    return (
        <div className="mt-4 border-top pt-2">
            {
                props.commentListId.length ?
                    props.commentListId.map(item => (
                        <CommentHolder key={item} commentId={item} />
                    )) : null
            }
        </div>
    )
}
