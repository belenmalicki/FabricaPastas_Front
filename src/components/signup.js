import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import pastaController from '../controller/pastaController';
import {Link, Redirect} from 'react-router-dom';
import logo1 from './img/logo10.png';

class Signup extends React.Component {
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

okUsuario()
  {
    alert("Te has registrado con exito");
    return  <Redirect  to="/"/>
  }

  errorUsuario(textoError)
  {
    alert("Error: " + textoError);
  }
  render() {
    return (
      <div class='backLogin'>
            <div class = "container-fluid" >
                <div class = "row" id='foto_hist'>
    <div class = "col-lg-4 col-md-4 col-sm-4 col-xs-6" > </div>
  <div class = "col-lg-4 col-md-4 col-sm-4 col-xs-6" >


      </div></div></div>
      <div class = "container-fluid"  >

      <div class = "row" id='foto_hist'>
      <div class = "col-lg-4 col-md-4 col-sm-4 col-xs-6" > </div>
        <div class = "col-lg-4 col-md-4 col-sm-4 col-xs-6" style={{marginTop:'12%'}} >
      <div style={{backgroundColor:'white'}}>
      
       
            <DialogContent>
            <DialogContentText  id="outlined-dense" style={{fontSize:'22px',}}>
            Registrate
            <br /> 
             </DialogContentText>

        
          <TextField
              id="nombre"
              label="Nombre"
              placeholder="Nombre"
              fullWidth
              required
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
              required
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
              required
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
              required
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
              required
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
            <Link to='/'>
              <Button onClick={this.handleCloseLogOn} id="confirmar">
                Cancelar
              </Button>
              </Link>
              <Button onClick={this.handleSave} id="confirmar">
              Registrarme
              </Button>
            </DialogActions>
       
       
              </div>
              </div>
              </div>
              </div>

    
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
    );
  }
}

export default Signup;