import { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


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

  return (
    <div style={{ padding: '20px' }}>
      <div >
        <form >
          <label htmlFor='guess'>Guess a Number:</label>
          <input />
          <div style={{ padding: '10px' }}>
            <Button type='submit' variant="contained" color="primary" >
              Check!
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Main
