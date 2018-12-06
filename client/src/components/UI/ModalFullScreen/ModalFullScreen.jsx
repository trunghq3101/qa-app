import React from 'react'
import classes from './ModalFullScreen.module.css'
import ContentContainer from '../ContentContainer/ContentContainer';
import Button from '../Button/Button';

export default (props) => (
    <div className={classes.ModalFullScreen} hidden={!props.show}>
        <div className={classes.Toolbar}>
            <ContentContainer>
                <div style={{ display: "flex", flexDirection: "row"}}>
                    <div style={{ flexGrow: 1}}>
                        <Button btnType="Plain" onClick={props.modalClosed}>Close</Button>
                    </div>
                    <div>
                        {props.modalControls}
                    </div>
                </div>
            </ContentContainer>
        </div>
        <ContentContainer>
            {props.children}
        </ContentContainer>
    </div>
)
