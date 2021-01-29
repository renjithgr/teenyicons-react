import React from 'react';

const BaseIcon = (props) => {
    return (
        <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            { props.children }
        </svg>
    );
};

export default BaseIcon;