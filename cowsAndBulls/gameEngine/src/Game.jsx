import React, { useEffect, useState, useRef } from "react";
import WordBar from "./WordBar";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core';

const WORDS = ["LAKE", "SEAL", "RAIN", "IDOL", "FORD", "CROW", "WHEN", "TAIL"];

const WORD = WORDS[Math.floor(Math.random()*WORDS.length)];
console.log("WORD: ", WORD)


function MadeWithLoveByShalini() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Made with love by Shalini'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    backgroundColor: 'white',
  },
  }));

/**
 * TODO: Whenever the guess changes, there needs to be an update in the # of cows and/or # of bulls.
 *       Guess is to use "useEffect" and break up cows and bulls into separate states
 *       useEffect can also be used to determine when to re-set the # of attempts to be 0.
 */

function Game(props) {
  const [guess, setGuess] = useState("");
  /*
   * To record the # of tries in the game before
   * it gets reset.
   */
  const prevTriesRef = useRef();
  const classes = useStyles();


  useEffect(() => {
    prevTriesRef.current = props.tries;
  });

  const prevTries = prevTriesRef.current;

  const handleGuess = (newGuess) => {
    setGuess(newGuess);
  };

  const addCharsToSet = () => {
    let chars = new Set();
    for (let char of WORD) {
      chars.add(char);
    }
    return chars;
  };

  const CHARS = addCharsToSet()

  const calculateCowsandBulls = () => {
    let charsSeenSoFar = new Set();
    let bulls = 0,
      cows = 0;
    for (let index = 0; index < guess.length; index++) {
      let currentChar = guess[index];
      if (currentChar === WORD[index]) {
        bulls++;
      } else if (!charsSeenSoFar.has(currentChar) && CHARS.has(currentChar)) {
        cows++;
      }
      charsSeenSoFar.add(currentChar);
    }
    return [checkIfGameHasEnded(cows, bulls), revealNumberOfTries(bulls), bulls];
  };

  const onClickHandler = () => {
    props.resetTries();
    window.location.reload();
  }


  const checkIfGameHasEnded = (cows, bulls) => {
    if (bulls === 4) {
      return (
        <div>
        <Typography variant="h5" component="h2" color="primary" gutterButtom>Congrats! You've won the game!</Typography>
        </div>
        );
    } else {
      return (
        <div>
          <Typography variant="h5" component="h2" gutterButtom>Cows: {cows}</Typography>
          <Typography variant="h5" component="h2" gutterButtom>Bulls: {bulls}</Typography>
        </div>
      );
    }
  };

  const revealNumberOfTries = (bulls) => {
    if (bulls === 4) {
    return (<div>
        <Typography variant="h5" component="h2" color="primary" gutterButtom>TOTAL # of Attempts: {props.tries}</Typography>
        <Button onClick={onClickHandler} variant="contained">Play Another Game!</Button>
        </div>
        )
    } else {
    return (<Typography variant="h5" component="h2" gutterButtom>Attempts: {props.tries}</Typography>)
    }
  }

  const revealCowsAndBulls = calculateCowsandBulls()[0];
  const returnNumberOfTries = calculateCowsandBulls()[1];


  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Cows and Bulls!
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Please enter a word below.\n'}
          <WordBar onGuess={handleGuess} onTry={props.onChangeTries} />
          {revealCowsAndBulls}
          {returnNumberOfTries}
        </Typography>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">Thank you for playing.</Typography>
          <MadeWithLoveByShalini/>
        </Container>
      </footer>
      </div>
  );
}

export default Game;
