import React from 'react'
import Toolbar from '../../components/Toolbar/Toolbar';
import Aux from '../Aux/Aux';

export default (props) => (
    <Aux>
        <Toolbar />
        <main className="container">
            {props.children}
        </main>
    </Aux>
)
