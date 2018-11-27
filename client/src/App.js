import React, { Component } from 'react';
import Axios from 'axios';

class App extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         welcome: ""
      }
    }
    
    componentDidMount() {
        Axios.get("/api/welcome")
            .then( res => {
                this.setState({ welcome: res.data.result })
            })
            .catch( err => {
                console.log(err);
            })
    }

    render() {
        return (
            <div>
                <h1>{this.state.welcome}</h1>
            </div>
        );
    }
}

export default App;
