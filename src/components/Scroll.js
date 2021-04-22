import React from 'react';

const Scroll = (Props) => {
    return (
        <div style={{ overflow: 'scroll', border: '3px solid rgba(7,40,65,1)  ', height: '700px'}}>
            {Props.children}
        </div>
    );
};

export default Scroll;