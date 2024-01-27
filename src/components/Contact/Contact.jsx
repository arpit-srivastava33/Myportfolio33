import React from 'react'
import { getImgUrl } from '../../utils'
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <>
            <footer id="contact" className={styles.container}>
                <div className={styles.text}><h2>Contact</h2>
                    <p>Feel Free to reach out</p>
                </div>
                <ul className={styles.links}>
                    <li className={styles.link}>
                        <img src={getImgUrl('contact/emailIcon.png')} alt="Email icon" />
                        <a href="mailto:chiragsrivastava4711@gmail.com">My Email</a>
                    </li>
                    <li className={styles.link}>
                        <img src={getImgUrl('contact/linkedinIcon.png')} alt="Linkedin icon" />
                        <a href="https://www.linkedin.com/in/arpit-srivastava-7a561b208/">My Linkedin</a>
                    </li>
                    <li className={styles.link}>
                        <img src={getImgUrl('contact/githubIcon.png')} alt="Github icon" />
                        <a href="https://github.com/arpit-srivastava33">My Github</a>
                    </li>
                </ul>
            </footer>
        </>
    )
}

export default Contact
