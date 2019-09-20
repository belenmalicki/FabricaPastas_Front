import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import logo1 from './logo10.png';

export default function FormDialog() {
  const [openLogOn, setOpenLogOn] = React.useState(false);
  const [openLogIn, setOpenLogIn] = React.useState(false);

  function handleClickOpenLogOn() {
    setOpenLogOn(true);
  }
  
  function handleClickOpenLogIn() {
    setOpenLogIn(true);
  }

  function handleCloseLogOn() {
    setOpenLogOn(false);
  }
  function handleCloseLogIn() {
    setOpenLogIn(false);
  }

  return (
    <div class="container-fluid">
    <div class="row">
      <div class="logo">
        <img src= {logo1} alt = "logo" title = "logo" id="logo"/>
      </div>
      <div class="col-12">
        <div class="nav justify-content-center">
        
        <Button id="boton"  >
          Inicio  
          </Button>
          <Button id="boton" >
        Nuesta Historia
          </Button>
          <Button id="boton" >
        Nuestros productos
          </Button>
          <Button id="boton" >
        Contacto
          </Button>
          <Button id="boton" onClick={handleClickOpenLogIn}>
          Ingresar
          </Button>
          <Dialog open={openLogIn} onClose={handleCloseLogIn} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title"><h2 id="form-dialog-title">Ingresar</h2></DialogTitle>
            <DialogContent>
              <DialogContentText id="outlined-dense">
                Ingresa a tu cuenta
              </DialogContentText>
              <TextField
              id="outlined-email-input"
              label="Email"
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="email"
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
          <br />
        <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              placeholder="Contraseña"
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseLogIn} id="confirmar">
                Cancelar
              </Button>
              <Button onClick={handleCloseLogIn} id="confirmar">
              Ingresar
              </Button>
            </DialogActions>

          </Dialog>

        
        <Button id="boton" onClick={handleClickOpenLogOn}>
            Registrarme
          </Button>
          <Dialog open={openLogOn} onClose={handleCloseLogOn} aria-labelledby="form-dialog-title2">
            <DialogTitle id="form-dialog-title2"><h2 id="form-dialog-title">Registrarme</h2></DialogTitle>
            <DialogContent>
              <DialogContentText id="outlined-dense">
                ¿No tenes una cuenta?
          Registrate y crea un nuevo usuario.
              </DialogContentText>

          <h2 id="form-dialog-title">Datos</h2>   
          <TextField
              id="outlined-dense"
              label="Nombre"
              placeholder="Nombre"
              fullWidth
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />

      <TextField
              id="outlined-dense"
              label="Direccion"
              placeholder="Direccion"
              fullWidth
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />

      <TextField
              id="outlined-dense"
              label="Telefono/Celular"
              placeholder="Telefono/Celular"
              fullWidth
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
              <TextField
              id="outlined-email-input"
              label ="Email"
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="email"
              margin="normal"
              variant="outlined"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />

        <TextField
              id="outlined-password-input"
              label="Password"
          fullWidth
              type="password"
              placeholder="Contraseña"
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseLogOn} id="confirmar">
                Cancelar
              </Button>
              <Button onClick={handleCloseLogOn} id="confirmar">
              Registrarme
              </Button>
            </DialogActions>
          </Dialog>
          <Button id="boton"  >
          <AddShoppingCartIcon>Carrito</AddShoppingCartIcon>
          </Button>
          </div>
      </div>
    </div>
    
    </div>
  );
}
/*<button type="button" class="btn btn-outline-light">
      <a class="nav-link" href="https://www.youtube.com/">Nuestra Historia</a>
      </button>*/