import React from 'react'
import Input from '../UI/Input/Input';

export default (props) => (
    <form 
        className="my-3" 
        onSubmit={props.submitClicked}>
       
            <div className="form-group">
                <p>
                    <strong>Trung Hoang</strong>
                </p>
                <Input 
                    inputType="answer"
                    changed={props.valueChanged}
                    value={props.value}
                    placeholder="Write your answer"/>
            </div>
            <input 
                type="submit"
                value="Submit"
                className="btn btn-primary"/>

    </form>
)
