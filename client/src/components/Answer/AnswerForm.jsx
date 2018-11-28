import React from 'react'

export default (props) => (
    <form 
        className="my-3 card bg-light" 
        hidden={props.isHidden} 
        onSubmit={props.submitClicked}>
        <div className="card-body">
            <div className="form-group">
                <p>
                    <strong>Trung Hoang</strong>
                </p>
                <textarea
                    className="form-control"
                    placeholder="Write your answer"
                    value={props.value}
                    name="answer"
                    onChange={props.valueChanged}/>
            </div>
            <input 
                type="submit"
                value="Submit"
                className="btn btn-primary"/>
        </div>

    </form>
)
