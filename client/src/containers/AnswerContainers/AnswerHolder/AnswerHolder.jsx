import React, { Component } from 'react'
import AnswerView from '../../../components/Answer/AnswerView';
import CommentForm from '../../Comment/CommentForm/CommentForm';
import CommentList from '../../../components/Comment/CommentList';
import AxiosUserData from '../../../Axios-userData';
import Spinner from '../../../components/UI/Spinner/Spinner';
import BoxBottomBorder from '../../../components/UI/Box/BoxBottomBorder/BoxBottomBorder';
import CommentSection from '../../../components/Comment/CommentSection/CommentSection';

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
            <BoxBottomBorder>
                <AnswerView data={this.state.answer} />
                <CommentSection>
                    <CommentForm
                        belongToId={this.state.answer.id}
                        commentSubmitted={this.commentSubmittedHandler} />
                    <CommentList commentListId={this.state.answer.comments} />
                </CommentSection>
            </BoxBottomBorder>
        )
        return answerHolder
    }
}
