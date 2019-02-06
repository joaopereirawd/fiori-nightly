import React from 'react';


const fd_panel = (props) => {
    return (
        <div className={`${props.customClass} fd-col--${props.colNumber}`}>
            {props.children} 
        </div>
    )
}

export default fd_panel;