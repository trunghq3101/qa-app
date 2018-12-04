import React from 'react'
import logoDefault from '../../../assets/logo.png'
import logoWhite from '../../../assets/logo-white.png'
import classes from './Logo.module.css'
import { Link } from 'react-router-dom'

export default (props) => {
    const logo = {
        default: logoDefault,
        white: logoWhite
    }
    return (
        <Link to="/">
            <div className={classes.Logo}>
                <img src={logo[props.logoType]} alt="find food logo" />
            </div>
        </Link>
    )
}