import React, { Component } from 'react'
import QuestionView from '../../components/Question/QuestionView';
import AnswerForm from '../../components/Answer/AnswerForm';
import ControlBar from '../../components/ControlBar/ControlBar';
import AnswerList from '../../components/Answer/AnswerList';
import CommentForm from '../../components/Comment/CommentForm';
import CommentList from '../../components/Comment/CommentList';
import Control from '../../components/Control/Control';
import AxiosUserData from '../../Axios-userData';

const user = {
    username: "Trung Hoang"
}

export default class QuestionHolder extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isAnswerFormHidden: true,
            isCommentFormHidden: true,
            answer: "",
            answerList: [],
            comment: "",
            commentList: []
        }
    }

    answerClickedHandler = () => {
        this.setState(prevState => {
            return {
                isAnswerFormHidden: !prevState.isAnswerFormHidden
            }
        })
    }

    followClickedHandler = () => {
        alert("Get notifications when have a new answer");
    }

    commentClickedHandler = () => {
        this.setState(prevState => {
            return {
                isCommentFormHidden: !prevState.isCommentFormHidden
            }
        })
    }

    shareClickedHandler = () => {
        alert("Share to others");
    }

    answerChangedHandler = (e) => {
        this.setState({
            answer: e.target.value
        })
    }

    commentChangedHandler = (e) => {
        this.setState({
            comment: e.target.value
        })
    }

    answerSubmitClickedHandler = (e) => {
        e.preventDefault();
        const value = e.target["answer"].value;
        this.setState(prevState => {
            return {
                answerList: [...prevState.answerList, {
                    id: prevState.answerList.length + 1,
                    user: user,
                    answer: value,
                    answerInfo: new Date()
                }]
            }
        })
        this.answerClickedHandler();
    }

    commentSubmitClickedHandler = (e) => {
        e.preventDefault();
        const value = e.target["comment"].value;
        this.setState(prevState => {
            return {
                commentList: [...prevState.commentList, {
                    id: prevState.commentList.length + 1,
                    user: user,
                    commentInfo: new Date(),
                    comment: value
                }]
            }
        })
        this.commentClickedHandler();
    }

    componentDidMount() {
    }

    render() {
        return (
            <main className="bg-light container-fluid pt-4">
                <div className="row justify-content-center pt-5">
                    <div className="col-12 col-sm-10">
                        <div className="card my-2 px-3 py-2">
                            <QuestionView />
                            <ControlBar
                                left={(
                                    <React.Fragment>
                                        <Control
                                            ctrlType="button"
                                            ctrlName="Answer"
                                            clicked={this.answerClickedHandler} />
                                        <Control
                                            ctrlType="button"
                                            ctrlName="Follow"
                                            clicked={this.followClickedHandler} />
                                    </React.Fragment>
                                )}
                                rightDesktop={(
                                    <React.Fragment>
                                        <Control
                                            ctrlType="icon"
                                            ctrlName="Comment"
                                            clicked={this.commentClickedHandler} />
                                        <Control
                                            ctrlType="icon"
                                            ctrlName="Share"
                                            clicked={this.shareClickedHandler} />
                                    </React.Fragment>
                                )}
                                moreMobile={(
                                    <React.Fragment>
                                        <Control
                                            ctrlType="text"
                                            ctrlName="Comment"
                                            clicked={this.commentClickedHandler} />
                                        <Control
                                            ctrlType="text"
                                            ctrlName="Share"
                                            clicked={this.shareClickedHandler} />
                                    </React.Fragment>
                                )} />
                            <AnswerForm
                                isHidden={this.state.isAnswerFormHidden}
                                valueChanged={this.answerChangedHandler}
                                value={this.state.answer}
                                submitClicked={this.answerSubmitClickedHandler} />
                            <CommentForm
                                isHidden={this.state.isCommentFormHidden}
                                valueChanged={this.commentChangedHandler}
                                value={this.state.comment}
                                submitClicked={this.commentSubmitClickedHandler} />
                            <CommentList commentsRawData={this.state.commentList} />
                            <h5 className="my-2">
                                {this.state.answerList.length} Answer{this.state.answerList.length > 1 ? "s" : ""}
                            </h5>
                            <AnswerList answersRawData={this.state.answerList} />
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}
