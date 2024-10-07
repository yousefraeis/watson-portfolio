/* eslint-disable jsx-a11y/anchor-is-valid */
import './Navbar.scss';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { useState } from 'react';
import { motion } from 'framer-motion';

import { navigationItems } from '../../constants';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="app__navbar flex-between">
            <div className="app__navbar-logo">
                <a
                    className="heading"
                    style={{
                        fontSize: '1.4rem',
                        fontWeight: '800',
                        letterSpacing: '1px',
                    }}
                    href='#'
                >
                    WAT<span>SON</span>
                </a>
                
            </div>

            <ul className="app__navbar-links">
                {navigationItems.map((item) => (
                    <li key={item.id} className="flex-center p">
                        <a href={item.url}>{item.title}</a>
                    </li>
                ))}
            </ul>

            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={() => setToggle(true)} />
                {toggle && (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                    >
                        <HiX onClick={() => setToggle(false)} />
                        <ul>
                            {navigationItems.map((item) => (
                                <li key={item.id}>
                                    <a
                                        href={item.url}
                                        onClick={() => setToggle(false)}
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
