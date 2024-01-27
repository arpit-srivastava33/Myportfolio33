import React from 'react';
import { getImgUrl } from '../../utils';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi,I`m Arpit Srivastava</h1>
                <p className={styles.description}>👋 I'm an aspiring full-stack developer with a passion for crafting dynamic web applications.Eager to contribute my fresh perspective and learn alongside a dynamic team. Let's connect and explore the exciting world of web development together!</p>
                <div className={styles.btn}>
                    <a className={styles.contactBtn} href="https://www.linkedin.com/in/arpit-srivastava-7a561b208" target='_blank'>Linkedin</a>
                    <a className={styles.contactBtn} href="https://drive.google.com/file/d/1dYLo_9UY3CozsKPxW0GVAqPSW0SS6qc6/view?usp=drive_link" target='_blank'>Resume</a>
                </div>
            </div>
            <img className={styles.heroImg} src={getImgUrl('hero/groot.png')} alt="Hero Img of me" />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}

export default Hero
