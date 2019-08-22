import React, { useState } from "react";
import WordBar from "./WordBar";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const WORD = "LAKE";


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
  
function Game() {

  const [guess, setGuess] = useState("");
  const [tries, setTries] = useState(0);
  const classes = useStyles();

  const handleGuess = (newGuess) => {
    setGuess(newGuess);
  };

  const updateTries = () => {
    setTries(tries + 1);
  };

  const addCharsToSet = () => {
    let chars = new Set();
    for (let char of WORD) {
      chars.add(char);
    }
    return chars;
  };
  
  const revealCowsandBulls = () => {
    const chars = addCharsToSet();
    let charsSeenSoFar = new Set();
    let bulls = 0,
      cows = 0;
    for (let index = 0; index < guess.length; index++) {
      let currentChar = guess[index];
      if (currentChar === WORD[index]) {
        bulls++;
      } else if (!charsSeenSoFar.has(currentChar) && chars.has(currentChar)) {
        cows++;
      }
      charsSeenSoFar.add(currentChar);
    }
    return checkIfGameHasEnded(cows, bulls);
  };

  const checkIfGameHasEnded = (cows, bulls) => {
    if (bulls === 4) {
      return <Typography variant="h5" component="h2" color="primary" gutterButtom>Congrats! You've won the game!</Typography>;
    } else {
      return (
        <div>
          <Typography variant="h5" component="h2" gutterButtom>Cows: {cows}</Typography>
          <Typography variant="h5" component="h2" gutterButtom>Bulls: {bulls}</Typography>
        </div>
      );
    }
  };

  const revealNumberOfTries = () => {
    return (
    <Typography variant="h5" component="h2" gutterButtom># Of Tries: {tries}</Typography>
    )
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Cows and Bulls!
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Please enter a word below.\n'}
          <WordBar onGuess={handleGuess} onTry={updateTries} />
          {revealCowsandBulls()}
          {revealNumberOfTries()}
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
