import React from 'react'
import Toolbar from '../../components/Toolbar/Toolbar';

export default (props) => (
    <div className="container-fluid px-0">
        <Toolbar />
        {props.children}
    </div>
)
