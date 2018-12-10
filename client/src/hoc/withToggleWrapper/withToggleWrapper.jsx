import React, { Component } from 'react'

export default (WrappedComp) => {
    return class extends Component {
        state = {
            show: false
        }
        
        toggleHandler = () => {
            this.setState( prevState => ({
                show: !prevState.show
            }))
        }

        render() {
            return this.state.show ? <WrappedComp /> : null
        }
    }
}
