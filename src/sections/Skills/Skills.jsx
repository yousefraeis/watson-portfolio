import React from 'react';
import { motion } from 'framer-motion';
import { skillsList, workExperienceList } from '../../constants';
import { Tooltip } from 'react-tooltip';
import './Skills.scss';
import { MainWrapper } from '../../wrapper';

const Skills = () => {
    return (
        <MainWrapper id="skills" className="skills-section bg-white">
            <div>
                <h2 className="section-title heading">Skills & Experiences</h2>

                <div className="skills-content">
                    <motion.div className="skills-list">
                        {skillsList.map((skill) => (
                            <motion.div
                                whileInView={{ opacity: [0, 1] }}
                                transition={{ duration: 0.5 }}
                                className="skill-item flex-center"
                                key={skill.name}
                            >
                                <div
                                    className="skill-icon-container flex-center"
                                    style={{ backgroundColor: skill.bgClr }}
                                >
                                    <img src={skill.iconUrl} alt={skill.name} />
                                </div>
                                <p className="skill-name">{skill.name}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className="experience-list">
                        {workExperienceList.map((experience) => (
                            <motion.div
                                className="experience-entry"
                                key={experience.year}
                            >
                                <div className="experience-year">
                                    <p className="year-text">
                                        {experience.year}
                                    </p>
                                </div>

                                <motion.div className="experience-details">
                                    {experience.roles.map((role, index) => (
                                        <div key={index}>
                                            <motion.div
                                                whileInView={{
                                                    opacity: [0, 1],
                                                }}
                                                transition={{ duration: 0.5 }}
                                                className="role-item"
                                                data-tip
                                                data-for={role.name}
                                            >
                                                <h4 className="role-title h2">
                                                    {role.position}
                                                </h4>
                                                <p className="company-name p">
                                                    {role.company}
                                                </p>
                                            </motion.div>
                                            <Tooltip
                                                id={role.name}
                                                effect="solid"
                                                arrowColor="#fff"
                                                className="tooltip-content"
                                            >
                                                {role.description}
                                            </Tooltip>
                                        </div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </MainWrapper>
    );
};

export default Skills;
