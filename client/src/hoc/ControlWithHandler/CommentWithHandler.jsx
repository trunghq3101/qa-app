import React, { Component } from 'react'

export default (WrappedComp) => {

    return class extends Component {
        render() {
            return (
                <WrappedComp />
            )
        }
    }
}
