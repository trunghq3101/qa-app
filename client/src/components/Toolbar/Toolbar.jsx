import React from 'react'
import Logo from '../UI/Logo/Logo'
import classes from './Toolbar.module.css'
import ContentContainer from '../UI/ContenContainer/ContentContainer';

export default (props) => (
    <nav className={classes.Toolbar}>
        <ContentContainer>
            <span className={classes.LogoDesktop}><Logo logoType="default" /></span>
            <span className={classes.LogoMobile}><Logo logoType="white" /></span>
        </ContentContainer>
    </nav >
)
