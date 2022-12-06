import React from 'react';
import {IconButton, Toolbar, Drawer, Button, Avatar, AppBar } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import useStyles from './style';

function NavBar() {
  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        bara
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;
