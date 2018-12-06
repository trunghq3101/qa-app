/* #TODO: 
    - Goi API lay questions theo mot so option dat truoc
*/
import React, { Component } from 'react'
import QuestionForm from '../Question/QuestionForm/QuestionForm';
import QuestionList from '../../components/Question/QuestionList';
import axios from '../../Axios-userData'
import withAxiosErrorHandler from '../../hoc/withErrorHandler/withAxiosErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './Home.module.css';
import ContentContainer from '../../components/UI/ContentContainer/ContentContainer';
import BoxCard from '../../components/UI/Box/BoxCard/BoxCard';
import withToggle from '../../hoc/withToggle/withToggle';

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            questionsFeed: [],
            loadingFeed: false
        }

        this.AskButton = (props) => (
            <span className={classes.QuestionLink} {...props}>
                What is your question?
            </span>
        )
        this.QuestionFormWithSubmit = (props) => (
            <QuestionForm submitDone={this.getQuestions} {...props} />
        )
        this.QuestionFormToggle = withToggle(this.AskButton, this.QuestionFormWithSubmit)
    }

    componentDidMount() {
        this.getQuestions();
    }

    getQuestions = () => {
        this.setState({ loadingFeed: true });
        axios.get(`/q/all`)
            .then(res => {
                this.setState({ loadingFeed: false });
                if (res.data.ok) {
                    this.setState({ questionsFeed: res.data.result })
                } else {
                    throw res.data.error;
                }
            })
            .catch(err => {
                this.setState({ loadingFeed: false })
                console.log(err)
            })
    }

    render() {
        let questionList = this.state.loadingFeed ?
            <Spinner /> :
            <QuestionList questions={this.state.questionsFeed} />;
        return (
            <main className={classes.Home}>
                <ContentContainer>
                    <BoxCard>
                        <this.QuestionFormToggle />
                    </BoxCard>
                    {questionList}
                </ContentContainer>
            </main >
        )
    }
}

export default withAxiosErrorHandler(Home, axios)