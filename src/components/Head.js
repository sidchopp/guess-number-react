import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 2,
  },
}));

export default function Head() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        {/* <Toolbar> */}
        {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
        <Typography gutterBottom>
          <Box fontFamily="Monospace" fontSize={40} fontWeight="fontWeightBold" textAlign="center" m={1}>
            Guess a Number
          </Box>
          <Box fontFamily="Monospace" fontWeight="fontWeightLight" textAlign="center" m={4}>
            Random whole number selected between 1 and 20. See if you can guess it in 5 turns or fewer. You get info if your guess was too high or too low.
          </Box>
        </Typography>

        {/* </Toolbar> */}
      </AppBar>
    </div>
  );
}