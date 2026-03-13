import React from 'react';

function Notification(props) {
    return (
        <div className="notification">
            <div className="content">
                {/* requirement 3 */}
                {props.children} 
            </div>

            <button onClick={props.onClear}>clear</button>
        </div>
    );
}

export default Notification;