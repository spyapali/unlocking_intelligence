import React, { useEffect, useState } from "react";
import WordBar from "./WordBar";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const WORD = "LAKE";
const CHARS = new Set(["L", "A", "K", "E"])


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

function Game() {
  const [bulls, setBulls] = useState(0);
  const [cows, setCows] = useState(0);
  const [guess, setGuess] = useState("");
  const [tries, setTries] = useState(0);

  const classes = useStyles();

  const handleGuess = (newGuess) => {
    setGuess(newGuess);
  };

  const updateTries = () => {
    setTries(tries + 1);
  };

   const updateCows = () => {
    this.setState(cows + 1);
  }

  const updateBulls = () => {
    this.setState(bulls + 1)
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
          {bulls === 4 ? (
            <Typography variant="h5" component="h2" color="primary" gutterButtom>Congrats! You've won the game!</Typography>
          ) : (
          <div>
            <Typography variant="h5" component="h2" gutterButtom>Cows: {cows}</Typography>
            <Typography variant="h5" component="h2" gutterButtom>Bulls: {bulls}</Typography>
          </div>
          )}
          <Typography variant="h5" component="h2" gutterButtom>Attempts: {tries}</Typography>
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
