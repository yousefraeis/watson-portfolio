/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { navigationItems } from '../../constants';
import './NavDots.scss';

const NavDots = ({ active }) => (
    <div className="app__navdots">
        {navigationItems.map((item, index) => {
            return (
                <a
                    key={item.title}
                    href={item.url}
                    className="app__navdots-dot"
                    style={
                        index === item.id
                            ? { backgroundColor: '#313bac' }
                            : {}
                    }
                />
            );
        })}
    </div>
);

export default NavDots;
