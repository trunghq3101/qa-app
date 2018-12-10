import React, { PureComponent } from 'react'
import ModalFullScreen from '../../../components/UI/ModalFullScreen/ModalFullScreen'
import ModalContent from '../../../components/UI/Modal/ModalContent/ModalContent'
import Input from '../../../components/UI/Input/Input'
import AxiosUserData from '../../../Axios-userData';
import withAxiosErrorHandler from '../../../hoc/withErrorHandler/withAxiosErrorHandler';
import Button from '../../../components/UI/Button/Button';
import classes from '../../../assets/lib/GlobalStyle.module.css'
import PropTypes from 'prop-types'
import Modal from '../../../components/UI/Modal/Modal';
import ModalHeader from '../../../components/UI/Modal/ModalHeader/ModalHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ModalFooter from '../../../components/UI/Modal/ModalFooter/ModalFooter';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class AnswerForm extends PureComponent {

    static propTypes = {
        show: PropTypes.bool,
        closed: PropTypes.func,
        questionId: PropTypes.string,
        submitDone: PropTypes.func
    }

    constructor(props) {
        super(props)

        this.state = {
            answer: ""
        }

        this.modalFullscreenControls = (
            <Button btnType="Plain" onClick={this.answerSubmittedHandler}>Add</Button>
        )

        this.modalControls = (
            <React.Fragment>
                <div style={{ paddingTop: "3px", paddingRight: "7px" }}>
                    <Button btnType="Link Secondary" onClick={this.props.closed}>Cancel</Button>
                </div>
                <Button btnType="Primary" onClick={this.answerSubmittedHandler}>Submit</Button>
            </React.Fragment>
        )
    }

    render() {
        const content = (
            <ModalContent>
                <Input
                    inputType="answer"
                    value={this.state.answer}
                    changed={this.answerChangedHandler}
                    placeholder="Write your answer..." 
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
                                <FontAwesomeIcon icon={faTimes} />
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
}

export default withAxiosErrorHandler(AnswerForm, AxiosUserData)