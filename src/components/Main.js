import { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { StepContent } from '@material-ui/core';

// for Material-UI
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));



let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log("Secret Number:", secretNumber);

function Main() {
  const classes = useStyles();

  // states

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let guess = parseInt(score)
    { console.log("hi", guess) }



    if (!guess) {
      setText('No Number Filled')
    } else if (guess === secretNumber) {
      setText('Correct Guess')

      if (score > highScore) {
        highScore = score;
        setHighScore(highScore)
      }

    } else if (guess !== secretNumber) {
      if (score > 1) {
        { setText(guess > secretNumber ? '📈 Your guess is high' : '📉 Your guess is low') }
        setScore(score - 1)
        setScore(score)
      } else {
        setText("😞 You LOST!!")
        setScore(0)


      }
    }

  };

  return (
    <div style={{ padding: '20px' }}>
      <div >
        {/* <TextField
          id="filled-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          value={score}
          onSubmit={handleSubmit}
          onChange={(e) => setScore(e.target.value)}
        /> */}

        <form onSubmit={handleSubmit}>
          <label htmlFor='guess'>Guess a Number:</label>
          <input
            type='number'
            name='guess'
            id='guess'
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
          {console.log('Input:', score)}


          <div style={{ padding: '10px' }}>
            <Button type='submit' variant="contained" color="primary" >
              Check!
            </Button>
          </div>
        </form>

      </div>

      {/* <div style={{ padding: '20px' }}>
        <div>
          Start Guessing..
        </div>
        <div>
          Score
        </div>
        <div>
          Highest Score
        </div>
      </div> */}


    </div>
  )
}

export default Main
