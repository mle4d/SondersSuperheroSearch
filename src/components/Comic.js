import React from 'react';
import title from './assets/title.png';
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
        <div className={styles.comic}>
          <div className={styles.superheros}><Superhero /></div>
        </div>
      </div>
    </>
  );
}



export default Game;
