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
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Button } from "@material-ui/core";


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
    unidad: item.unidad,
  };
}

export default class ItemProd extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            data: [],
            open: false,
            cart: [],
            cantidad: 1,
            tipe:' ',
            prodSelec: null,
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        }


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
    handleClickOpenSorrentinos= (id) => {
        console.log('mi id es:', id)
        let aux = this.state.data[id];
        console.log('prod selec:', aux)
    this.setState({openSr: true,prodSelec:aux});
    };
    handleCloseSorrentinos= () => {
      this.setState({openSr: false});
    };
    handleAgregar()
            {
                console.log("localStorage",localStorage.length);
                if(localStorage.getItem('Usuariologueado')===null){
                    alert('Para poder realizar un pedido, debe estar logueado');
                }

            };

    handleInputChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
        }
              

    tipoPasta(){
        
        let prod = this.state.prodSelec;
        console.log("tipopastaPROD",this.state.prodSelec)
        if (prod!==null)
        {
            if (prod.tipo.length>1 && prod.unidad===true)
            {
                return(
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
                        <div >
                        <form onSubmit={this.handleSubmit} style={{borderRadius:'5px'}} >
                            <label style={{fontFamily:'Quicksand', fontSize:'18px'}}>
                                Seleccione el sabor que prefiera :
                                <select class="dropdown_letra" style={{fontFamily:'Quicksand', fontSize:'18px'}} name={'tipe'}value={this.state.tipo} onChange={this.handleInputChange}  variant="outlined" >
                                    <option value={prod.tipo[0]} type="submit" >{prod.tipo[0]}</option>
                                    <option value={prod.tipo[1]} type="submit" >{prod.tipo[1]}</option>
                                    <option value={prod.tipo[2]} type="submit" >{prod.tipo[2]}</option>
                                </select>
                            </label>
                            <label style={{fontFamily:'Quicksand', fontSize:'18px',borderRadius:'5px'}}>
                                Cantidad:<br />
                            <input
                                name="cantidad"
                                type="number"
                                min={1}
                                value={this.state.cantidad}
                                onChange={this.handleInputChange} /> unid.
                            </label>
                        </form>
                        <Button class="carrito" type="submit" value="Submit" onClick={()=>this.agregarItem(prod)}>
                            Agregar al carrito
                        </Button>
                    </div>
                    <div class="cant-past">
                    {/*  <NumericInput mobile class="form-control"  min={1} step={1} value={this.state.cantidad} onClick={this.updateInput} format={myFormatUnid}/>*/}

                    </div>
                    <div class="container">
                        <div class="btn-holder">
                            {/*this.agregarCarrito(prod)*/}
                            {/*
                                <button id="carrito"  onClick={this.handleAgregar.bind(this)}>
                                    Agregar al carrito
                                </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
                )
            }
            if(prod.tipo.length>1 && prod.unidad!==true)
            {
                return(
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
                        <div >
                        <form onSubmit={this.handleSubmit}  style={{borderRadius:'5px'}}>
                            <label style={{fontFamily:'Quicksand', fontSize:'18px'}}>
                                Seleccione el sabor que prefiera :
                                <select class="dropdown_letra" style={{fontFamily:'Quicksand', fontSize:'18px'}} name={'tipe'} value={this.state.tipe} onChange={this.handleInputChange}  variant="outlined" >
                                    <option value={prod.tipo[0]} >{prod.tipo[0]}</option>
                                    <option value={prod.tipo[1]} >{prod.tipo[1]}</option>
                                    <option value={prod.tipo[2]} >{prod.tipo[2]}</option>
                                </select>
                            </label>
                            <label class="cant-past">
                                Cantidad:<br />
                                <input
                                    name="cantidad"
                                    type="number"
                                    min={0.5}
                                    value={this.state.cantidad}
                                    onChange={this.handleInputChange}  /> kg.
                            </label>
                        </form>    
                        <Button class="carrito" type="submit" value="Submit" onClick={()=>this.agregarItem(prod)}>
                            Agregar al carrito
                        </Button>
                    </div>
                    <div class="cant-past">
                        {/*  <NumericInput mobile class="form-control"  min={1} step={1} value={this.state.cantidad} onClick={this.updateInput} format={myFormatUnid}/>*/}

                    </div>
                    <div class="container">
                        <div class="btn-holder">
                                {/*this.agregarCarrito(prod)*/}
                                {/*
                                    <button id="carrito"  onClick={this.handleAgregar.bind(this)}>
                                        Agregar al carrito
                                    </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }    
        
        if(prod.tipo.length===1 )
        {
            return(
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
                    <div >
                    <form onSubmit={this.handleSubmit}  style={{borderRadius:'5px'}}>
                        <label class="cant-past">
                            Cantidad:<br />
                            <input
                                name="cantidad"
                                type="number"
                                min={0.5}
                                value={this.state.cantidad}
                                onChange={this.handleInputChange}  /> kg.
                        </label>
                    </form>    
                    <Button class="carrito" type="submit" value="Submit" onClick={()=>this.agregarItem(prod)}>
                            Agregar al carrito
                        </Button>
                </div>
                <div class="cant-past">
                    {/*  <NumericInput mobile class="form-control"  min={1} step={1} value={this.state.cantidad} onClick={this.updateInput} format={myFormatUnid}/>*/}

                </div>
                <div class="container">
                    <div class="btn-holder">
                            {/*this.agregarCarrito(prod)*/}
                            {/*
                                <button id="carrito"  onClick={this.handleAgregar.bind(this)}>
                                    Agregar al carrito
                                </button> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
        }    
    }
    }

    agregarItem= (prod) =>{
            if(localStorage.getItem('Usuariologueado')!==null){
            alert('Producto agregado');
            var cartLS = JSON.parse(localStorage.getItem('carrito'));
            if (cartLS===null)
            {
                var cart= [];
                var Item = function(nombre, precio, cantidad, tipo){
                this.nombre=nombre;
                this.precio =precio;
                this.cantidad=cantidad;
                this.tipo =tipo;
                };
                console.log('Your input value agregar item cant agregar: ' + this.state.cantidad)
                console.log('Your input value agregar item tipe sagregar: ' + this.state.tipe)
                cart.push(new Item(prod.nombre, prod.precio, this.state.cantidad ,this.state.tipe))
                localStorage.setItem('carrito', JSON.stringify(cart));
            }
            else
            {
                var Item = function(nombre, precio, cantidad, tipo){
                    this.nombre=nombre;
                    this.precio =precio;
                    this.cantidad=cantidad;
                    this.tipo =tipo;
                    };
                    console.log('Your input value agregar item cant agregar: ' + this.state.cantidad)
                    console.log('Your input value agregar item tipe sagregar: ' + this.state.tipe)
                    cartLS.push(new Item(prod.nombre, prod.precio, this.state.cantidad ,this.state.tipe))
                    localStorage.setItem('carrito', JSON.stringify(cartLS));
            }
            //cart.push(new Item('Canelones',60,2,'verdura'));
           // cart.push(new Item('Ravioles',220,4,'jamon y queso'));
            console.log('mi carrito es:', cart);
            
            console.log('mi carrito es ls:', localStorage.getItem('carrito'));
        } 
        else{
            alert('Para poder realizar un pedido, debe estar logueado');
        }
};
        

    agregarCarrito(prod){
            //var inputVal = document.getElementById("inputValue").value;
            //console.log('cantidad es:', inputVal);
            return <Button class="carrito" type="submit" value="Submit" onClick={()=>this.agregarItem(prod)}>
                Agregar al carrito
            </Button>

        }


            


    render(){
        let prods=this.state.data;
        
        return(
            <div class="row">
                {prods.map(prod => 
                <div key={prod.id} class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <div class="product-box">
                    
                        <Button class="bot" onClick={()=>this.handleClickOpenSorrentinos(prod.id)} >
                            <img class="d-block w-100" id="bigger" src= {Sorrentinos} alt="Sorrentinos" /> 
                                <div class="card-body">
                                    <p class="card-text">{prod.nombre}</p> 
                                    <p class="card-text">${prod.precio}</p>
                                </div>
                        </Button>
                        <Dialog key={prod.id} maxWidth class='dialog_prod' open={this.state.openSr} onClose={this.handleCloseSorrentinos} TransitionComponent={Transition} >
                            <AppBar id="appbarprod" className= 'appBar' style={{position: 'relative'}}>
                                <Toolbar>
                                    <IconButton edge="start" color="inherit" onClick={this.handleCloseSorrentinos} aria-label="close">
                                        <CloseIcon />
                                    </IconButton>

                                </Toolbar>
                            </AppBar>
                            {this.tipoPasta()}

                                       
                                      
                        </Dialog>
                    </div>
                </div>)}
            </div>
        );
    }
}