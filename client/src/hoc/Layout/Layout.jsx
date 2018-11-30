import React from 'react'
import Toolbar from '../../components/Toolbar/Toolbar';

export default (props) => (
    <React.Fragment>
        <Toolbar />
        {props.children}
    </React.Fragment>
)
