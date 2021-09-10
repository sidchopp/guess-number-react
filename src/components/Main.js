import { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Input } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

//CSS
import '../main.css'


function Main() {
  //let secretNumber = 16;
  //let secretNumber = Math.trunc(Math.random() * 20 + 1);
  //console.log("Secret Number:", secretNumber);

  // states
  const [myGuess, setMyGuess] = useState("");
  const [lowOrHi, setLowOrHi] = useState("");
  const [result, setResult] = useState("");
  const [secretNumber, setSecretNumber] = useState(Math.trunc(Math.random() * 20 + 1))

  console.log("Secret Number:", secretNumber);

  // Event Handlers

  function checkGuess(e) {
    e.preventDefault();

    let Guess = Number(myGuess);
    console.log("My Guess:", Guess)

    if (Guess === secretNumber) {
      setResult("Congratulations! You got it right!");
      setLowOrHi("");
      setMyGuess(0);
    } else if (Guess > secretNumber) {
      setResult("Wrong!");
      setLowOrHi("Last guess was too high!");
    } else if (Guess < secretNumber) {
      setResult("Wrong!");
      setLowOrHi("Last guess was too low!");
    } else if (Guess == "" || Guess == 0) {
      alert("Please fill a number greater than 0");
    }
  }

  function changeHandler(e) {
    e.preventDefault();
    setMyGuess(e.target.value)
  }

  function resetGame() {
    setResult("")
  }


  return (
    <div style={{ padding: '20px' }}>
      <form>

        <label htmlFor={myGuess}>Write a Number to continue:</label>
        <input
          className='input-field'
          placeholder="1 - 20"
          id={myGuess}
          name={myGuess}
          value={myGuess}
          type="number"
          min="1"
          max="20"
          onChange={changeHandler} required />
        <div style={{ padding: '10px' }}>
          <Button disabled={!myGuess} type='submit' onClick={checkGuess} variant="contained" color="primary" >
            Check!
          </Button>


        </div>
      </form>
      <div>
        {console.log(myGuess)}
        {/* <p >{myGuess}</p> */}
        <p >{result}</p>
        <p >{lowOrHi}</p>
        <Button type='submit' onClick={resetGame} variant="contained" color="secondary" >
          Restart
        </Button>
      </div>
    </div>
  )
}

export default Main
