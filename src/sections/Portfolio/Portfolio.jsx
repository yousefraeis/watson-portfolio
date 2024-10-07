import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';

import './Portfolio.scss';
import { workFilterCategories, workProjects } from '../../constants';
import { MainWrapper } from '../../wrapper';

const Portfolio = () => {
    const [filteredProjects, setFilteredProjects] = useState(workProjects);
    const [currentFilter, setCurrentFilter] = useState('All');
    const [cardAnimation, setCardAnimation] = useState({ y: 0, opacity: 1 });

    const handleProjectFilter = (filter) => {
        setCurrentFilter(filter);
        setCardAnimation({ y: 100, opacity: 0 });

        setTimeout(() => {
            setCardAnimation({ y: 0, opacity: 1 });

            if (filter === 'All') {
                setFilteredProjects(workProjects);
            } else {
                setFilteredProjects(
                    workProjects.filter((project) =>
                        project.tags.includes(filter)
                    )
                );
            }
        }, 500);
    };

    return (
        <MainWrapper id="work" className="portfolio-section">
            <div>
                <h2 className="portfolio-heading heading">
                    My Creative <span>Portfolio</span> Section
                </h2>

                <div className="project-filtern flex-center">
                    {workFilterCategories.map((filter, index) => (
                        <div
                            key={index}
                            onClick={() => handleProjectFilter(filter)}
                            className={`project-filter-item flex-center ${
                                currentFilter === filter ? 'filter-active' : ''
                            }`}
                        >
                            {filter}
                        </div>
                    ))}
                </div>

                <motion.div
                    animate={cardAnimation}
                    transition={{ duration: 0.5, delayChildren: 0.5 }}
                    className="project-portfolio"
                >
                    {filteredProjects.map((project, index) => (
                        <div key={index} className="project-card flex-center">
                            <div className="project-image-container flex-center">
                                <img src={project.url} alt={project.name} />

                                <motion.div
                                    whileHover={{ opacity: [0, 1] }}
                                    transition={{
                                        duration: 0.25,
                                        ease: 'easeInOut',
                                        staggerChildren: 0.5,
                                    }}
                                    className="project-hover-overlay flex-center"
                                >
                                    <a
                                        href={project.projectLink}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <motion.div
                                            whileInView={{ scale: [0, 1] }}
                                            whileHover={{ scale: [1, 0.9] }}
                                            transition={{ duration: 0.25 }}
                                            className="flex-center"
                                        >
                                            <AiFillEye />
                                        </motion.div>
                                    </a>

                                    <a
                                        href={project.codeLink}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <motion.div
                                            whileInView={{ scale: [0, 1] }}
                                            whileHover={{ scale: [1, 0.9] }}
                                            transition={{ duration: 0.25 }}
                                            className="flex-center"
                                        >
                                            <AiFillGithub />
                                        </motion.div>
                                    </a>
                                </motion.div>
                            </div>

                            <div className="project-content flex-center">
                                <h4 className="project-title h2">
                                    {project.title}
                                </h4>
                                <p className="project-description p">
                                    {project.description}
                                </p>

                                <div className="project-tag flex-center">
                                    <p className="p">{project.tags[0]}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </MainWrapper>
    );
};

export default Portfolio;
