import React from 'react'
import { Typography, Link } from '@material-ui/core'

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  marginTop: {
      marginTop: "20px"
  }
}));

export default () => {
  
  const classes = useStyles();

  return (
  <Typography variant="body2" color="textSecondary" align="center" className={classes.marginTop}>
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Paolo Di Bello
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
  </Typography>
  )
}