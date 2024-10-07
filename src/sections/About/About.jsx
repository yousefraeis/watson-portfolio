import './About.scss';
import { motion } from 'framer-motion';
import { aboutMeSections } from '../../constants';
import { MainWrapper } from '../../wrapper';

const About = () => {
    return (
        <MainWrapper id="about" className="bg-white">
            <div className="about-section">
                <h2 className="about-heading heading">
                    I Know that <span>Good Design</span> <br />
                    means <span>Good Business</span>
                </h2>

                <div className="profiles-container">
                    {aboutMeSections.map((about, index) => (
                        <motion.div
                            whileInView={{ opacity: 1 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.5, type: 'tween' }}
                            className="profile-card"
                            key={about.title + index}
                        >
                            <img src={about.url} alt={about.title} />
                            <h2 className="profile-title h2">{about.title}</h2>
                            <p className="profile-description p">
                                {about.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </MainWrapper>
    );
};

export default About;
