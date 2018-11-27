import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faBell, faComment, faShare } from '@fortawesome/free-solid-svg-icons';
import Aux from '../../../hoc/Aux/Aux';

export default (props) => {

    const icons = {
        Answer: faPencilAlt,
        Follow: faBell,
        Comment: faComment,
        Share: faShare
    }
    let ctrlView = null;

    switch (props.ctrlType) {
        case "button":
            ctrlView = (
                <button type="button" className="btn btn-light mx-1">
                    <span>
                        <FontAwesomeIcon icon={icons[props.ctrlName]} /> {props.ctrlName}
                    </span>
                </button>
            )
            break;

        case "text":
            ctrlView = (
                <span>{props.ctrlName}</span>
            )
            break;
        
        case "icon":
            ctrlView = (
                <button type="button" className="btn btn-light mx-1">
                    <FontAwesomeIcon icon={icons[props.ctrlName]} />
                </button>
            )
            break;

        default:
            break;
    }

    return (
        <Aux>
            {ctrlView}
        </Aux>
    )
}