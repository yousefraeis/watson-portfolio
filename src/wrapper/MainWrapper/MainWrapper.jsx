import React, { useState } from 'react';
import { NavDots, SocialMedia, Copyright } from '../../components';
import { motion } from 'framer-motion';
import { navigationItems } from '../../constants';
import './MainWrapper.scss';

const MainWrapper = ({
    id,
    className,
    children,
    paddingBlock,
    paddingChild,
    showNavDots = true,
    showSocialMedia = true,
    showCopyright = true,
}) => {
    return (
        <div
            id={id}
            className={`main-wrapper ${className || ''}`}
            style={{ paddingBlock: paddingBlock || '5rem' }}
        >
            
            {/* {showNavDots && <NavDots active={id || 'home'} />} */}

            <motion.div
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.5 }}
                className="flex-center"
                style={{
                    flex: '1',
                    width: '90%',
                    flexDirection: 'column',
                    padding: paddingChild || '2rem',
                }}
            >
                {children}
            </motion.div>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    position: 'absolute',
                    left: '0',
                    bottom: '0',
                    padding: '1.5rem',
                }}
            >
                {showSocialMedia && <SocialMedia />}
                {showCopyright && <Copyright />}
            </div>
        </div>
    );
};

export default MainWrapper;
