import React, { Component } from 'react'
import QuestionForm from '../../components/Question/QuestionForm';
import QuestionList from '../../components/Question/QuestionList';
import axios from '../../Axios-userData'
import withAxiosErrorHandler from '../../hoc/withErrorHandler/withAxiosErrorHandler';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            questionsFeed: [],
            question: "",
            loading: false
        }
    }

    submitQuestionClickedHandler = (e) => {
        e.preventDefault();
        const question = {
            question: e.target["question"].value,
            questionInfo: new Date(),
            user: {
                username: "Trung Hoang"
            },
            answers: true
        }
        this.setState({ loading: true });
        axios.post("/questions.json", question)
            .then(res => {
                this.setState({ loading: false });
                this.getQuestions();
            })
            .catch(err => {
                this.setState({ loading: false });
                console.log(err)
            })
    }

    questionChangedHandler = (e) => {
        this.setState({ question: e.target.value });
    }

    componentDidMount() {
        this.getQuestions();
    }

    getQuestions = () => {
        axios.get(`/questions.json`)
            .then(res => {
                if (res.data) {
                    this.setState({
                        questionsFeed: Object.keys(res.data)
                            .slice(0).reverse()
                            .map(qKey => {
                                return {
                                    id: qKey,
                                    url: "/q/"+qKey,
                                    answers: res.data[qKey].answers,
                                    question: res.data[qKey].question,
                                    questionInfo: res.data[qKey].questionInfo
                                }
                            })
                    })
                }  
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        let questionList = <Spinner />;
        if (this.state.questionsFeed) questionList = <QuestionList questionsRawData={this.state.questionsFeed} />
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