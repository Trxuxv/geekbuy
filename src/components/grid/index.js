import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { AreaGrid } from './styled';
import Nav from '../nav';
  
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (

    <AreaGrid>

    
      <div className={classes.root}>
      <Grid container  alignItems="center" justify="center" spacing={0}>
        <Grid item xs={12}> 
         
           <Nav/>

        </Grid>
      </Grid>
    </div>


    </AreaGrid>
  );
}
