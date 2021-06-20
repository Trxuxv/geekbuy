import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {ContainerMain} from './styled';
import logo from '../../assets/logo.png';
import Api from '../../Api';
import { FcGoogle } from "react-icons/fc";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        GeekBuy
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn({onReceiveGoogle}) {
  
  const actionLoginGoogle = async () =>
    {
      let result = await Api.googleLogar();

      if (result)
      {
          onReceiveGoogle(result.user);
      }else
      {
        alert('Error');
      }
    }
  
  
  
  const classes = useStyles();

    

  return (
    <ContainerMain>
    <Container className="container-main" component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <div>
          <img src={logo} alt="Logo GeekBuy" width={70}></img>
              <h6>GeekBuy</h6>
          </div>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        
          <Button className="login-google"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onClick={actionLoginGoogle}
          >
            <FcGoogle className="icon-login-google" size={23}/> {' '}Fazer login com o Google
          </Button>

        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            placeholder="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            
            placeholder="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="btn-log-in"
          >
            Sign In
          </Button>
            <Grid className="sign-up-grid" container alignItems="center" justify="center">
              <Grid item>
                <Link className="sign-up-message" to="/signup" variant="body2">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
    </ContainerMain>
  );
}