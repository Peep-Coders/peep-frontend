import React from 'react';
import styles from './About.module.css'

function About(props) {
    return (
        <>
          <div className={styles.container_row1}>
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
                 <div className={styles.container_title}>
                <h1>Andrew Kal</h1>
              <p>
                  Hi my name is Andrew Kal, I'm a Front End Developer! <br></br> In this Twitter clone project (PeeP) I primarily worked on the Front End. <br></br> For this project I utilized HTML5, CSS3, JavaScript, REACT Native.
              </p>
            </div>
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
                     <div className={styles.container_title}>
                <h1>Matthew Brockus</h1>
              <p>
                  Hi my name is Matthew Brockus, I'm a Back End Developer! <br></br> In this Twitter clone project (PeeP) I primarily worked on the Back End. <br></br> For this project I utilized Python3 and Django!
              </p>
            </div>
            </div>
             <div className={styles.container_row2}>
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
                <div className={styles.container_title}>
                 <h1>Michel Pathinvo</h1>
              <p>
                  Hi my name is Michel Pathinvo, I'm a Full-Stack Developer! <br></br> In this Twitter clone project (PeeP) I worked on the Full-Stack. <br></br> I used: HTML5, CSS3, JavaScript, REACT Native, Python3, Django. 
              </p>
              </div>
                <a 
                    href="https://www.linkedin.com/in/stuntmccartney/"
                    target="_blank"
                    rel="noreferrer">
                    <img
                        src="https://i.imgur.com/Pj8NyK6.jpg"
                        alt="David Gales"
                        className={styles.img}
                    />
                </a>
                  <div className={styles.container_title}>
                     <h1>David Gales</h1>
              <p>
                  Hi my name is David Gales, I'm a Front End Developer! <br></br> In this Twitter clone project (PeeP) I primarily worked on the Front End. <br></br> For this project I utilized HTML5, CSS3, JavaScript, REACT Native.
              </p>
              </div>
            </div>
            <div className={styles.github_link}>
             <a 
                    href="https://github.com/Peep-Coders"
                    target="_blank"
                    rel="noreferrer">
                    <img
                        src="https://i.imgur.com/FEwCCQi.png"
                        alt="github"
                        className={styles.img_git}
                    />
                </a>
            </div>
        </>
    );
}

export default About;