import React from 'react';


const fd_panel = (props) => {
    return (
        <div className={`fd-col--${props.colNumber}`}>
            {props.children} 
        </div>
    )
}

export default fd_panel;