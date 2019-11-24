import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
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
function createDataPedido(item,idArray) 
{   
  return {
    id:idArray,
    pedido: item.pedido, 
    

  };
}

  class MiCuenta extends React.Component{
    state = {
        data: [],
        pedido:[],
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
        okPedido(pedido){
            var i , array=[];
            for( i=0; i<pedido.length;i++){
                array.push(createDataPedido(pedido[i],i))
            }
            this.setState({pedido: array});
    

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
         PastaController.getPedido(data, this.okPedido.bind(this));
        }
    
    render(){
        let con=[];
        con = this.state.data;
        console.log('mi con', con);
        let prod=[];
        prod = this.state.pedido;
        console.log('mi pedido en mi cuenta:', localStorage.getItem('pedido'));
       

        return(
            <div class='backPerfil' style={{width: window.innerWidth, height: window.innerHeight}}>
           
            {con.map(con =>
            
                <div class="table-content">
                    <div class="row-content">
                         <div class="box-content">
                            <div id="profile">
                                <div>
                                    <h1 class='perfil'><strong>¡Bienvenido, {con.nombre}!</strong></h1>
                                </div>
                                <div>
                                    <h3 class="misDatos">Mis datos: </h3>
                                    <Divider />
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <p class="letra_perfil"> <strong>Mail:</strong> {con.mail}</p>
                                        </div>
                                    </div>
                                    <Divider />
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <p class="letra_perfil"> <strong>Direccion:</strong> {con.direccion} </p>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <Button size="small" style={{float: 'right', marginTop: '12px', color:'#209c7d'}}>Modificar</Button>
                                        </div>
                                    </div>
                                    <Divider />
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <p class="letra_perfil"> <strong>Telefono:</strong> {con.telefono}</p>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <Button size="small" style={{float: 'right', marginTop: '12px', color:'#209c7d'}}>Modificar</Button>
                                        </div>
                                    </div>
                                    <Divider />
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <p class="letra_perfil"> <strong>Pedido pendiente:</strong> </p>
                                        </div>
                                    </div>
                                    <Divider />
                                </div>
                            </div>
                            <div style ={{ textAlign:'right', position: 'absolute', bottom: 10, right: 10}}>
                                <Button>
                                    <Link to='/' style={{color:'#209c7d', marginRight:'20px'}}>VOLVER AL INICIO</Link>
                                </Button>
                                {this.CerrarSesion()}
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