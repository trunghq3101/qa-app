import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';

class App extends Component {

    render() {
        return (
            <React.Fragment>
                <Layout>
                    <Home />
                </Layout>
            </React.Fragment>
        );
    }
}

export default App;
