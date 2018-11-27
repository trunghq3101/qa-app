import React, { Component } from 'react';
import Aux from './hoc/Aux';
import Toolbar from './components/Toolbar/Toolbar';

class App extends Component {

    render() {
        return (
            <Aux>
                <Toolbar />
                <div>
                    <div>Question</div>
                    <div>Answers</div>
                    <div>Controls</div>
                    <div>Answer Form</div>
                </div>
            </Aux>
        );
    }
}

export default App;
