import React from 'react'
import classes from './ControlBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

export default (props) => (

    <div className="row my-2">
        <div className="col-9 col-md-6">
            {props.left}
        </div>
        <div className="col-3 col-md-6 text-right">
            <div className={classes.DesktopOnly}>
                {props.rightDesktop}
                {props.moreDesktop ?
                    (
                        <div className="dropdown">
                            <button
                                type="button"
                                className="btn btn-light"
                                data-toggle="dropdown"><FontAwesomeIcon icon={faEllipsisH} /></button>
                            <div className="dropdown-menu dropdown-menu-right">
                                {props.moreDesktop}
                            </div>
                        </div>
                    ) : null
                }
            </div>
            <div className={classes.MobileOnly}>
                {props.rightMobile}
                {props.moreMobile ?
                    (
                        <div className="dropdown">
                            <button
                                type="button"
                                className="btn btn-light"
                                data-toggle="dropdown"><FontAwesomeIcon icon={faEllipsisH} /></button>
                            <div className="dropdown-menu dropdown-menu-right">
                                {props.moreMobile}
                            </div>
                        </div>
                    ) : null
                }

            </div>
        </div>
    </div>
)
