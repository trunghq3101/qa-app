import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import BoxCard from '../../../components/UI/Box/BoxCard/BoxCard';
import { Link } from 'react-router-dom'
import Button from '../../../components/UI/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import ControlBar from '../../../components/ControlBar/ControlBar'
import withToggle from '../../../hoc/withToggle/withToggle';
import AnswerForm from '../../AnswerContainers/AnswerForm/AnswerForm';
import Spinner from '../../../components/UI/Spinner/Spinner';
import AxiosUserData from '../../../Axios-userData';
import withAxiosErrorHandler from '../../../hoc/withErrorHandler/withAxiosErrorHandler';

class QuestionCardView extends PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            questionData: null
        }

        this.AnswerFormToggle = withToggle(
            (props) => (
                <Button btnType="Flat" {...props}>
                    <FontAwesomeIcon icon={faPencilAlt} /> Answer
                </Button>
            ),
            (props) => (
                <AnswerForm questionId={this.props.id} submitDone={this.getQuestionData} {...props} />
            )
        )
    }

    static propTypes = {
        id: PropTypes.string
    }

    componentDidMount() {
        this.getQuestionData()
    }

    render() {
        let content = null

        if (!this.state.questionData) {
            content = <Spinner />
        } else {
            const {
                url,
                question,
                numAnswers,
                createdTimeToString
            } = this.state.questionData
            content = (
                <React.Fragment>
                    <Link to={url}>
                        <h4>
                            {question}
                        </h4>
                    </Link>
    
                    <span className="text-muted">
                        <Link to={url} className="text-muted">
                            <strong >
                                {numAnswers === 0 ?
                                    "No Answer Yet" :
                                    `${numAnswers} Answers`}
                            </strong>
                        </Link> |  <small>Posted at {createdTimeToString}</small>
                    </span>
    
                    <ControlBar
                        left={(
                            <this.AnswerFormToggle />
                        )}
                    />
                </React.Fragment>
            )
        }

        return (
            <BoxCard>
                {content}
            </BoxCard>
        )
    }

    getQuestionData = () => {
        AxiosUserData.get(`/q/${this.props.id}`)
            .then(res => {
                if (res.data.ok) {
                    this.setState({ questionData: res.data.result })
                } else {
                    throw res.data.error
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export default withAxiosErrorHandler(QuestionCardView, AxiosUserData)