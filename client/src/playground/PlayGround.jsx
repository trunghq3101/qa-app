import React, { Component, PureComponent } from 'react'

class ChildComp extends PureComponent {

    state = {
        value: "x"
    }

    componentDidMount() {
        console.log("mounted")
    }

    componentWillUpdate() {
        console.log("updating")
        /* Axios.get("/api/q/5c0a00dfea5eca0c43ba0c95")
            .then(res => {
                //this.setState({ value: res.data })
            })
            .catch(err => true) */
    }

    render() {
        return (
            <div style={{ margin: "10px", backgroundColor: "yellow" }}>
                "x"
            </div>
        )
    }
}

class PlayGround extends Component {
    state = {
        list: [],
        change: false
    }

    clickedHandler = () => {
        this.setState({ list: new Array(1000).fill(1, 0).map((item, index) => index) })
    }

    componentDidUpdate() {
        console.log("Playground updated")
        if (!this.state.change) this.setState({ change: true })
    }

    render() {
        return (
            <div style={{ paddingTop: "60px" }}>
                <button onClick={this.clickedHandler}>Change state</button>
                {this.state.list.map(item => <ChildComp key={item} id={item} change={this.state.change} />)}
            </div>
        )
    }
}

export default PlayGround