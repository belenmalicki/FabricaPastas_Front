import React, { Component } from "react";
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import PastaController from '../controller/pastaController'
import { Button } from "@material-ui/core";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });


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
    img:item.img
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

        let aux = this.state.data[id];
        this.setState({openSr: true,prodSelec:aux});
    };
    handleCloseSorrentinos= () => {
        this.setState({openSr: false});
    };
    handleAgregar()
            {
                if(localStorage.getItem('Usuariologueado')===null){
                    alert('Para poder realizar un pedido, debe estar logueado');
                }

            };

    handleInputChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
        }
              

    tipoPasta(){
        
        let prod = this.state.prodSelec;
        if (prod!==null)
        {
            if (prod.tipo.length>1 && prod.unidad===true)
            {
                return(
                <div class = "container">
                    <div class = "row">
                        <div class = "col-lg-6 col-md-6 col-sm-6 col-xs-6">
                         <img class="d-block w-75" src= {prod.img} alt="Sorrentinos" style={{marginTop:'20px', marginBottom:'20px',marginLeft:'40px' }}/>
                            <p id="text">
                            {prod.descripcion}</p>
                        </div>
                        <div class = "col-lg-6 col-md-6 col-sm-6 col-xs-6" >
                            <div style={{marginLeft:'70px'}}>
                                <div class="tit-past">
                                    <h2>{prod.nombre}</h2>
                                    <h5>${prod.precio}</h5>
                                </div>
                                <div >
                                    <form onSubmit={this.handleSubmit} style={{borderRadius:'5px'}} >
                                        <label style={{fontFamily:'Quicksand', fontSize:'18px', marginTop:'20px'}}>
                                            Seleccione el sabor que prefiera :
                                            <select class="dropdown_letra" style={{fontFamily:'Quicksand', fontSize:'18px', marginTop:'20px', paddingLeft:'4px', paddingTop:2, paddingBottom: 2}} name={'tipe'}value={this.state.tipo} onChange={this.handleInputChange}  variant="outlined" >
                                                <option value={prod.tipo[0]} type="submit" > </option>
                                                <option value={prod.tipo[1]} type="submit" >{prod.tipo[1]}</option>
                                                <option value={prod.tipo[2]} type="submit" >{prod.tipo[2]}</option>
                                                <option value={prod.tipo[3]} type="submit" >{prod.tipo[0]}</option>
                                            </select>
                                        </label>
                                        <label class="cant-past">
                                            Cantidad:<br />
                                        <input
                                            style={{paddingLeft:'8px'}}
                                            name="cantidad"
                                            type="number"
                                            min={1}
                                            value={this.state.cantidad}
                                            onChange={this.handleInputChange} /> unid.
                                        </label>
                                    </form>
                                    <Button class="carritoct" type="submit" value="Submit" onClick={()=>this.agregarItem(prod)}>
                                        Agregar al carrito
                                    </Button>
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
                       
                            <img class="d-block w-75" src= {prod.img} alt="Sorrentinos" style={{marginTop:'20px', marginBottom:'20px' ,marginLeft:'40px' }}/>
                            <p id="text">
                            {prod.descripcion}</p>
                        </div>
                        <div class = "col-lg-6 col-md-6 col-sm-6 col-xs-6" >
                            <div class='box-content' style={{marginLeft:'70px'}}>
                                <div class="tit-past" >
                                    <h2>{prod.nombre}</h2>
                                    <h5>${prod.precio}</h5>
                                </div>
                                <div >
                                    <form onSubmit={this.handleSubmit}  style={{borderRadius:'5px'}}>
                                        <label style={{fontFamily:'Quicksand', fontSize:'18px', marginTop:'20px'}}>
                                            Seleccione el sabor que prefiera :
                                            <select class="dropdown_letra" style={{fontFamily:'Quicksand', fontSize:'18px',marginTop:'10px', paddingLeft:'4px', paddingTop:2, paddingBottom: 2}} label={'seleccione'} name={'tipe'} value={this.state.tipe} onChange={this.handleInputChange}  variant="outlined" >
                                                <option value={prod.tipo[0]} > </option>
                                                <option value={prod.tipo[1]} >{prod.tipo[1]}</option>
                                                <option value={prod.tipo[2]} >{prod.tipo[2]}</option>
                                                <option value={prod.tipo[3]} >{prod.tipo[0]}</option>
                                            </select>
                                        </label>
                                        <label class="cant-past">
                                            Cantidad:<br />
                                            <input
                                                style={{paddingLeft:'8px'}}
                                                name="cantidad"
                                                type="number"
                                                min={0.5}
                                                value={this.state.cantidad}
                                                onChange={this.handleInputChange}  /> kg.
                                        </label>
                                    </form>  
                      
                                    <Button class="carritoct" type="submit" value="Submit" onClick={()=>this.agregarItem(prod)}>
                                        Agregar al carrito
                                    </Button>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }    
        
        if(prod.tipo.length===1 && prod.unidad!==true )
        {
            return(
            <div class = "container">
                <div class = "row">
                    <div class = "col-lg-6 col-md-6 col-sm-6 col-xs-6">

                        <img class="d-block w-75" src= {prod.img} alt="Sorrentinos" style={{marginTop:'20px', marginBottom:'20px',marginLeft:'40px' }} />
                        <p id="text">{prod.descripcion}</p>  
                    </div>
                    <div class = "col-lg-6 col-md-6 col-sm-6 col-xs-6" >
                        <div style={{marginLeft:'70px'}}>
                            <div class="tit-past" >
                                <h2>{prod.nombre}</h2>
                                <h5>${prod.precio}</h5>
                            </div>
                            <div >
                                <form onSubmit={this.handleSubmit}  style={{borderRadius:'5px'}}>
                                    <label class="cant-past">
                                        Cantidad:<br />
                                        <input
                                            name="cantidad"
                                            style={{paddingLeft:'8px'}}
                                            type="number"
                                            min={0.5}
                                            value={this.state.cantidad}
                                            onChange={this.handleInputChange}  /> kg.
                                    </label>
                                </form>    
                                <Button class="carritost" type="submit" value="Submit" onClick={()=>this.agregarItem(prod)}>
                                    Agregar al carrito
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        }  
        if(prod.tipo.length===1 && prod.unidad===true )
        {
            return(
            <div class = "container">
                <div class = "row">
                    <div class = "col-lg-6 col-md-6 col-sm-6 col-xs-6">

                        <img class="d-block w-75" src= {prod.img} alt="Sorrentinos" style={{marginTop:'20px', marginBottom:'20px',marginLeft:'40px' }} />
                        <p id="text">{prod.descripcion}</p>  
                    </div>
                    <div class = "col-lg-6 col-md-6 col-sm-6 col-xs-6"  >
                        <div style={{marginLeft:'70px'}}>
                        <div class="tit-past" >
                            <h2>{prod.nombre}</h2>
                            <h5>${prod.precio}</h5>
                        </div>
                        <div >
                        <form onSubmit={this.handleSubmit}  style={{borderRadius:'5px'}}>
                            <label class="cant-past">
                                Cantidad:<br />
                                <input
                                    name="cantidad"
                                    style={{paddingLeft:'8px'}}
                                    type="number"
                                    min={1}
                                    value={this.state.cantidad}
                                    onChange={this.handleInputChange}  /> unid.
                            </label>
                        </form>    
                        <Button class="carritost" type="submit" value="Submit" onClick={()=>this.agregarItem(prod)}>
                            Agregar al carrito
                        </Button>
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
                            <img class="d-block w-100" id="bigger" src={prod.img} alt="Pasta" /> 
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