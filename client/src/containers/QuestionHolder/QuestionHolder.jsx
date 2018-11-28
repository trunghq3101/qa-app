import React, { Component } from 'react'
import QuestionView from '../../components/Question/QuestionView';
import AnswerForm from '../../components/Answer/AnswerForm';
import AnswerHolder from '../AnswerHolder/AnswerHolder';
import ControlBar from '../../components/ControlBar/ControlBar';
import Aux from '../../hoc/Aux/Aux';
import FullControl from '../../components/Controls/FullControl/Control';

export default class QuestionHolder extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isAnswerFormHidden: true,
         answer: ""
      }
    }
    
    answerClickedHandler = () => {
        this.setState( prevState => {
            return {
                isAnswerFormHidden: !prevState.isAnswerFormHidden
            }
        })
    }

    followClickedHandler = () => {
        alert("Get notifications when have a new answer");
    }

    commentClickedHandler = () => {
        alert("Start to comment");
    }

    shareClickedHandler = () => {
        alert("Share to others");
    }

    answerChangedHandler = (e) => {
        this.setState({
            answer: e.target.value
        })
    }

    answerSubmitClickedHandler = (e) => {
        e.preventDefault();
        alert(`Submitting answer:  ${e.target["answer"].value}`);
    }

    render() {
        return (
            <div className="row mt-2 justify-content-center">
                <div className="col-12 col-sm-10">
                    <div className="card px-3 py-2">
                        <QuestionView />
                        <ControlBar 
                            left={(
                                <Aux>
                                    <FullControl
                                        ctrlType="button"
                                        ctrlName="Answer"
                                        clicked={this.answerClickedHandler}/>
                                    <FullControl
                                        ctrlType="button"
                                        ctrlName="Follow"
                                        clicked={this.followClickedHandler}/>
                                </Aux>
                            )}
                            rightDesktop={(
                                <Aux>
                                    <FullControl
                                        ctrlType="icon"
                                        ctrlName="Comment"
                                        clicked={this.commentClickedHandler}/>
                                    <FullControl
                                        ctrlType="icon"
                                        ctrlName="Share"
                                        clicked={this.shareClickedHandler}/>
                                </Aux>
                            )}
                            moreMobile={(
                                <Aux>
                                    <FullControl
                                        ctrlType="text"
                                        ctrlName="Comment"
                                        clicked={this.commentClickedHandler}/>
                                    <FullControl
                                        ctrlType="text"
                                        ctrlName="Share"
                                        clicked={this.shareClickedHandler}/>
                                </Aux>
                            )}/>
                        <AnswerForm 
                            isHidden={this.state.isAnswerFormHidden}
                            valueChanged={this.answerChangedHandler}
                            value={this.state.answer}
                            submitClicked={this.answerSubmitClickedHandler}/>
                        <h5 className="my-2">15 Answers</h5>
                        <AnswerHolder />
                        <AnswerHolder />
                    </div>
                </div>
            </div>
        )
    }
}
