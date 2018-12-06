import React from 'react'
import classes from './ModalFooter.module.css'

export default (props) => (
    <div className={`${classes.ModalFooter} ${props.right && classes.Right}`}>
        {props.children}
    </div>
)