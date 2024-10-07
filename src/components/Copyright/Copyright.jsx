import React from 'react';

import './Copyright.scss'

const Copyright = () => {
    return (
        <div className="copyright">
            <p className="txt-p">© {new Date().getFullYear()}. Watson</p>
            <p className="txt-p">All rights reserved</p>
        </div>
    );
};

export default Copyright;
