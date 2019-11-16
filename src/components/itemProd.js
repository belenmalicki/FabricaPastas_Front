import React, { Component } from "react";
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import NumericInput from 'react-numeric-input';
import PastaController from '../controller/pastaController'
import Ravioles from './img/raviolesss.jpg';
import Canelones from './img/canelones.jpg';
import Cappeletti from './img/capeleti.jpg';
import Ñoqui from './img/gnoquis.jpg';
import Lasagna from './img/lasagna.jpg';
import Spaghetti from './img/spaguhetti.jpg';
import Tagliatelli from './img/tagliatelli.jpg';
import Sorrentinos from './img/sorrentinos.jpg';

/*return (
         <div id="productos" class = "container-fluid">       
           <h1 id="tituloPastas">Nuestras Pastas</h1>
           <br /><br />
            <div class = "container-fluid">
              <div class = "row">
                <div class = "col-lg-3 col-md-4 col-sm-4 col-xs-6" >
                <Ejemplo />
                </div>
              </div>
            </div>
          </div>

      );*/

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });

  function myFormatUnid(num) {
  return num + ' u';
  }


function createData(item,idArray) 
{   
  return {
    id:idArray,
    _id: item._id, 
    nombre: item.nombre, 
    tipo: item.tipo,
    precio :item.precio,
    descripcion:item.descripcion,
  };
}

export default class ItemProd extends Component{
    state = {
        data: [],
        open: false,
      };
      
    okBusqueda(pastas){
        var i ,array=[]
        //console.log('ejemplomap', pastas);
        for( i=0; i<pastas.length;i++){
            array.push(createData(pastas[i],i))
        }
        this.setState({data: array});


    }
    
    componentDidMount()
  {
    //Leo los contactos de la API BD
   PastaController.getProductos(this.okBusqueda.bind(this));
  }

    handleClickOpenSorrentinos= () => {
    this.setState({openSr: true});
    };
  
    handleCloseSorrentinos= () => {
      this.setState({openSr: false});
    };
    handleAgregar()
            {
                console.log("localStorage",localStorage.length);
                if(localStorage.getItem('Usuariologueado')!==null){
                    alert('Todo joya');
                }
                else{
                    alert('Para poder realizar un pedido, debe estar logueado');
                }
            };




    render(){
        let{prod}=[]
        prod=this.state.data;
   
        
        
        return(
            <div class="row">
                {prod.map(prod => 
                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div class="product-box">
                        <button class="bot" onClick={this.handleClickOpenSorrentinos} >
                            <img class="d-block w-100" id="bigger" src= {Sorrentinos} alt="Sorrentinos" /> 
                                <div class="card-body">
                                    <p class="card-text">{prod.nombre}<br /> <br />${prod.precio}</p>
                                </div>
                        </button>
                        <Dialog maxWidth class='dialog_prod' open={this.state.openSr} onClose={this.handleCloseSorrentinos} TransitionComponent={Transition} >
                            <AppBar id="appbarprod" className= 'appBar' style={{position: 'relative'}}>
                                <Toolbar>
                                    <IconButton edge="start" color="inherit" onClick={this.handleCloseSorrentinos} aria-label="close">
                                        <CloseIcon />
                                    </IconButton>

                                </Toolbar>
                            </AppBar>
                            <div class = "container">
                                <div class = "row">
                                    <div class = "col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                        <br />
                                        <img class="d-block w-75" src= {Sorrentinos} alt="Sorrentinos" />
                                        <p id="text"><br />
                                        {prod.descripcion}</p>
                                    </div>
                    
                                    <div class = "col-lg-6 col-md-6 col-sm-6 col-xs-6" >
                                        <br />
                                        <div id="tit-past">
                                            <h2>{prod.nombre}</h2>
                                            <h5>${prod.precio}</h5>
                                        </div>
                                        <div id="cant-past">
                        
                                            <p> <br />Cantidad:</p>
                                            <NumericInput mobile class="form-control" min={1} step={1} value={1} format={myFormatUnid}/>
                                        </div>
                                        <div class="container">
                                            <div class="btn-holder">
                                                <button id="carrito"  onClick={this.handleAgregar.bind(this)}>
                                                    Agregar al carrito
                                                </button>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </Dialog>
                    </div>
                </div>)}
            </div>
        );
    }
}