import React, { Component } from 'react'
import ModalFullScreen from '../../../components/UI/ModalFullScreen/ModalFullScreen'
import Input from '../../../components/UI/Input/Input'
import ContentBox from '../../../components/UI/ContentBox/ContentBox'
import Gap from '../../../components/UI/Gap/Gap'
import AxiosUserData from '../../../Axios-userData';
import withAxiosErrorHandler from '../../../hoc/withErrorHandler/withAxiosErrorHandler';

class QuestionForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            show: false,
            question: ""
        }

        this.modalControls = (
            <span onClick={this.questionSubmittedHandler}>Add</span>
        )
    }

    toggleClickedHandler = () => {
        this.setState(prevState => ({
            show: !prevState.show
        }))
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
                    this.toggleClickedHandler();
                    this.props.submitDone();
                } else {
                    throw res.data.error;
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <ModalFullScreen
                show={this.props.show}
                modalClosed={this.props.modalClosed}
                modalControls={this.modalControls}>
                <Gap />
                <ContentBox>
                    <Input
                        inputType="question"
                        value={this.state.value}
                        changed={this.questionChangedHandler}
                        placeholder="What is your question?" />
                </ContentBox>
            </ModalFullScreen>
        )
    }
}

export default withAxiosErrorHandler(QuestionForm, AxiosUserData)