import React, { PureComponent } from 'react'
import QuestionView from '../../components/Question/QuestionView';
import ControlBar from '../../components/ControlBar/ControlBar';
import AnswerList from '../../components/Answer/AnswerList';
import CommentForm from '../Comment/CommentForm/CommentForm';
import CommentList from '../../components/Comment/CommentList';
import Control from '../../components/Control/Control';
import AxiosUserData from '../../Axios-userData';
import withAxiosErrorHandler from '../../hoc/withErrorHandler/withAxiosErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';
import ContentNotFound from '../../components/UI/NotFound/ContentNotFound';
import classes from './QuestionHolder.module.css'
import BoxBottomBorder from '../../components/UI/Box/BoxBottomBorder/BoxBottomBorder';
import CommentSection from '../../components/Comment/CommentSection/CommentSection';
import ContentContainer from '../../components/UI/ContentContainer/ContentContainer';
import withToggle from '../../hoc/withToggle/withToggle';
import Button from '../../components/UI/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import AnswerForm from '../AnswerContainers/AnswerForm/AnswerForm';

class QuestionHolder extends PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            question: null,
            loadingQuestion: false
        }

        this.AnswerFormToggle = withToggle(
            (props) => (
                <Button btnType="Flat" {...props}>
                    <FontAwesomeIcon icon={faPencilAlt} /> Answer
                </Button>
            ),
            (props) => <AnswerForm questionId={this.state.question.id} {...props}/>
        )
    }

    componentDidMount() {
        this.getQuestionData();
    }

    render() {
        let questionHolder = null;

        if (this.state.loadingQuestion) {
            questionHolder = <Spinner />
        } else if (!this.state.question) {
            questionHolder = <ContentNotFound />
        } else {
            questionHolder = (
                <React.Fragment>
                    <BoxBottomBorder>
                        <QuestionView data={this.state.question} />
                        <ControlBar
                            left={(
                                <React.Fragment>
                                    <this.AnswerFormToggle />
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

                        <CommentSection>
                            <CommentForm belongToId={this.state.question.id} commentSubmitted={this.getQuestionData} />
                            <CommentList commentListId={this.state.question.comments} />
                        </CommentSection>

                    </BoxBottomBorder>

                    <div className={`${classes.AnswerHeader}`}>
                        <h4>{this.state.question.answers.length} Answer{this.state.question.answers.length > 1 ? "s" : ""}</h4>
                    </div>

                    <AnswerList answerListId={this.state.question.answers} />
                </React.Fragment>
            )
        }

        return (
            <main className={classes.QuestionPage}>
                <ContentContainer>
                    {questionHolder}
                </ContentContainer>
            </main >
        )
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

}

export default withAxiosErrorHandler(QuestionHolder, AxiosUserData);