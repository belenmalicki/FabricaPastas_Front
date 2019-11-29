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
      telefono:'',
      logueado: true,
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
  if(usuario.nombre===''||usuario.direccion==='' ||usuario.mail==='' ||usuario.password==='' ||usuario.telefno===''){
    alert('Por favor, complete todos los campos')
  }
  else{

  pastaController.insertContacto(usuario,this.okUsuario.bind(this),this.errorUsuario.bind(this));

  this.setState({open: false})
  }
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
    this.setState({logueado: false});
    //alert("Te has registrado con exito");
    localStorage.setItem('Usuariologueado', this.state.mail);
    console.log('local storage en sign up', localStorage.getItem('Usuariologueado'));
    return ( <Redirect to='/exitoso' />)
  }

  errorUsuario(textoError)
  {
    alert("Error: " + textoError);
  }
  condicionarIngresar()
  {
    //console.log("estadologueado",this.state.logueado)
    if (this.state.logueado)
    {
      return(
        <Button onClick={this.handleSave.bind(this)} id="confirmar">
        Registrarme
      </Button>
      );
    }
    else
    {
      //console.log("entre al redirect",this.state.logueado)
      return(
        <Redirect to='/exitoso'/>
      ); 
    }
  }
  render() {
    return (
      <div class='backLogin' style={{width: window.innerWidth, height: window.innerHeight}}>
      <div class="table-content">
        <div class="row-content">
          <div class="box-content">
     
            <DialogContent >
                <DialogContentText  id="outlined-dense" style={{fontSize:'35px', marginBottom:'20px'}}>
                  Registrate
                </DialogContentText>

              
                <TextField
                    id="nombre"
                    label="Nombre"
                    placeholder="Nombre"
                    fullWidth
                    required
                    margin="normal"
                    variant="outlined"
                    style={{marginBottom:'20px'}}
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
                    style={{marginBottom:'20px'}}
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
                    style={{marginBottom:'20px'}}
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
                    style={{marginBottom:'20px'}}
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
                    label="Contraseña"
                    fullWidth
                    required
                    style={{marginBottom:'20px'}}
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
                    {this.condicionarIngresar()}
                    
                  </DialogActions>
            
       
              </div>
              </div>
              </div>
              </div>


    );
  }
}

export default Signup;