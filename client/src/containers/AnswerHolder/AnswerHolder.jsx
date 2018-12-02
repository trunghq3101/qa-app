import React, { Component } from 'react'
import AnswerView from '../../components/Answer/AnswerView';
import ControlBar from '../../components/ControlBar/ControlBar';
import Control from '../../components/Control/Control'
import CommentForm from '../../components/Comment/CommentForm';
import CommentList from '../../components/Comment/CommentList';
import AxiosUserData from '../../Axios-userData';
import Spinner from '../../components/UI/Spinner/Spinner';

export default class AnswerHolder extends Component {

    state = {
        answer: null
    }

    componentDidMount() {
        this.getAnswerData();
    }

    upvoteClickedHandler = () => {
        alert("You are upvoting this")
    }

    downvoteClickedHandler = () => {
        alert("You are downvoting this")
    }

    shareClickedHandler = () => {
        alert("You are sharing")
    }

    commentSubmittedHandler = () => {
        this.getAnswerData();
    }

    getAnswerData = () => {
        AxiosUserData.get(`/a/${this.props.answerId}`)
            .then(res => {
                if (res.data.ok) {
                    this.setState({ answer: res.data.result })
                } else {
                    throw res.data.error
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        let answerHolder = <Spinner />
        if (this.state.answer) answerHolder = (
            <React.Fragment>
                <AnswerView data={this.state.answer} />
                <ControlBar
                    left={(
                        <React.Fragment>
                            <Control
                                ctrlType="button"
                                ctrlName="Upvote"
                                clicked={this.upvoteClickedHandler} />
                            <Control
                                ctrlType="button"
                                ctrlName="Share"
                                clicked={this.shareClickedHandler} />
                        </React.Fragment>
                    )}
                    rightDesktop={(
                        <Control
                            ctrlType="button"
                            ctrlName="Downvote"
                            clicked={this.downvoteClickedHandler} />
                    )}
                    rightMobile={(
                        <Control
                            ctrlType="icon"
                            ctrlName="Downvote"
                            clicked={this.downvoteClickedHandler} />
                    )}
                />
                <CommentForm
                    belongToId={this.state.answer.id}
                    commentSubmitted={this.commentSubmittedHandler} />
                <CommentList commentListId={this.state.answer.comments} />
            </React.Fragment>
        )
        return (
            <div className="card border-left-0 border-right-0 border-bottom-0 rounded-0">
                <div className="card-body">
                    {answerHolder}
                </div>
            </div>
        )
    }
}
