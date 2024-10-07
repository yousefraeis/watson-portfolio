import React from 'react';
import { motion } from 'framer-motion';
import { circle, profile } from '../../assets';
import './Header.scss';
import { skillCircleComponents } from '../../constants';
import { MainWrapper } from '../../wrapper';

const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut',
        },
    },
};

const Header = () => {
    return (
        <MainWrapper
            id="home"
            paddingBlock="0rem"
            paddingChild="0rem"
            showCopyright={false}
        >
            <div className="header-container flex-center">
                <motion.div
                    whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="header-info"
                >
                    <div className="header-badge">
                        <div className="badge-container flex-center">
                            <span>👋</span>
                            <div style={{ marginLeft: 20 }}>
                                <p className="greeting-text p">Hello, I'm</p>
                                <h1 className="name-text h1">Watson</h1>
                            </div>
                        </div>

                        <div className="tags-container flex-center">
                            <p className="profession-text p">Web Developer</p>
                            <p className="profession-text p">
                                Mobile App Developer
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5, delayChildren: 0.5 }}
                    className="profile-image-container"
                >
                    <img src={profile} alt="Profile Background" />

                    <motion.img
                        whileInView={{ scale: [0, 1] }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        src={circle}
                        alt="Profile Circle Overlay"
                        className="overlay-circle"
                    />
                </motion.div>

                <motion.div
                    variants={scaleVariants}
                    whileInView={scaleVariants.whileInView}
                    className="skills-circles"
                >
                    {skillCircleComponents.map((circle, index) => (
                        <div key={index} className="skill-circle flex-center">
                            <img src={circle} alt="Application Icons" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </MainWrapper>
    );
};

export default Header;
