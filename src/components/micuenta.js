import React from 'react';
import { Link, Redirect } from 'react-router-dom';
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
{   console.log('mi pedido en createData:', item)

if(item===undefined){
    return {
        id:' ',
        pedido: ' ',
        cliente: ' ', 
        sucursal: ' ',
        estado: ' ',
      }
}
else{
  return {
    id:idArray,
    pedido: item.pedido,
    cliente: item.cliente, 
    sucursal: item.sucursal,
    estado: item.estado,
  };}
}

  class MiCuenta extends React.Component{
    state = {
        data: [],
        pedido:' ',
        itemPed:' ',
        estado:' '

      };

      close=()=>localStorage.removeItem('Usuariologueado')

    CerrarSesion(){
        if(localStorage.getItem('Usuariologueado')!==null){
        return   <Link to='/'>  
            <Button style={{color:'#209c7d', marginLeft:'20px'}} onClick={this.close}>
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
            if(pedido.length===0){
                return {
                    id:' ',
                    pedido: ' ',
                    cliente: ' ', 
                    sucursal: ' ',
                    estado: ' ',
                  }
            }
            else{
            console.log('mi pedido en okPedido:', pedido);
            for( i=0; i<pedido.length;i++){
                array.push(createDataPedido(pedido[i],i))
            }
            this.setState({pedido: array});
            this.setState({itemPed: array[0].pedido});
        }

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
         
        pedidoPendiente(pedido, item){
            var suc, i, total=0;
           if(pedido.sucursal==='Guemes'){
            suc = 'Güemes 3331'
           }
           if(pedido.sucursal==='Rivadavia'){
            suc = 'Rivadavia 4035'
           }
           for(i=0;i<item.length;i++){
           console.log('item[0]', item[i].precio);
            total=total+ (item[i].precio* item[i].cantidad);
            console.log('total', total);
           }

           if(pedido.estado==='pendiente'){
           return (
           <div class="letra_ItemPerfil" >
               <p style={{textAlign:'center'}}>Codigo para retirar el pedido:</p>
               <p>{pedido.cliente}</p>
               <p style={{textAlign:'center'}}>Sucursal a retirar:</p>
               <p>{suc}</p>
               <p style={{textAlign:'center'}}>Total a pagar:</p>
               <p>${total}</p>
               
           </div>)}
           else{
               return (
                <div class="letra_ItemPerfil" >
                    <p >No posee pedidos pendientes</p>
                </div>)
           }
        }
        pedidoRetirado=()=> {
            console.log('estado function', this.state.estado)
            if(this.state.estado!==false){
                return <Link  to='/micuenta'>
                <Button size="small" onClick={this.Retirado} style={{float: 'right', marginTop: '12px', color:'#209c7d'}}>Pedido Retirado</Button>
                </Link>
            }}

        Retirado=()=>{
            console.log('estado en segunta funcion',this.state.estado)
            this.setState({estado: false})
            console.log('estado en segunta funcion 2',this.state.estado)

        }; 


    
    render(){
        let con=[];
        con = this.state.data;
        let pedi = this.state.pedido;
        let itemPed = this.state.itemPed;
        console.log('estado render', this.state.estado)

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
                                            <div>{this.pedidoPendiente(pedi[0], itemPed)} </div>
                               
                                            

                                             
                                        
                                           
                                        </div>
                                    </div>
                                    <Divider />
                                </div>
                            </div>
                            <div style ={{ textAlign:'right', position: 'absolute', bottom: 10, right: 10}}>
                                <Button>
                                    <Link to='/' style={{color:'#209c7d'}}>VOLVER AL INICIO</Link>
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