import React, { Component } from 'react'
import Axios from 'axios';

class ChildComp extends Component {

    clickedHandler = (e) => {
        e.preventDefault()
        Axios.get("/api/q/all")
            .then(res => console.log("fetched"))
    }

    componentWillUpdate() {
        console.log("Child will update")
    }

    render() {
        return (
            <div>
                <h1>{this.props.text}</h1>
                <button onClick={this.clickedHandler}>Fetch</button>
            </div>
        )
    }
}

const withControl = (WrappedComp) => {
    return class extends Component {
        render() {
            return (
                <WrappedComp {...this.props} />
            )
        }
    }
}

const ChildWithControl = withControl(ChildComp)

export default class PlayGround extends Component {
    render() {
        return (
            <div style={{ paddingTop: "60px" }}>
                <ChildWithControl text="Hello"/>
            </div>
        )
    }
}
