import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faBell, faComment, faShare, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default (props) => {

    const icons = {
        Answer: faPencilAlt,
        Follow: faBell,
        Comment: faComment,
        Share: faShare,
        Upvote: faArrowUp,
        Downvote: faArrowDown
    }
    let ctrlView = null;

    switch (props.ctrlType) {
        case "button":
            ctrlView = (
                <button
                    className="btn mx-1"
                    onClick={props.clicked}>
                    <span>
                        <FontAwesomeIcon icon={icons[props.ctrlName]} /> {props.ctrlName}
                    </span>
                </button>
            )
            break;

        case "text":
            ctrlView = (
                <div className="dropdown-item">
                    <span onClick={props.clicked}>{props.ctrlName}</span>
                </div>
            )
            break;

        case "icon":
            ctrlView = (
                <button
                    type="button"
                    className="btn btn-light mx-1"
                    onClick={props.clicked}>
                    <FontAwesomeIcon icon={icons[props.ctrlName]} />
                </button>
            )
            break;

        default:
            break;
    }

    return (
        <React.Fragment>
            {ctrlView}
        </React.Fragment>
    )
}