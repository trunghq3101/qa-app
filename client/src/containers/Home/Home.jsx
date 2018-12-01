/* #TODO: 
    - Goi API lay questions theo mot so option dat truoc
*/
import React, { Component } from 'react'
import QuestionForm from '../../components/Question/QuestionForm';
import QuestionList from '../../components/Question/QuestionList';
import axios from '../../Axios-userData'
import withAxiosErrorHandler from '../../hoc/withErrorHandler/withAxiosErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            questionsFeed: [],
            question: "",
            loading: false,
            loadingFeed: false
        }
    }

    componentDidMount() {
        this.getQuestions();
    }

    submitQuestionClickedHandler = (e) => {
        e.preventDefault();
        const question = {
            question: e.target["question"].value,
            createdTime: new Date(),
            answers: []
        }
        this.setState({ loading: true });
        axios.post("/q/new", question)
            .then(res => {
                this.setState({ loading: false });
                if (res.data.ok) {
                    this.getQuestions();
                } else {
                    throw res.data.error;
                }
            })
            .catch(err => {
                this.setState({ loading: false });
                console.log(err)
            })
    }

    questionChangedHandler = (e) => {
        this.setState({ question: e.target.value });
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
            <main className="bg-light container-fluid pt-4">
                <div className="row justify-content-center pt-5">
                    <div className="col-12 col-sm-10">
                        {this.state.loading ? <Spinner /> : null}
                        <QuestionForm
                            submitClicked={this.submitQuestionClickedHandler}
                            value={this.state.question}
                            valueChanged={this.questionChangedHandler} />
                        {questionList}
                    </div>
                </div>
            </main>
        )
    }
}

export default withAxiosErrorHandler(Home, axios)