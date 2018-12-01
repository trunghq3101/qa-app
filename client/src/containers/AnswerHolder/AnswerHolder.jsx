import React, { Component } from 'react'
import AnswerView from '../../components/Answer/AnswerView';
import ControlBar from '../../components/ControlBar/ControlBar';
import Control from '../../components/Control/Control'
import CommentForm from '../../components/Comment/CommentForm';
import CommentList from '../../components/Comment/CommentList';

export default class AnswerHolder extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         comment: "",
         commentList: []
      }
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

    commentChanged = (e) => {
        this.setState({ comment: e.target.value })
    }

    submitCommentClicked = (e) => {
        e.preventDefault();
        let value = e.target["comment"].value;
        this.setState(prevState => {
            return {
                commentList: [...prevState.commentList, {
                    id: prevState.commentList.length + 1,
                    user: {
                        username: this.props.username
                    },
                    commentInfo: new Date(),
                    comment: value
                }]
            }
        })
    } 

    render() {
        return (
            <div className="card border-left-0 border-right-0 border-bottom-0 rounded-0">
                <div className="card-body">
                    <AnswerView 
                        username={this.props.username}
                        answer={this.props.answer}
                        createdTime={this.props.createdTime}/>
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
                                clicked={this.downvoteClickedHandler}/>
                        )}
                    />
                    <CommentForm 
                        value={this.state.comment}
                        valueChanged={this.commentChanged}
                        submitClicked={this.submitCommentClicked}/>
                    <CommentList commentsRawData={this.state.commentList}/>
                </div>
            </div>
        )
    }
}
