import React from 'react'
import classes from './ControlBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import FullControl from '../Controls/FullControl/FullControl';

export default (props) => {

    const mainControlsFull = Object.keys(props.mainControls)
        .map(ctrlKey => (
            <FullControl 
                key={ctrlKey} 
                ctrlType="button" 
                ctrlName={ctrlKey} 
                clicked={props.mainControls[ctrlKey]}/>
        ))

    const subControlsFull = Object.keys(props.subControls)
        .map(ctrlKey => (
            <FullControl 
                key={ctrlKey} 
                ctrlType="icon" 
                ctrlName={ctrlKey} 
                clicked={props.subControls[ctrlKey]}/>
        ))

    const subControlsText = Object.keys(props.subControls)
        .map(ctrlKey => (
            <div key={ctrlKey} className="dropdown-item">
                <FullControl 
                    ctrlType="text" 
                    ctrlName={ctrlKey}
                    clicked={props.subControls[ctrlKey]}/>
            </div>
        ))

    return (
        <div className="my-2 row">
            <div className="col-9 col-md-6">
                {mainControlsFull}
            </div>
            <div className="col-3 col-md-6 text-right">
                <div className={classes.DesktopOnly}>
                    {subControlsFull}
                </div>
                <div className={`dropdown ${classes.MobileOnly}`}>
                    <button
                        type="button"
                        className="btn btn-light"
                        data-toggle="dropdown"><FontAwesomeIcon icon={faEllipsisH} /></button>
                    <div className="dropdown-menu dropdown-menu-right">
                        {subControlsText}
                    </div>
                </div>
            </div>
        </div>
    )
}
