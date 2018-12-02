import React, { Component } from 'react'
import AxiosUserData from '../../Axios-userData';

export default class CommentForm extends Component {

    state = {
        comment: ""
    }

    commentChangedHandler = (e) => {
        this.setState({ comment: e.target.value })
    }

    commentSubmittedHandler = (e) => {
        e.preventDefault();
        let data = {
            comment: this.state.comment,
            createdTime: new Date(),
            belongTo: this.props.belongToId
        }
        AxiosUserData.post("/c/new", data)
            .then(res => {
                if (res.data.ok) {
                    this.props.commentSubmitted()
                } else {
                    throw res.data.error
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div className="card bg-light">
                <div className="card-body">
                    <form className="form-inline" onSubmit={this.commentSubmittedHandler}>
                        <div className="form-group mx-1">
                            Avatar
                        </div>
                        <div className="form-group mx-2">
                            <input
                                type="text"
                                placeholder="Add a comment..."
                                value={this.state.comment}
                                onChange={this.commentChangedHandler}
                                name="comment"
                                className="form-control" />
                        </div>
                        <div className="form-group">
                            <input
                                type="submit"
                                value="Comment"
                                className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}