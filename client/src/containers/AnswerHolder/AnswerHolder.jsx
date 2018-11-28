import React, { Component } from 'react'
import AnswerView from '../../components/Answer/AnswerView';
import ControlBar from '../../components/ControlBar/QuestionControlBar';

export default class AnswerHolder extends Component {

    upvoteClickedHandler = () => {
        alert("You are upvoting this")
    }

    downvoteClickedHandler = () => {
        alert("You are downvoting this")
    }

    shareClickedHandler = () => {
        alert("You are sharing")
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <AnswerView />
                    <ControlBar 
                        mainControls={{
                            Upvote: this.upvoteClickedHandler,
                            Share: this.shareClickedHandler
                        }}
                        subControls={{
                            Downvote: this.downvoteClickedHandler
                        }}/>
                </div>
            </div>
        )
    }
}
