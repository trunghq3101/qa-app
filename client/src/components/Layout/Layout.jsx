import React from 'react'
import Toolbar from '../Toolbar/Toolbar';
import Aux from '../../hoc/Aux';

export default (props) => (
    <Aux>
        <Toolbar />
        <main className="container">
            {props.children}
        </main>
    </Aux>
)
