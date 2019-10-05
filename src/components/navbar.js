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
import ScrollTo from 'react-scroll-into-view';

export default function FormDialog() {
  const [openLogOn, setOpenLogOn] = React.useState(false);
  const [openLogIn, setOpenLogIn] = React.useState(false);
  const [openCr , setOpenCarrito] = React.useState(false);


  function handleClickOpenLogOn() {
    setOpenLogOn(true);
  }
  
  function handleClickOpenLogIn() {
    setOpenLogIn(true);
  }

  function handleCloseLogOn() {
    setOpenLogOn(false);
    setOpenLogIn(false);
  }
  function handleCloseLogIn() {
    setOpenLogIn(false);
  }
  function handleClickOpenCarrito() {
    setOpenCarrito(true);
  }
  function handleCloseCarrito() {
    setOpenCarrito(false);
  }

  return (
    <div class="container-fluid">
    <div class="row">
      <div class="logo">
        <img src= {logo1} alt = "logo" title = "logo" id="logo"/>
      </div>
      <div class="col-12">
        <div class="nav">
        {/*cambiar id boton por class, Y NO ESTA BOTON INICIO*/ }
        <ScrollTo
          selector={`#${'inicio'}`}>
         <Button id="boton" >
            Inicio
          </Button>
         </ScrollTo>

         <ScrollTo
            selector={`#${'nuestraHistoria'}`}>
           <Button id="boton" >
               Nuesta Historia
           </Button>
        </ScrollTo>

        <ScrollTo
          selector={`#${'productos'}`}>
          <Button id="boton" >
             Nuestros productos
          </Button>
        </ScrollTo>

        <ScrollTo
          selector={`#${'contactos'}`}>
          <Button id="boton" >
             Contacto
          </Button>
        </ScrollTo>

          <Button id="boton" onClick={handleClickOpenLogIn}>
          Ingresar
          </Button>
          <Dialog maxWidth class='dialog_prod' open={openLogIn} onClose={handleCloseLogIn} >
            <DialogTitle id="form-dialog-title"><h2 id="form-dialog-title" >Ingresar</h2></DialogTitle>
            <DialogContent>
              <DialogContentText id="outlined-dense" >
                Ingresa a tu cuenta
              </DialogContentText>
              <TextField
              id="outlined-email-input"
              label="Email"
              type="email"
              name="email"
              fullWidth
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
              <Button onClick={handleCloseLogIn} id="confirmar">
                Cancelar
              </Button>
              <Button onClick={handleCloseLogIn} id="confirmar">
              Ingresar
              </Button>
            </DialogActions>
            
            <DialogContentText  class="reg_dialog" >
                ¿No tenes una cuenta? <br />
          Registrate y crea un nuevo usuario.
              </DialogContentText>
           
           
            <Button   size="small" id="registrarme" onClick={handleClickOpenLogOn} >
            Registrarme
          </Button>

          <Dialog open={openLogOn} onClose={handleCloseLogOn} >
            <DialogTitle >Registrarme</DialogTitle>
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
              <Button onClick={handleCloseLogOn}  id="confirmar">
              Registrarme
              </Button>
            </DialogActions>
          </Dialog>
          </Dialog>

      
        
          <Button id="boton" onClick={handleClickOpenCarrito} >
          <AddShoppingCartIcon>Carrito</AddShoppingCartIcon>
          </Button>
          <Dialog maxWidth class='dialog_prod' open={openCr} onClose={handleCloseCarrito}>
          <DialogContentText id="outlined-dense">
             <h2>Productos:</h2>
              </DialogContentText>
        <div class = "container">
        <DialogActions>
              <Button onClick={handleCloseCarrito} id="confirmar">
                Cancelar
              </Button>
            </DialogActions>
        </div>

      </Dialog>
          </div>
      </div>
    </div>
    
    </div>
  );
}
/*<button type="button" class="btn btn-outline-light">
      <a class="nav-link" href="https://www.youtube.com/">Nuestra Historia</a>
      </button>*/


      /* 
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
      */