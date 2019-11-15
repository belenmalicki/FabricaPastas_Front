import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import PastaController from '../controller/pastaController'

function createData(item,idArray) 
{   
  return {
    id:idArray,
    _id: item._id, 
    nombre: item.nombre, 
    direccion: item.direccion,
    telefono :item.telefono,
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
            <div>
            <div style ={{backgroundColor:'white', textAlign:'center'}}> 
            {con.map(con =>
            <div style ={{justifyContent:'center'}}>
                <div class = "container-fluid">
                    <div class = "row" >
                        <div class = "col-lg-4 col-md-4 col-sm-4 col-xs-6" ></div> 
                        <div class = "col-lg-4 col-md-4 col-sm-4 col-xs-6" >
                            <div class='perfil'>
                                Bienvenido:  {con.nombre}
                            </div>
                            <div class='misDatos'style ={{ textAlign:'left'}}>
                                <br /><br />
                                Mis datos: <br />
                                Direccion: {con.direccion} <Button> Modificar</Button> <br />
                                Telefono: {con.telefono} <Button> Modificar</Button>
                            </div>
                            <br /><br />
                            <div class='pedidos'>
                                Pedido pendiente:

                            </div>
                            <br /><br />
                            <div style ={{ textAlign:'right'}}>
                            {this.CerrarSesion()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )}
           
            
           
            </div>
       
            </div>
        );
    }
    
    }
    export default MiCuenta;