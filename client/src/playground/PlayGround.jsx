import React, { Component, PureComponent } from 'react'

class ChildComp extends PureComponent {

    componentWillUpdate() {
        console.log("Child will update")
    }

    render() {
        console.log("Child render")
        return (
            <div>
                {this.props.value}
            </div>
        )
    }
}

export default class PlayGround extends Component {
    state = {
        list: new Array(1000).fill(0).map((v, i) => i)
    }

    clickedHandler = () => {
        this.setState(prevState => ({
            list: [...prevState.list, prevState.list[prevState.list.length-1] + 1]
        }))
    }

    componentWillUpdate() {
        console.log("Playground will update")
    }

    render() {
        console.log("Playground render")
        return (
            <div style={{ paddingTop: "60px" }}>
                <button onClick={this.clickedHandler}>Change state</button>
                {this.state.list.map(item => <ChildComp key={item} value={item}/>)}
            </div>
        )
    }
}
