import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default (props) => (
    <div className="mb-1" style={{
        textAlign: "center"
    }}>
        <FontAwesomeIcon icon={faSpinner} spin />
    </div>
)
