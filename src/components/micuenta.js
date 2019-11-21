import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import PastaController from '../controller/pastaController'
import TextField from '@material-ui/core/TextField';

function createData(item,idArray) 
{   
  return {
    id:idArray,
    _id: item._id, 
    nombre: item.nombre, 
    direccion: item.direccion,
    telefono :item.telefono,
    mail: item.mail,

  };
}

  class MiCuenta extends React.Component{
    state = {
        data: [],
      };

      close=()=>localStorage.removeItem('Usuariologueado')

    CerrarSesion(){
        if(localStorage.getItem('Usuariologueado')!==null){
        return   <Link to='/'>  
            <Button style={{color:'#209c7d'}} onClick={this.close}>
              Cerrar sesion
              </Button>
              </Link>; 
        }
        };
        okContacto(contacto){
            var i , array=[];
            for( i=0; i<contacto.length;i++){
                array.push(createData(contacto[i],i))
            }
            this.setState({data: array});
    

           // console.log('mi data:', this.state.data[0]);
        }

    
        componentDidMount()
        {
          //Leo los contactos de la API BD
          //let data= localStorage.getItem('Usuariologueado');
          console.log('mail del storage',localStorage.getItem('Usuariologueado'));
          let data={mail: localStorage.getItem('Usuariologueado')}
          console.log(data);
         PastaController.getContacto(data, this.okContacto.bind(this));
        }
    
    render(){
        let con=[];
        con = this.state.data;
        console.log('mi con', con);
        
       

        return(
            <div class='backPerfil' style={{width: window.innerWidth, height: window.innerHeight}}>
           
            {con.map(con =>
            
                <div class="table-content">
                    <div class="row-content">
                         <div class="box-content">
                         <div id="profile">
                            <div>
                                <h1 class='perfil'><strong>Bienvenido, {con.nombre}</strong></h1>
                            </div>
                            <div>
                            <h2 class="perfil">Mis datos: </h2>
                                    <p class="letra_perfil"> Direccion: {con.direccion}</p>
									<p class="letra_perfil"> Mail: {con.mail}</p>
                                    <p class="letra_perfil"> Telefono: {con.telefono}</p>
                       
                               
                               <Button> Modificar</Button> <br />
                                 <Button> Modificar</Button>
                            </div>
                            <br /><br />
                            <div class='pedidos'>
                                Pedido pendiente:

                            </div>
                            
                            
                            <div style ={{ textAlign:'right'}}>
                            <Button>
                            <Link to='/'>VOLVER AL INICIO</Link>
                            </Button>
                            {this.CerrarSesion()}
                            
                            </div>
                            </div>
                        </div>
                    </div>
           
           
         </div>
            )}
           
            
           
            </div>
       
         
            
        );
    }
    
    }
    export default MiCuenta;