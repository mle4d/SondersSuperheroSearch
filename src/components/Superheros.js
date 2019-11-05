import React, { Component } from 'react';
import Button from './Button';
import batmanrobinsound from './assets/sounds/batmanrobinsound.mp3';
import batmansound from './assets/sounds/batmansound.mp3';
import captainamericasound from './assets/sounds/captainamericasound.mp3';
import deadpoolsound from './assets/sounds/deadpoolsound.mp3';
import hulksound from './assets/sounds/hulksound.mp3';
import powerrangersound from './assets/sounds/powerrangersound.mp3';
import spidermansound from './assets/sounds/spidermansound.mp3';
import supermansound from './assets/sounds/supermansound.mp3';
import transformersound from './assets/sounds/transformersound.mp3';
import wolverinesound from './assets/sounds/wolverinesound.mp3';
import buzzsound from './assets/sounds/buzzsound.mp3';
import ironmansound from './assets/sounds/ironmansound.mp3';
import wonderwomansound from './assets/sounds/wonderwomansound.mp3';
import aquamansound from './assets/sounds/aquamansound.mp3';
import blackpanthersound from './assets/sounds/blackpanthersound.mp3';
import captainmarvelsound from './assets/sounds/captainmarvelsound.mp3';
import elastigirlsound from './assets/sounds/elastigirlsound.wav';
import batmanrobin from './assets/superheros/batmanrobin.png';
import batman from './assets/superheros/batman.png';
import captainamerica from './assets/superheros/captainamerica.png';
import deadpool from './assets/superheros/deadpool.png';
import hulk from './assets/superheros/hulk.png';
import greenranger from './assets/superheros/greenranger.png';
import spiderman from './assets/superheros/spiderman.png';
import superman from './assets/superheros/superman.png';
import bumblebee from './assets/superheros/bumblebee.png';
import wolverine from './assets/superheros/wolverine.png';
import buzz from './assets/superheros/buzz.png';
import ironman from './assets/superheros/ironman.png';
import wonderwoman from './assets/superheros/wonderwoman.png';
import aquaman from './assets/superheros/aquaman.png';
import blackpanther from './assets/superheros/blackpanther.png';
import captainmarvel from './assets/superheros/captainmarvel.png';
import elastigirl from './assets/superheros/elastigirl.png';
import Pow from './assets/Pow.png';
import styles from './button.css';


const superheroMap = {
  superhero1: {
    name: 'Batman and Robin',
    src: batmanrobinsound,
    image: batmanrobin
  },
  superhero2: {
    name: 'Batman',
    src: batmansound,
    image: batman,
  },
  superhero3: {
    name: 'Captain America',
    src: captainamericasound,
    image: captainamerica
  },
  superhero4: {
    name: 'Deadpool',
    src: deadpoolsound,
    image: deadpool
  },
  superhero5: {
    name: 'Hulk',
    src: hulksound,
    image: hulk,
  },
  superhero6: {
    name: 'Green Ranger',
    src: powerrangersound,
    image: greenranger
  },
  superhero7: {
    name: 'Spiderman',
    src: spidermansound,
    image: spiderman
  },
  superhero8: {
    name: 'Superman',
    src: supermansound,
    image: superman
  },
  superhero9: {
    name: 'Bumblebee',
    src: transformersound,
    image: bumblebee
  },
  superhero10: {
    name: 'Wolverine',
    src: wolverinesound,
    image: wolverine
  },
  superhero12: {
    name: 'Iron Man',
    src: ironmansound,
    image: ironman
  },
  superhero13: {
    name: 'Wonder Woman',
    src: wonderwomansound,
    image: wonderwoman
  },
  superhero14: {
    name: 'Aquaman',
    src: aquamansound,
    image: aquaman
  },
  superhero15: {
    name: 'Black Panther',
    src: blackpanthersound,
    image: blackpanther
  },
  superhero16: {
    name: 'Captain Marvel',
    src: captainmarvelsound,
    image: captainmarvel
  }
};

export default class Superhero extends Component {

  superhero1 = React.createRef();
  superhero2 = React.createRef();
  superhero3 = React.createRef();
  superhero4 = React.createRef();
  superhero5 = React.createRef();
  superhero6 = React.createRef();
  superhero7 = React.createRef();
  superhero8 = React.createRef();
  superhero9 = React.createRef();
  superhero10 = React.createRef();
  superhero12 = React.createRef();
  superhero13 = React.createRef();
  superhero14 = React.createRef();
  superhero15 = React.createRef();
  superhero16 = React.createRef();
 

  state = {
    playing: ''
  }
  play = superheroId => {
    const ref = this[superheroId];
    this.setState({ playing: superheroMap[superheroId].name });
    ref.current.src = superheroMap[superheroId].src;
    ref.current.currentTime = 0;
    ref.current.play();
  }


  render() {
    const superheroArr = [this.superhero1, this.superhero2, this.superhero3, this.superhero4, this.superhero5, this.superhero6, this.superhero7, this.superhero8, this.superhero9, this.superhero10, this.superhero12, this.superhero13, this.superhero14, this.superhero15, this.superhero16];
    const buttonList = superheroArr.map((superhero, i) => {
      return <Button image={superheroMap[`superhero${i + 1}`].image} key={i} superheroRef={superhero} name={`superhero${i + 1}`} play={this.play} />;
    });
    
    return (
      <>
        <div className={styles.comicbg} style={{ backgroundImage: `url(${ Pow })`, backgroundRepeat: 'no-repeat', backgroundPosition: 'top', marginTop: '-35px' }}>
          {buttonList}
        </div>
      </>
    );
  }
}

