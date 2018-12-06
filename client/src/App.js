import React, { Component } from 'react';
import Layout from './components/UI/Layout/Layout';
import Home from './containers/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import QuestionHolder from './containers/QuestionHolder/QuestionHolder'

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/q/:id" exact component={QuestionHolder}/>
                        <Route render={() => (
                            <div className="mt-5">
                                <h1>Page not found</h1>
                            </div>
                            )}/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default App;
