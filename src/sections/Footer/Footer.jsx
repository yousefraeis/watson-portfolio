import React, { useState } from 'react';
import { MainWrapper } from '../../wrapper';
import './Footer.scss';
import { emailIcon, mobile } from '../../assets';

const Footer = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const { name, email, message } = formData;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        setLoading(true);

        setTimeout(() => {
            console.log('Form submitted:', { name, email, message });
            setLoading(false);
            setIsFormSubmitted(true);
        }, 1000);
    };

    return (
        <MainWrapper id="contact" className="footer bg-white">
            <>
                <h2 className="footer-header txt-heading heading">
                    Take a coffee & chat with me
                </h2>

                <div className="footer-contact-cards">
                    <div className="footer-contact-card">
                        <img src={emailIcon} alt="email" />
                        <a
                            href="mailto:hello@micael.com"
                            className="contact-text"
                        >
                            hello@micael.com
                        </a>
                    </div>

                    <div className="footer-contact-card">
                        <img src={mobile} alt="phone" />
                        <a
                            href="tel:+1 (123) 456-7890"
                            className="contact-text"
                        >
                            +1 (123) 456-7890
                        </a>
                    </div>
                </div>

                {!isFormSubmitted ? (
                    <div className="footer-form flex-center">
                        <div className="form-input flex-center">
                            <input
                                className="input-text txt-p"
                                type="text"
                                placeholder="Your Name"
                                name="name"
                                value={name}
                                onChange={handleChangeInput}
                            />
                        </div>
                        <div className="form-input flex-center">
                            <input
                                className="input-text txt-p"
                                type="email"
                                placeholder="Your Email"
                                name="email"
                                value={email}
                                onChange={handleChangeInput}
                            />
                        </div>
                        <div className="flex-center">
                            <textarea
                                className="input-textarea txt-p"
                                placeholder="Your Message"
                                value={message}
                                name="message"
                                onChange={handleChangeInput}
                            />
                        </div>
                        <button
                            type="button"
                            className="submit-button txt-p"
                            onClick={handleSubmit}
                        >
                            {!loading ? 'Send Message' : 'Sending...'}
                        </button>
                    </div>
                ) : (
                    <div>
                        <h3 className="thank-you-message txt-heading heading">
                            Thank you for getting in touch!
                        </h3>
                    </div>
                )}
            </>
        </MainWrapper>
    );
};

export default Footer;
