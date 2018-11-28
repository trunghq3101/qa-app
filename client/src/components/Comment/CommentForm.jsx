import React from 'react'

export default (props) => (
    <div className="card bg-light">
        <div className="card-body">
            <form className="form-inline" onSubmit={props.submitClicked}>
                <div className="form-group mx-1">
                    Avatar
                </div>
                <div className="form-group mx-2">
                    <input
                        type="text"
                        placeholder="Add a comment..."
                        value={props.value}
                        onChange={props.valueChanged}
                        name="comment" 
                        className="form-control"/>
                </div>
                <div className="form-group">
                    <input
                        type="submit"
                        value="Comment" 
                        className="btn btn-primary"/>
                </div>
            </form>
        </div>
    </div>
)
