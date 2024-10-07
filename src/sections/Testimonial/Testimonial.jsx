import React, { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import './Testimonial.scss';
import { MainWrapper } from '../../wrapper';
import { testimonialsList, brandLogos } from '../../constants';
const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <MainWrapper id="testimonial" className="testimonial-wrapper">
            <div className="flex-center" style={{ flexDirection: 'column' }}>
                {testimonialsList.length > 0 && (
                    <>
                        <div className="testimonial-item flex-center">
                            <img
                                src={testimonialsList[currentIndex].imgUrl}
                                alt={testimonialsList[currentIndex].name}
                            />
                            <div className="testimonial-content">
                                <p className="testimonial-feedback">
                                    {testimonialsList[currentIndex].feedback}
                                </p>
                                <div>
                                    <h4 className="testimonial-name">
                                        {testimonialsList[currentIndex].name}
                                    </h4>
                                    <h5 className="testimonial-company">
                                        {testimonialsList[currentIndex].company}
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial-navigation flex-center">
                            <div
                                className="navigation-button flex-center"
                                onClick={() =>
                                    handleClick(
                                        currentIndex === 0
                                            ? testimonialsList.length - 1
                                            : currentIndex - 1
                                    )
                                }
                            >
                                <HiChevronLeft />
                            </div>

                            <div
                                className="navigation-button flex-center"
                                onClick={() =>
                                    handleClick(
                                        currentIndex ===
                                            testimonialsList.length - 1
                                            ? 0
                                            : currentIndex + 1
                                    )
                                }
                            >
                                <HiChevronRight />
                            </div>
                        </div>
                    </>
                )}

                <div className="brand-logos flex-center">
                    {brandLogos.map((brand) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5, type: 'tween' }}
                            key={brand.name}
                        >
                            <img src={brand.logoUrl} alt={brand.name} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </MainWrapper>
    );
};

export default Testimonial 

