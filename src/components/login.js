import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import pastaController from '../controller/pastaController';
import {Link, Redirect} from 'react-router-dom';


class Login extends Component {
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
  handleSearch=(e)=>{
    let usuarioLogIn={
      mail:this.state.mail,
      password:this.state.password,
    }

  pastaController.logIn(usuarioLogIn,this.loginCorrecto.bind(this), this.usuarioMal.bind(this));
}
  SearchMail = (e)=>{
    this.setState({mail : e.target.value});
  }
  SearchPassword = (e)=>{
    this.setState({password : e.target.value});
  }
  
  usuarioMal(textoError){
    alert(textoError);
  }
  
  loginCorrecto(textoOk)
  {

    localStorage.setItem('Usuariologueado', this.state.mail);
    this.setState({logueado: false});
    //console.log("Tamaño del storage",Storage.length);

    alert(textoOk);

  }
  condicionarIngresar()
  {
    if (this.state.logueado)
    {
      return(
        <Button onClick={this.handleSearch.bind(this)} id="confirmar">
        Ingresar
      </Button>
      );
    }
    else
    {
      //console.log("entre al redirect",this.state.logueado)
      return(
        <Redirect to='/'/>
      ); 
    }
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div class='backLogin'>
            <div class = "container-fluid" >
                <div class = "row" id='foto_hist'>
    <div class = "col-lg-4 col-md-4 col-sm-4 col-xs-6" > </div>
  <div class = "col-lg-4 col-md-4 col-sm-4 col-xs-6" >


      </div></div></div>
      <div class = "container-fluid"  >

      <div class = "row" id='foto_hist'>
      <div class = "col-lg-4 col-md-4 col-sm-4 col-xs-6" > </div>
        <div class = "col-lg-4 col-md-4 col-sm-4 col-xs-6" style={{marginTop:'18%'}} >
      <div style={{backgroundColor:'white'}}>
      
       
            <DialogContent>
           {/* <img src= {logo1} alt = "logo" title = "logo" id="logo" style={{justifyContent:'center',width:'200px', borderRadius:5}}/>*/}
              
              <DialogContentText  id="outlined-dense" style={{fontSize:'22px'}}>
               Ingresar
               <br /> 
              </DialogContentText>
              
              <TextField
              id="outlined-email-input"
              label="Email"
              type="email"
              name="email"
              fullWidth
              required
              placeholder="Email"
              autoComplete="email"
              margin="normal"
              variant="outlined"
              value={this.state.mail}
              onChange={this.SearchMail.bind(this)}
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
              required
              value = {this.state.password}
              onChange={this.SearchPassword.bind(this)}
              InputLabelProps={{
                shrink: true,
              }}
            />
            </DialogContent>
            <DialogActions>
            <Link to='/'>
              <Button onClick={this.handleCloseLogIn} id="confirmar">
                Cancelar
              </Button>
              </Link>
              
              {this.condicionarIngresar()}
              
            </DialogActions>
          <br />
            <DialogContentText  class="reg_dialog" >
                ¿No tenes una cuenta? <br />
          Registrate y crea un nuevo usuario.
          <DialogActions>
          <Link to='/insertContacto'>
            <Button  id="registrarme" >
            Registrarme
          </Button>
          </Link>
          </DialogActions>
              </DialogContentText>

              </div>
              </div>
              </div>

      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
    );
  }
}
 
export default Login;