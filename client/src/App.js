import React, { Component } from 'react';
import Aux from './hoc/Aux/Aux';
import QuestionHolder from './containers/QuestionHolder/QuestionHolder';
import Layout from './hoc/Layout/Layout';

class App extends Component {

    render() {
        return (
            <Aux>
                <Layout>
                    <QuestionHolder />
                </Layout>
            </Aux>
        );
    }
}

export default App;
