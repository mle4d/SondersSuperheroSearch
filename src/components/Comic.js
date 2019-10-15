import React from 'react';
import Button from './Button';
import title from './assets/title.png';
import Pow from './assets/Pow.png';
import info from './assets/info.png';
import styles from './comic.css';
import Superhero from './Superheros';




function Game() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.Title}><img src={title}></img></div>
          <div className={styles.info}><img src={info}></img></div>
        </div>
        <div className={styles.comic}><img src={Pow}></img>
          <Superhero />
        </div>
      </div>
    </>
  );
}



export default Game;
