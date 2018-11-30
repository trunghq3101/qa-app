import React from 'react'

export default (props) => (
    <div className="card">
        <div className="card-body">
            <form onSubmit={props.submitClicked}>
                <div className="form-group mx-2">
                    <input
                        type="text"
                        className="form-control"
                        value={props.value}
                        onChange={props.valueChanged}
                        name="question"
                        placeholder="What is your question?" />
                </div>
                <div className="form-group d-flex justify-content-center">
                    <input
                        className="btn btn-primary"
                        type="submit"
                        value="Send Question" />
                </div>
            </form>
        </div>
    </div>

)