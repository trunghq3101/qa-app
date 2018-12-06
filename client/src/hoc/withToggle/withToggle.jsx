import React, { Component } from 'react'

export default (Toggler, DataToggle) => {
    return class extends Component {
        state = {
            show: false
        }

        clickedHandler = () => {
            this.setState( prevState => ({
                show: !prevState.show
            }))
        }

        render() {
            return (
                <React.Fragment>
                    <Toggler onClick={this.clickedHandler}/>
                    <DataToggle show={this.state.show} closed={this.clickedHandler}/>
                </React.Fragment>
            )
        }
    }
}