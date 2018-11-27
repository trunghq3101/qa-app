import React, { Component } from 'react'
import Question from '../../components/Question/Question';
import ControlBar from '../../components/ControlBar/ControlBar';

export default class QuestionHolder extends Component {
    render() {
        return (
            <div className="row mt-2 justify-content-center">
                <div className="col-12 col-sm-10">
                    <div className="card px-3 py-2">
                        <Question />
                        <ControlBar 
                            mainControls={{
                                Answer: "",
                                Follow: ""
                            }}
                            subControls={{
                                Comment: "",
                                Share: ""
                            }}
                        />
                        <div>Answer Form</div>
                        <div>Answers</div>
                    </div>
                </div>
            </div>
        )
    }
}
