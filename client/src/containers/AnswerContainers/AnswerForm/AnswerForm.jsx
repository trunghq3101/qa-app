import React, { PureComponent } from 'react'
import ModalFullScreen from '../../../components/UI/ModalFullScreen/ModalFullScreen'
import ModalContent from '../../../components/UI/Modal/ModalContent/ModalContent'
import Input from '../../../components/UI/Input/Input'
import AxiosUserData from '../../../Axios-userData';
import withAxiosErrorHandler from '../../../hoc/withErrorHandler/withAxiosErrorHandler';
import Button from '../../../components/UI/Button/Button';
import classes from '../../../assets/lib/GlobalStyle.module.css'

class AnswerForm extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            answer: ""
        }

        this.modalFullscreenControls = (
            <Button btnType="Plain" onClick={this.answerSubmittedHandler}>Add</Button>
        )
    }

    answerChangedHandler = (e) => {
        this.setState({ answer: e.target.value })
    }

    answerSubmittedHandler = (e) => {
        e.preventDefault();
        const answer = {
            answer: this.state.answer,
            createdTime: new Date(),
            question: this.props.questionId
        }
        AxiosUserData.post("/a/new", answer)
            .then(res => {
                this.props.submitDone && this.props.submitDone()
                this.props.closed()
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        const content = (
            <Input
                inputType="answer"
                value={this.state.answer}
                changed={this.answerChangedHandler}
                placeholder="Write your answer..." />
        )

        return (
            <React.Fragment>
                <div className={classes.MobileOnly}>
                    <ModalFullScreen
                        show={this.props.show}
                        modalClosed={this.props.closed}
                        modalControls={this.modalFullscreenControls}>
                        <ModalContent>
                            {content}
                        </ModalContent>
                    </ModalFullScreen>
                </div>

            </React.Fragment>
        )
    }
}

export default withAxiosErrorHandler(AnswerForm, AxiosUserData)