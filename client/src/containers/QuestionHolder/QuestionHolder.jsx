import React, { Component } from 'react'
import QuestionView from '../../components/Question/QuestionView';
import ControlBar from '../../components/ControlBar/ControlBar';
import AnswerList from '../../components/Answer/AnswerList';
import CommentForm from '../../components/Comment/CommentForm';
import CommentList from '../../components/Comment/CommentList';
import Control from '../../components/Control/Control';
import AxiosUserData from '../../Axios-userData';
import withAxiosErrorHandler from '../../hoc/withErrorHandler/withAxiosErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';
import AnswerWithHandler from '../../hoc/ControlWithHandler/AnswerWithHandler';
import ContentNotFound from '../../components/UI/NotFound/ContentNotFound';

class QuestionHolder extends Component {

    constructor(props) {
        super(props)

        this.state = {
            question: null,
            loadingQuestion: false
        }
    }

    componentDidMount() {
        this.getQuestionData();
    }

    getQuestionData = () => {
        this.setState({ 
            loadingQuestion: true,
            question: null
        });
        AxiosUserData.get(`/q/${this.props.match.params.id}`)
            .then(res => {
                this.setState({ loadingQuestion: false });
                if (res.data.ok) {
                    this.setState({ question: res.data.result })
                } else {
                    throw res.data.error;
                }
            })
            .catch(err => {
                this.setState({ loadingQuestion: false });
                console.log(err);
            })
    }

    followClickedHandler = () => {
        alert("Get notifications when have a new answer");
    }

    shareClickedHandler = () => {
        alert("Share to others");
    }

    render() {

        let questionHolder = null;

        if (this.state.loadingQuestion) {
            questionHolder = <Spinner />
        } else if (!this.state.question) {
            questionHolder = <ContentNotFound />
        } else {
            
            let AnswerButton = AnswerWithHandler(
                Control, "button", "Answer", 
                this.props.match.params.id, 
                this.getQuestionData);

            questionHolder = (
                <React.Fragment>
                    <QuestionView data={this.state.question}/>
                    <ControlBar
                        left={(
                            <React.Fragment>
                                <AnswerButton/>
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
                    
                    <CommentForm belongToId={this.state.question.id} commentSubmitted={this.getQuestionData}/>
                    <CommentList commentListId={this.state.question.comments} />

                    <h5 className="my-2">
                        {this.state.question.answers.length} Answer{this.state.question.answers.length > 1 ? "s" : ""}
                    </h5>
                    <AnswerList answerListId={this.state.question.answers} />
                </React.Fragment>
            )
        }

        return (
            <main className="bg-light container-fluid pt-4">
                <div className="row justify-content-center pt-5">
                    <div className="col-12 col-sm-10">
                        <div className="card my-2 px-3 py-2">
                            {questionHolder}
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default withAxiosErrorHandler(QuestionHolder, AxiosUserData);