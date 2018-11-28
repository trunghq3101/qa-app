import React, { Component } from 'react';
import Aux from './hoc/Aux/Aux';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';

class App extends Component {

    render() {
        return (
            <Aux>
                <Layout>
                    <Home />
                </Layout>
            </Aux>
        );
    }
}

export default App;
