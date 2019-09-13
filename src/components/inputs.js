import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

  const useStyles = makeStyles(theme => ({
   /* container: {
      display: 'flex',
      flexWrap: 'wrap',
    },*/
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },

  }));
  
  export default function OutlinedTextFields() {
    const classes = useStyles();

  
    return (
      <form className={classes.container} noValidate autoComplete="off">
      <div class = "container">
      <div class = "row">
        <div class = "col-lg-4 col-md-4 col-sm-4 col-xs-6"></div>
        <div class = "col-lg-4 col-md-4 col-sm-4 col-xs-6" id= "imp">
        
        <br />
        <br />
        <h2>Log in</h2>
        
        <TextField
          id="outlined-email-input"
          label="Email"
          className={classes.textField}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
        />
      
     <TextField
          id="outlined-password-input"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
        />
    <br /><br /><br />
   
    <h2>Datos</h2>   
       <TextField
          id="outlined-full-width"
          //label="Nombre"
          className={classes.textField}
          placeholder="Nombre"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />

<TextField
          id="outlined-full-width"
          //label="Direccion"
          className={classes.textField}
          placeholder="Direccion"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />

<TextField
          id="outlined-full-width"
          //label="Telefono/Celular"
          className={classes.textField}
          placeholder="Telefono/Celular"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
       

        </div>
        </div>
        </div>
      </form>
    );
  }
