import React from 'react';
import { socialMediaLinks } from '../../constants';
import './SocialMedia.scss';

const SocialMedia = () => {
    return (
        <div className="social-media-container">
            {socialMediaLinks.map((item, index) => (
                <a
                    key={index}
                    href={item.href}
                    className="social-media"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div>
                        {React.createElement(item.icon)}
                    </div>
                </a>
            ))}
        </div>
    );
};

export default SocialMedia;
