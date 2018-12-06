import React from 'react'
import classes from './ModalContent.module.css'

export default (props) => (
    <div className={classes.ModalContent}>
        {props.children}
    </div>
)
