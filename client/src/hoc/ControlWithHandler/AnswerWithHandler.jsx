import React, { Component } from 'react'
import Modal from '../../components/UI/Modal/Modal';
import AnswerForm from '../../components/Answer/AnswerForm';
import AxiosUserData from '../../Axios-userData';
import withAxiosErrorHandler from '../withErrorHandler/withAxiosErrorHandler';

export default (WrappedComp, ctrlType, ctrlName, questionId, savedNewAnswer) => {
    
    class c extends Component {

        state = {
            showModal: false,
            answer: ""
        }

        clickedHandler = () => {
            this.setState({ showModal: true })
        }

        closedModalHandler = () => {
            this.setState({ showModal: false })
        }

        answerChangedHandler = (e) => {
            this.setState({ answer: e.target.value })
        }

        answerSubmittedHandler = (e) => {
            e.preventDefault();
            const answer = {
                answer: this.state.answer,
                createdTime: new Date(),
                question: questionId
            }
            AxiosUserData.post("/a/new", answer)
                .then(res => {
                    savedNewAnswer();
                })
                .catch(err => {
                    console.log(err);
                })
            this.setState({ showModal: false })
        }

        render() {
            return (
                <React.Fragment>
                    <Modal show={this.state.showModal} modalClosed={this.closedModalHandler}>
                        <AnswerForm 
                            value={this.state.answer}
                            valueChanged={this.answerChangedHandler}
                            submitClicked={this.answerSubmittedHandler}/>
                    </Modal>
                    <WrappedComp 
                        clicked={this.clickedHandler} 
                        ctrlType={ctrlType}
                        ctrlName={ctrlName}
                        {...this.props}/>
                </React.Fragment>
            )
        }
    }

    return withAxiosErrorHandler(c, AxiosUserData);
}