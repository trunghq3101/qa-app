import React from 'react'

export default (props) => (
    <form 
        className="my-3" 
        onSubmit={props.submitClicked}>
       
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

    </form>
)
