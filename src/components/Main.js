import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function Main() {
  const classes = useStyles();
  return (
    <div style={{ padding: '20px' }}>
      <div ><TextField
        id="filled-number"
        label="Number"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        variant="filled"
      />
      </div>
      <div style={{ padding: '10px' }}>
        <Button variant="contained" color="primary">
          Check!
        </Button>
      </div>
      <div style={{ padding: '20px' }}>
        <div>
          Start Guessing..
        </div>
        <div>
          Score
        </div>
        <div>
          Highest Score
        </div>
      </div>


    </div>
  )
}

export default Main
