import React, { PureComponent } from 'react'
import QuestionView from '../../components/Question/QuestionView';
import ControlBar from '../../components/ControlBar/ControlBar';
import AnswerList from '../../components/Answer/AnswerList';
import CommentForm from '../Comment/CommentForm/CommentForm';
import CommentList from '../../components/Comment/CommentList';
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
import { faPencilAlt, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import AnswerForm from '../AnswerContainers/AnswerForm/AnswerForm';
import withToggleWrapper from '../../hoc/withToggleWrapper/withToggleWrapper';

class QuestionHolder extends PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            question: null,
            loadingQuestion: false
        }

        this.AnswerFormToggle = withToggle(
            (props) => (
                <Button btnType="Flat RoundCorner Gray" {...props}>
                    <FontAwesomeIcon icon={faPencilAlt} /> Answer
                </Button>
            ),
            (props) => <AnswerForm questionId={this.state.question.id} {...props} />
        )

        this.CommentSectionToggle = withToggleWrapper((props) => (
            <CommentSection {...props}>
                <CommentForm belongToId={this.state.question.id} commentSubmitted={this.getQuestionData} />
                <CommentList commentListId={this.state.question.comments} />
            </CommentSection>
        ))

        this.commentSectionRef = React.createRef()
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

                        <ControlBar>
                            <this.AnswerFormToggle />
                            <Button 
                                btnType="Flat RoundCorner Gray" 
                                onClick={() => this.commentSectionRef.current.toggleHandler()}>
                                <FontAwesomeIcon icon={faCommentAlt} /> Comment
                            </Button>
                        </ControlBar>

                        <this.CommentSectionToggle ref={this.commentSectionRef}/>

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

}

export default withAxiosErrorHandler(QuestionHolder, AxiosUserData);