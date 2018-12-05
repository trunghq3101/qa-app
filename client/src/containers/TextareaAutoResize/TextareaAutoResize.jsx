import React, { Component } from 'react'

export default class TextareaAutoResize extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         rows: 1
      }

      this.minRows = 1
      this.maxRows = 10
    }
    

    changedHandler = (e) => {
        const lineHeight = ~~(
            +window.getComputedStyle(e.target).getPropertyValue("line-height").replace("px","")
        )
        e.target.rows = this.minRows
        const curRows = ~~(e.target.scrollHeight/lineHeight)
        e.target.rows = curRows
        this.setState({ rows: curRows })
        this.props.onChange(e)
    }
    render() {
        return (
            <textarea 
                {...this.props}
                rows={this.state.rows}
                onChange={this.changedHandler}
                style={{resize: "none"}}/>
        )
    }
}



