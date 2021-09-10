import { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


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



  function checkGuess(e) {
    e.preventDefault();


    let Guess = Number(myGuess)
    if (Guess === secretNumber) {
      setResult("Congratulations! You got it right!");
      setLowOrHi("");

    } else if (Guess > secretNumber) {
      setResult("Wrong!");
      setLowOrHi("Last guess was too high!");
    } else if (Guess < secretNumber) {
      setResult("Wrong!");
      setLowOrHi("Last guess was too low!");
    }


  }

  function changeHandler(e) {
    e.preventDefault();
    setMyGuess(e.target.value)
  }


  return (
    <div style={{ padding: '20px' }}>

      <form>
        <label htmlFor={myGuess}>Guess a Number:</label>
        <input id={myGuess} name={myGuess} type="number" min="1" max="100" onChange={changeHandler} />
        <div style={{ padding: '10px' }}>
          <Button type='submit' onClick={checkGuess} variant="contained" color="primary" >
            Check!
          </Button>
        </div>
      </form>

      <div>
        {console.log(myGuess)}
        {/* <p >{myGuess}</p> */}
        <p >{result}</p>
        <p >{lowOrHi}</p>

      </div>
    </div>
  )
}

export default Main
