import React, { Component } from 'react'
import QuestionForm from '../../components/Question/QuestionForm';
import QuestionList from '../../components/Question/QuestionList';

export default class Home extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         questionsFeed: [
             {
                 id: 1,
                 url: "/question/1",
                 answers: [
                     "No one",
                     "I think he is superman"
                 ],
                 questionInfo: new Date(200000000),
                 question: "Who is the strongest man in the world?"
             },
             {
                id: 2,
                url: "/question/2",
                answers: [],
                questionInfo: new Date(200005000),
                question: "Who is the weakest man in the world?"
            }
         ]
      }
    }
    
    render() {
        return (
            <main className="bg-light container-fluid pt-4">
                <div className="row justify-content-center pt-5">
                    <div className="col-12 col-sm-10">
                        <QuestionForm />
                        <QuestionList questionsRawData={this.state.questionsFeed}/>
                    </div>
                </div>
            </main>
        )
    }
}
