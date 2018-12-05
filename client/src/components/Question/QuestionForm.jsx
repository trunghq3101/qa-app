import React from 'react'
import Input from '../UI/Input/Input';

export default (props) => (
    <div className="card">
        <div className="card-body">
            <form onSubmit={props.submitClicked}>
                <div className="form-group mx-2">
                    <Input 
                        inputType="question" 
                        value={props.value} 
                        changed={props.valueChanged}
                        placeholder="Tôi muốn tìm ..."/>
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
