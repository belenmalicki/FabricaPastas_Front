import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import logo1 from './img/logo10.png';
import ScrollTo from 'react-scroll-into-view';
import pastaController from '../controller/pastaController'


export default class FormDialog extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      open: false,
      nombre: '',
      direccion:'',
      mail:'',
      password:'',
      telefono:''
    };
  }


  handleClickOpenLogOn = () => {
    this.setState({openLo: true});
  };
  
  handleClickOpenLogIn = () => {
    this.setState({openLi: true});
  };
//VER TEMA DE LOS OPEN 
  handleCloseLogOn = () => {
    this.setState({openLo: false});
    this.setState({openLi: false});
  };
  handleCloseLogIn = () =>  {
    this.setState({openLi: false});
  };
  handleClickOpenCarrito = () => {
    this.setState({openC: true});
  };
  handleCloseCarrito = () => {
    this.setState({opencr: false});
  }

  okUsuario()
  {
    alert("Te has registrado con exito");
  }

  errorUsuario(textoError)
  {
    alert("Error: " + textoError);
  }
  handleSave =(e) =>{
    let usuario = {
        nombre: this.state.nombre,
        direccion: this.state.direccion,
        mail:this.state.mail,
        password:this.state.password,
        telefono:this.state.telefono
    };
    pastaController.insertContacto(usuario,this.okUsuario.bind(this),this.errorUsuario.bind(this));
    this.setState({open: false})
  };
  onChangeNombre (e){
    
    this.setState({nombre : e.target.value});
  }
  onChangeMail = (e)=>{
    this.setState({mail : e.target.value});
  }
  onChangeDireccion = (e)=>{
    this.setState({direccion : e.target.value});
  }
  onChangePassword = (e)=>{
    this.setState({password : e.target.value});
  }
  onChangeTelefono = (e)=>{
    this.setState({telefono : e.target.value});
  }




render(){ 
  return (
    <div class="fixed-top" id="appbarprod">
    <div class="container-fluid">
    <div class="row">
      <div class="logo">
        <img src= {logo1} alt = "logo" title = "logo" id="logo"/>
      </div>
      <div class="col-12">
        <div class="nav">
        <ScrollTo
          selector={`#${'inicio'}`}>
         <Button id="boton" >
            Inicio
          </Button>
         </ScrollTo>

         <ScrollTo
            selector={`#${'nuestraHistoria'}`}>
           <Button id="boton" >
               Nuestra Historia
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

          <Button id="boton" onClick={this.handleClickOpenLogIn}>
          Ingresar
          </Button>
          <Dialog  fullWidth  open={this.state.openLi} onClose={this.handleCloseLogIn} >
            <DialogTitle  id="form-dialog-title"><h2 id="form-dialog-title" >Ingresar</h2></DialogTitle>
            <DialogContent>
              <DialogContentText  id="outlined-dense" >
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
              <Button onClick={this.handleCloseLogIn} id="confirmar">
                Cancelar
              </Button>
              <Button onClick={this.handleCloseLogIn} id="confirmar">
              Ingresar
              </Button>
            </DialogActions>
            
            <DialogContentText  class="reg_dialog" >
                ¿No tenes una cuenta? <br />
          Registrate y crea un nuevo usuario.
              </DialogContentText>
           
              <DialogActions>
            <Button   size="small" id="registrarme" onClick={this.handleClickOpenLogOn} >
            Registrarme
          </Button>
          </DialogActions>
          <Dialog open={this.state.openLo} onClose={this.handleCloseLogOn} >
            <DialogTitle > <h2 id="form-dialog-title" > Registrarme</h2>  </DialogTitle>
            <DialogContent>
              <DialogContentText id="outlined-dense">
                ¿No tenes una cuenta?
          Registrate y crea un nuevo usuario.
              </DialogContentText>

          <h2 id="form-dialog-title">Datos</h2>   
          <TextField
              id="nombre"
              label="Nombre"
              placeholder="Nombre"
              fullWidth
              margin="normal"
              variant="outlined"
              value ={this.state.nombre}
              onChange={this.onChangeNombre.bind(this)}
              InputLabelProps={{
                shrink: true,
              }}
            />

      <TextField
              id="direccion"
              label="Direccion"
              placeholder="Direccion"
              fullWidth
              margin="normal"
              variant="outlined"
              value ={this.state.direccion}
              onChange={this.onChangeDireccion.bind(this)}
              InputLabelProps={{
                shrink: true,
              }}
            />

      <TextField
              id="telefono"
              label="Telefono/Celular"
              placeholder="Telefono/Celular"
              fullWidth
              margin="normal"
              variant="outlined"
              value={this.state.telefono}
              onChange={this.onChangeTelefono.bind(this)}
              InputLabelProps={{
                shrink: true,
              }}
            />
              <TextField
              id="mail"
              label ="Email"
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="email"
              margin="normal"
              variant="outlined"
              value={this.state.mail}
              onChange={this.onChangeMail.bind(this)}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />

        <TextField
              id="password"
              label="Password"
          fullWidth
              type="password"
              placeholder="Contraseña"
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
              value = {this.state.password}
              onChange={this.onChangePassword.bind(this)}
              InputLabelProps={{
                shrink: true,
              }}
            />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleCloseLogOn} id="confirmar">
                Cancelar
              </Button>
              <Button onClick={this.handleSave} id="confirmar">
              Registrarme
              </Button>
            </DialogActions>
          </Dialog>
          </Dialog>

      
        
          <Button id="boton" onClick={this.handleClickOpenCarrito} >
          <AddShoppingCartIcon>Carrito</AddShoppingCartIcon>
          </Button>
          <Dialog maxWidth class='dialog_prod' open={this.state.openCr} onClose={this.handleCloseCarrito}>
          <DialogContentText id="outlined-dense">
             <h2>Productos:</h2>
              </DialogContentText>
        <div class = "container">
        <DialogActions>
              <Button onClick={this.handleCloseCarrito} id="confirmar">
                Cancelar
              </Button>
            </DialogActions>
        </div>

      </Dialog>
          </div>
      </div>
    </div>
    </div>
    </div>
  );}
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