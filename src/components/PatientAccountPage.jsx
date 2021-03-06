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
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import '../index.css';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="">
        Ternstone
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
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
    marginTop: theme.spacing(5),
  },
  submit: {
    margin: theme.spacing(4, 0, 2),
  },
}));

export default function PatientAccountPage() {
  
    const classes = useStyles();
  return (
     <div className="PaccountPage">
    
    <Container component="main"   maxWidth="xs">
      <CssBaseline />
        <Card className="caerd" variant="outlined">
      <CardContent>
      <div className={classes.paper}>  
        <Typography component="h1" className="fTitle" variant="h5">
          Create your Patient account
        </Typography>
           <Grid container justify="center">
            <Grid item>
              <Link href="\Login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>

        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                size="small"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                size="small"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
             <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="sname"
                name="sirName"
                variant="outlined"
                size="small"
                required
                fullWidth
                id="sirName"
                label="Sir Name"
                autoFocus
              />
            </Grid>
          
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                size="small"
                required
                fullWidth
                id="phone"
                label="Phone Number"
                name="phoneNo"
                autoComplete="phone"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                size="small"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                size="small"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive notifications.."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
             variant="outlined" color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
       
        </form>
    
      </div>
      
      <Box mt={5}>
        <Copyright />
      </Box>

          </CardContent>
    </Card>
    </Container>

    
 </div>

  );
}
