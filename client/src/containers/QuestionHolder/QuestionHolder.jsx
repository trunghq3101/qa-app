import React, { Component } from 'react'
import Question from '../../components/Question/Question';
import ControlBar from '../../components/ControlBar/ControlBar';
import AnswerForm from '../../components/Answer/AnswerForm';

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
                        <Question />
                        <ControlBar 
                            mainControls={{
                                Answer: this.answerClickedHandler,
                                Follow: this.followClickedHandler
                            }}
                            subControls={{
                                Comment: this.commentClickedHandler,
                                Share: this.shareClickedHandler
                            }}/>
                        <AnswerForm 
                            isHidden={this.state.isAnswerFormHidden}
                            valueChanged={this.answerChangedHandler}
                            value={this.state.answer}
                            submitClicked={this.answerSubmitClickedHandler}/>
                        <div>Answers</div>
                    </div>
                </div>
            </div>
        )
    }
}
