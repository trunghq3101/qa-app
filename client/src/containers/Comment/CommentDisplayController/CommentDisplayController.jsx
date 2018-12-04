import React, { Component } from 'react'
import AxiosUserData from '../../../Axios-userData';
import CommentView from '../../../components/Comment/CommentView';
import Spinner from '../../../components/UI/Spinner/Spinner';

export default class CommentDisplayController extends Component {

    state = {
        comment: null
    }

    componentDidMount() {
        this.getCommentData();
    }

    getCommentData = () => {
        AxiosUserData.get(`/c/${this.props.commentId}`)
            .then(res => {
                if (res.data.ok) {
                    this.setState({ comment: res.data.result })
                } else {
                    throw res.data.error
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        let commentDisplayController = <Spinner />
        if (this.state.comment) commentDisplayController = (
            <CommentView data={this.state.comment} />
        )
        return (
            <div>
                {commentDisplayController}
            </div>
        )
    }
}
