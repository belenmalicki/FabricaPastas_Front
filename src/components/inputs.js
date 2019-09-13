import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

  const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    menu: {
      width: 200,
    },
  }));
  
  export default function OutlinedTextFields() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
      name: 'Cat in the Hat',
      age: '',
      multiline: 'Controlled',
      currency: 'EUR',
    });
  
    const handleChange = name => event => {
      setValues({ ...values, [name]: event.target.value });
    };
  
    return (
      <form className={classes.container} noValidate autoComplete="off">
      <div class = "container">
      <div class = "row">
        <div class = "col-lg-4 col-md-4 col-sm-4 col-xs-6"></div>
        <div class = "col-lg-4 col-md-4 col-sm-4 col-xs-6">
        
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
          label="Nombre"
          style={{ margin: 8 }}
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
          label="Direccion"
          style={{ margin: 8 }}
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
          label="Telefono/Celular"
          style={{ margin: 8 }}
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
 /*
 MAIL
 
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
        
 
 
 PASSWORD
     <TextField
          id="outlined-password-input"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
        />
 */