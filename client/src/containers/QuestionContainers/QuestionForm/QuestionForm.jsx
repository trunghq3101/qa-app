import React, { Component } from 'react'
import ModalFullScreen from '../../../components/UI/ModalFullScreen/ModalFullScreen'
import Input from '../../../components/UI/Input/Input'
import AxiosUserData from '../../../Axios-userData';
import withAxiosErrorHandler from '../../../hoc/withErrorHandler/withAxiosErrorHandler';
import Button from '../../../components/UI/Button/Button';
import Modal from '../../../components/UI/Modal/Modal';
import classes from './QuestionForm.module.css'
import ModalFooter from '../../../components/UI/Modal/ModalFooter/ModalFooter';
import ModalHeader from '../../../components/UI/Modal/ModalHeader/ModalHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import ModalContent from '../../../components/UI/Modal/ModalContent/ModalContent';

class QuestionForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            question: ""
        }

        this.modalFullscreenControls = (
            <Button btnType="Plain" onClick={this.questionSubmittedHandler}>Add</Button>
        )

        this.modalControls = (
            <React.Fragment>
                <div style={{ paddingTop: "3px", paddingRight: "7px"}}>
                    <Button btnType="Link Secondary" onClick={this.props.closed}>Cancel</Button>
                </div>
                <Button btnType="Primary" onClick={this.questionSubmittedHandler}>Add Question</Button>
            </React.Fragment>
        )
    }

    questionChangedHandler = (e) => {
        this.setState({ question: e.target.value })
    }

    questionSubmittedHandler = (e) => {
        e.preventDefault();
        const question = {
            question: this.state.question,
            createdTime: new Date(),
            answers: []
        }
        AxiosUserData.post("/q/new", question)
            .then(res => {
                if (res.data.ok) {
                    this.props.submitDone && this.props.submitDone();
                    this.props.closed();
                } else {
                    throw res.data.error;
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const content = (
            <ModalContent>
                <Input
                    inputType="question"
                    value={this.state.value}
                    changed={this.questionChangedHandler}
                    placeholder="What is your question?" 
                    isFocus={this.props.show}/>
            </ModalContent>
        )
        return (
            <React.Fragment>
                <div className={classes.MobileOnly}>
                    <ModalFullScreen
                        show={this.props.show}
                        modalClosed={this.props.closed}
                        modalControls={this.modalFullscreenControls}>
                        {content}
                    </ModalFullScreen>
                </div>
                <div className={classes.DesktopOnly}>
                    <Modal
                        show={this.props.show}
                        modalClosed={this.props.closed}>
                        <ModalHeader right>
                            <Button btnType="Round Gray" onClick={this.props.closed}>
                                <FontAwesomeIcon icon={faTimes}/>
                            </Button>
                        </ModalHeader>
                            {content}
                        <ModalFooter right>
                            {this.modalControls}
                        </ModalFooter>
                    </Modal>
                </div>
            </React.Fragment>
        )
    }
}

export default withAxiosErrorHandler(QuestionForm, AxiosUserData)