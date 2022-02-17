import React from 'react';
import styles from './About.module.css'

function About(props) {
    return (
          <div className={styles.linkedin_container}>
                <a 
                    href="http://www.linkedin.com/in/andrew-kal"
                    target="_blank"
                    rel="noreferrer">
                    <img
                        src="https://i.imgur.com/kDHwVPO.png"
                        alt="Andrew Kal"
                        className={styles.img}
                    />
                </a>
                <a 
                    href="https://www.linkedin.com/in/matthew-brockus-17ab0a159/"
                    target="_blank"
                    rel="noreferrer">
                    <img
                        src="https://i.imgur.com/LWRHVKN.jpg"
                        alt="Matthew Brockus"
                        className={styles.img}
                    />
                </a>
                <a 
                    href="https://www.linkedin.com/in/michelpathinvo/"
                    target="_blank"
                    rel="noreferrer">
                    <img
                        src="https://i.imgur.com/ZZq66pn.jpg"
                        alt="Michel Pathinvo"
                        className={styles.img}
                    />
                </a>
                <a 
                    href="https://www.linkedin.com/in/stuntmccartney/"
                    target="_blank"
                    rel="noreferrer">
                    <img
                        src="https://i.imgur.com/Pj8NyK6.jpg"
                        alt="Andrew Kal"
                        className={styles.img}
                    />
                </a>
        </div>
    );
}

export default About;