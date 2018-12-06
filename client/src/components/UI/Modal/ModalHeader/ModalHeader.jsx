import React from 'react'
import classes from './ModalHeader.module.css'

export default (props) => (
    <div className={`${classes.ModalHeader} ${props.right && classes.Right}`}>
        {props.children}
    </div>
)