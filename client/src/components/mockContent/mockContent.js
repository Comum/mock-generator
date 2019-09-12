import React from 'react';

const MockContent = (props) => {
    const { pageType } = props;
    
    return (
    <div>
        <h3>Mock area</h3>
        <div>
            {pageType}
        </div>
    </div>
)};

export default MockContent;