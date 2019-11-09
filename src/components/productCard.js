import React, {Component, Button} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import NumericInput from 'react-numeric-input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ImageZoom from "react-medium-image-zoom";
import ravioles from './img/raviolesss.jpg';
import canelones from './img/canelones.jpg';
import cappeletti from './img/capeleti.jpg';
import gnoqui from './img/gnoquis.jpg';
import lasagna from './img/lasagna.jpg';
import spaghetti from './img/spaguhetti.jpg';
import tagliatelli from './img/tagliatelli.jpg';
import sorrentinos from './img/sorrentinos.jpg';
import PastaController from '../controller/pastaController'
/*
okBusqueda(newData)
  {
    var i,newArray = [];
    for (i = 0; i < newData.length; i++) {
      newArray.push(createData(newData[i],i));
    }
    this.setState({data: newArray});
    //console.log("data");
    //console.log(this.state.data);
  }
  componentDidMount()
  {
    //Leo los contactos de la API BD
    ApiController.getContactos(this.okBusqueda.bind(this));
  }
*/
function createData(item,idArray) 
{ console.log(item.nombre);
  return { 
    id : idArray, 
    _id: item._id, 
    nombre: item.nombre, 
    tipo: item.tipo,
    precio :item.precio,
  };
 
}

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });
  
  function myFormat(num) {
    return num + ' kg';
}

  function myFormatUnid(num) {
  return num + ' u';

}/*
const [state, setState] = React.useState({
  number: '',
  name: 'hai',
});
*/

/*
const handleChange = name => event => {
  setState({
    ...state,
    [name]: event.target.value,
  });
};
*/

class Galeria extends Component{

  constructor(props)
  {
    super(props);
    this.state = {
      open: false,
      nombre: createData.nombre,
    };
  }

   handleClickOpenSorrentinos= () => {
    this.setState({openSr: true});
    
    };
  
    handleCloseSorrentinos= () => {
      this.setState({openSr: false});
    };

    handleClickOpenTagliatellis= () => {
      this.setState({openTg: true});
    };
  
      handleCloseTagliatellis= () => {
        this.setState({openTg: false});
    };

      handleClickOpenLasagna= () => {
        this.setState({openLn: true});
    };
  
      handleCloseLasagna= () => {
        this.setState({openLn: false});
    };

      handleClickOpenRavioles= () => {
        this.setState({openRv: true});
    };
  
      handleCloseRavioles= () => {
        this.setState({openRv: false});
    };
      handleClickOpenCanelones= () => {
        this.setState({openCn: true});
    };
  
      handleCloseCanelones= () => {
        this.setState({openCn: false});
    };

      handleClickOpenCappeleti= () => {
        this.setState({openCp: true});
    };
  
      handleCloseCappeleti= () => {
        this.setState({openCp: false});
    };

      handleClickOpenGnoqui= () => {
        this.setState({openGn: true});
    };
  
      handleCloseGnoqui= () => {
        this.setState({openGn: false});
    };


      handleClickOpenSpaguetti= () => {
        this.setState({openSp: true});
    };
  
      handleCloseSpaguetti= () => {
        this.setState({openSp: false});
    };
    

    okBusqueda(newData)
  {
    var i,newArray = [];
    for (i = 0; i <1; i++) {
      newArray.push(createData(newData[i],i));
    }
    this.setState({data: newArray});
    console.log("data");
    console.log(this.state.data);
    
  };
  handleAgregar()
  {
    console.log("localStorage",localStorage.length);
    if(localStorage.getItem('Usuariologueado')!==null){
      alert('Todo joya');
    }
    else{
      alert('Logueate pa');
    }
  }


    componentDidMount()
  {
    //Leo los contactos de la API BD
   PastaController.getProductos(this.okBusqueda.bind(this));
  }
  
    render(){ 
     // var data = createData();
     console.log("localStorage", localStorage.getItem('Usuariologueado'));
      return (
         <div id="productos" class = "container-fluid">       
           <h1 id="tituloPastas">Nuestras Pastas</h1>
           <br /><br />
        <div class = "container-fluid">
            <div class = "row">
                <div class = "col-lg-3 col-md-4 col-sm-4 col-xs-6" >
                <button class="bot">
                <img class="d-block w-100" id="bigger" onClick={this.handleClickOpenSorrentinos} src= {sorrentinos} alt="Sorrentinos" /> 
                <div class="card-body">
                    <p class="card-text">{createData.prototype.nombre}<br /> $340</p>
                
                </div>
                </button>
                <Dialog maxWidth class='dialog_prod' open={this.state.openSr} onClose={this.handleCloseSorrentinos} 
                TransitionComponent={Transition} >
        <AppBar id="appbarprod" className= 'appBar' style={{position: 'relative'}}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={this.handleCloseSorrentinos} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className='title'>
              
            </Typography>
           
          </Toolbar>
        </AppBar>
        <div class = "container">
          <div class = "row">
            <div class = "col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <br />
            <img class="d-block w-75" src= {sorrentinos} alt="Sorrentinos" />
            <p id="text"><br />La venta es por caja.<br />
            La compra minima es de una caja.<br />
            Con 1 caja comen 2 personas.<br />
            Cantidad aproximada, todo depende del apetito de los comensales!</p>
            </div>
           
            <div class = "col-lg-6 col-md-6 col-sm-6 col-xs-6" >
            <br />
            <div id="tit-past">
            <h2>Sorrentinos</h2>
            <h5>$340</h5>
            </div>
            <div id="cant-past">
           
            <p> <br />Cantidad:</p>
            <NumericInput mobile class="form-control" min={1} step={1} value={1} format={myFormatUnid}
          />
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

                <br />
                <br />
                <button class="bot">
                <img class="d-block w-100" id="bigger" onClick={this.handleClickOpenTagliatellis} src= {tagliatelli} alt="Tagliatelli" />
                <div class="card-body">
                    <p class="card-text">Tagliatelli<br />$280</p>
                </div>
                </button>
      <Dialog  maxWidth  class='dialog_prod' open={this.state.openTg} onClick={this.handleCloseTagliatellis} TransitionComponent={Transition}
              >
        <AppBar id="appbarprod" className='appBar' style={{position: 'relative'}}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={this.handleCloseTagliatellis} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className='title'>
              
            </Typography>
           
          </Toolbar>
        </AppBar>
        <div class = "container">
          <div class = "row">
            <div class = "col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <br />
            <img class="d-block w-75" src= {tagliatelli} alt="Tagliatelli" />
            <p id="text"><br />La venta es por kilo.<br />
            La compra minima es de medio kilo (0.5 kg)<br />
            Con 1 kg comen 2 personas.<br />
            Cantidad aproximada, todo depende del apetito de los comensales!</p>
            </div>
            <div class = "col-lg-6 col-md-6 col-sm-6 col-xs-6" >
            <br />
            <div id="tit-past">
            <h2>Tagliatelli</h2>
            <h5>$280</h5>
            </div>
            <div id="cant-past">
           
            <p > <br />Cantidad:</p>
            <NumericInput mobile class="form-control" min={0.5} step={0.5} precision={1} value={0.5} format={myFormat}
          />
            </div>
            <div class="container">
        <div class="btn-holder">
         <button id="carrito">
         Agregar al carrito
          </button>
        </div>
           </div>


            </div>
           </div>
        </div>

      </Dialog>
    </div>
                <div class = "col-lg-3 col-md-4 col-sm-4 col-xs-6">
                <button class="bot">
                <img class="d-block w-100" id="bigger" onClick={this.handleClickOpenLasagna} src= {lasagna} alt="Lasagna" />
                <div class="card-body">
                    <p class="card-text">Lasagna<br />$440</p>
                </div>
                </button>
                <Dialog  maxWidth class='dialog_prod'  open={this.state.openLn} onClick={this.handleCloseLasagna} TransitionComponent={Transition}>
        <AppBar id="appbarprod" className='appbar' style={{position: 'relative'}}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={this.handleCloseLasagna} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className=   'title'>
              
            </Typography>
           
          </Toolbar>
        </AppBar>
        <div class = "container">
          <div class = "row">
            <div class = "col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <br />
            <img class="d-block w-75" src= {lasagna} alt="Lasagna" />

            <p id="text"><br />La venta es por kilo.<br />
            La compra minima es de medio kilo (0.5 kg)<br />
            Con 1 kg comen 2 personas.<br />
            Cantidad aproximada, todo depende del apetito de los comensales!</p>
            </div>
           

            <div class = "col-lg-6 col-md-6 col-sm-6 col-xs-6" >
            <br />
            <div id="tit-past">
            <h2>Lasagna</h2>
            <h5>$440</h5>
            </div>
            <div id="cant-past">
            <p><br />Seleccione el sabor que prefiera:</p>
              <FormControl variant="standard" className=  'formControl' margin="dense" >
                <Select
                  id="dropdown_letra"
                  native
                  value={this.state.number}
                  //onChange={this.handleChange('number')}
                  variant="outlined"
         
          
                >
                    <option value={0}>Ricota, jamón y queso</option>
                    <option value={1} >Ricota y espinaca</option>
                    <option value={2} >Carne</option>
                </Select>
              </FormControl>           
            <p><br /> <br />Cantidad:</p>
            <NumericInput mobile class="form-control" min={0.5} step={0.5} precision={1} value={0.5} format={myFormat}
           />
            </div>

            <div class="container">
        <div class="btn-holder">
         <button id="carrito">
         Agregar al carrito
          </button>
        </div>
           </div>
            </div>
           </div>
        </div>

      </Dialog>
                <br />
                <br />
                <button class="bot">
                <img class="d-block w-100" id="bigger" onClick={this.handleClickOpenRavioles} src= {ravioles} alt="Ravioles" /> 
                <div class="card-body">
                    <p class="card-text">Ravioles<br />$230</p>
                </div>
                </button>

                <Dialog  maxWidth class='dialog_prod' open={this.state.openRv}  onClick={this.handleCloseRavioles} TransitionComponent={Transition}>
        <AppBar id="appbarprod" className=   'appbar' style={{position: 'relative'}}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={this.handleCloseRavioles} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className=   'title'>
              
            </Typography>
           
          </Toolbar>
        </AppBar>
        <div class = "container">
          <div class = "row">
            <div class = "col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <br />
            <img class="d-block w-75"  src= {ravioles} alt="Ravioles" />
            <p id="text"><br />La venta es por caja.<br />
            La compra minima es 1 caja.<br />
            Con 2 cajas comen 3 personas.<br />
            Cantidad aproximada, todo depende del apetito de los comensales!</p>
            </div>
           

            <div class = "col-lg-6 col-md-6 col-sm-6 col-xs-6" >
            <br />
            <div id="tit-past">
            <h2>Ravioles</h2>
            <h5>$230</h5>
            </div>
            <div id="cant-past">
            <p><br />Seleccione el sabor que prefiera:</p>
              <FormControl variant="standard" className=  'formControl' margin="dense" >
                <Select
                  native
                  value={this.state.number}
                  //onChange={handleChange('number')}
                  variant="outlined"
                  id="dropdown_letra"
          
                >
                    <option value={0}>Ricota y jamón</option>
                    <option value={1} >Pollo y espinaca</option>
                    <option value={2} >Cuatro quesos</option>
                </Select>
              </FormControl>
              <br /> <br />
            <p>Cantidad:</p>
            <NumericInput mobile class="form-control" min={1} step={1} value={1} format={myFormatUnid}
          />
            </div>
            <div class="container">
        <div class="btn-holder">
         <button id="carrito">
         Agregar al carrito
          </button>
        </div>
           </div>


            </div>
           </div>
        </div>

      </Dialog>




               </div>
                <br />
                <br />
                <div class = "col-lg-3 col-md-4 col-sm-4 col-xs-6">
                <button class="bot">
                <img class="d-block w-100" id="bigger" onClick={this.handleClickOpenCanelones}  src= {canelones} alt="Canelones" /> 
                <div class="card-body">
                    <p class="card-text">Canelones<br />$60</p>
                </div>
                </button>
                <Dialog  maxWidth class='dialog_prod' open={this.state.openCn} onClick={this.handleCloseCanelones} TransitionComponent={Transition}>
        <AppBar id="appbarprod" className= 'appbar' style={{position: 'relative'}}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={this.handleCloseCanelones} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className=   'title'>
              
            </Typography>
           
          </Toolbar>
        </AppBar>
        <div class = "container">
          <div class = "row">
            <div class = "col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <br />
            <img class="d-block w-75" src= {canelones} alt="Canelones" />
            <p id="text"><br />La venta es por unidad.<br />
            La compra minima es 1 unidad.<br />
            Con 2 unidades come 1 persona.<br />
            Cantidad aproximada, todo depende del apetito de los comensales!</p>
            </div>
            <div class = "col-lg-6 col-md-6 col-sm-6 col-xs-6" >
            <br />
            <div id="tit-past">
            <h2>Canelones</h2>
            <h5>$60</h5>
            </div>
            <div id="cant-past">
            <p><br />Seleccione el sabor que prefiera:</p>
              <FormControl variant="standard" className= 'formControl' margin="dense" >
                <Select
                  native
                  value={this.state.number}
                  //onChange={handleChange('number')}
                  variant="outlined"
                  id="dropdown_letra"
          
                >
                    <option value={0} >Ricota, jamón y queso</option>
                    <option value={1} >Ricota y nuez</option>
                    <option value={2}>Pollo y espinaca</option>
                </Select>
              </FormControl>
              <br /> <br />
            <p>Cantidad:</p>
            <NumericInput mobile class="form-control" min={1} step={1} value={1} format={myFormatUnid}
          />
            </div>
            <div class="container">
        <div class="btn-holder">
         <button id="carrito">
         Agregar al carrito
          </button>
        </div>
           </div>


            </div>
           </div>
        </div>

      </Dialog>


                <br />
                <br />
                <button class="bot">
                <img class="d-block w-100" id="bigger" onClick={this.handleClickOpenCappeleti} src= {cappeletti} alt="Cappeletis" />
                <div class="card-body">
                    <p class="card-text">Cappeleti<br />$220</p>
                </div>
                </button>
                <Dialog  maxWidth class='dialog_prod' open={this.state.openCp}  onClick={this.handleCloseCappeleti} TransitionComponent={Transition}>
        <AppBar id="appbarprod" className= 'appbar' style={{position: 'relative'}}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={this.handleCloseCappeleti} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className=   'title'>
              
            </Typography>
           
          </Toolbar>
        </AppBar>
        <div class = "container">
          <div class = "row">
            <div class = "col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <br />
            <img class="d-block w-100" src= {cappeletti} alt="Cappelettis" />
            <p id="text"><br />La venta es por caja.<br />
            La compra minima es 1 caja.<br />
            Con 2 cajas comen 3 personas.<br />
            Cantidad aproximada, todo depende del apetito de los comensales!</p>
            </div>
           

            <div class = "col-lg-6 col-md-6 col-sm-6 col-xs-6" >
            <br />
            <div id="tit-past">
            <h2>Cappeleti</h2>
            <h5>$220</h5>
         
            </div>
            <div id="cant-past" >
            <p><br />Seleccione el sabor que prefiera:</p>
              <FormControl variant="standard" className=  'formControl' margin="dense" >
                <Select
                  native
                  value={this.state.number}
                  //onChange={handleChange('number')}
                  variant="outlined"
                  id="dropdown_letra"
          
                >
                    <option value={0} >Jamon y queso</option>
                    <option value={1} >Ricota y espinaca</option>
                    <option value={2}>Cuatro quesos</option>
                </Select>
              </FormControl>
              <br /> <br />
            <p>Cantidad:</p>
            <NumericInput mobile class="form-control" min={1} step={1} totalWidth={240} totalHeight={5} value={1} format={myFormatUnid}
          />
            </div>
            <div class="container">
        <div class="btn-holder">
         <button id="carrito">
         Agregar al carrito
          </button>
        </div>
           </div>


            </div>
           </div>
        </div>

      </Dialog>

                </div>
                <br />
                <br />
                <div class = "col-lg-3 col-md-4 col-sm-4 col-xs-6">
                <button class="bot">
                <img class="d-block w-100" id="bigger" onClick={this.handleClickOpenGnoqui} src= {gnoqui} alt="Ñoquis" /> 
                <div class="card-body">
                    <p class="card-text">Ñoquis<br/> $250</p>
                </div></button>
                <Dialog  maxWidth class='dialog_prod' open={this.state.openGn} onClick={this.handleCloseGnoqui} TransitionComponent={Transition}>
        <AppBar id="appbarprod" className= 'appbar' style={{position: 'relative'}}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={this.handleCloseGnoqui} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className=   'title'>
              
            </Typography>
           
          </Toolbar>
        </AppBar>
        <div class = "container">
          <div class = "row">
            <div class = "col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <br />
            <img class="d-block w-75" src= {gnoqui} alt="Ñoquis" />
            <p id="text"><br />La venta es por kilo.<br />
            La compra minima es de medio kilo (0.5 kg)<br />
            Con 1 kg comen 3 personas.<br />
            Cantidad aproximada, todo depende del apetito de los comensales!</p>
            
            </div>
           

            <div class = "col-lg-6 col-md-6 col-sm-6 col-xs-6" >
            <br />
            <div id="tit-past">
            <h2>Ñoquis</h2>
            <h5>$250</h5>
            </div>
            <div id="cant-past">
            <p><br />Seleccione el sabor que prefiera:</p>
              <FormControl variant="standard" className=  'formControl' margin="dense" >
                <Select
                  native
                  value={this.state.number}
                 // onChange={handleChange('number')}
                  variant="outlined"
                  id="dropdown_letra"
          
                >
                    <option value={0} >Papa</option>
                    <option value={1} >Espinaca</option>
                </Select>
              </FormControl>
              <br /> <br />
            <p>Cantidad:</p>
            <NumericInput mobile class="form-control" min={0.5} step={0.5} precision={1} value={0.5} format={myFormat}
          />
       </div>
            <div class="container">
        <div class="btn-holder">
         <button id="carrito">
         Agregar al carrito
          </button>
        </div>
           </div>


            </div>
           </div>
        </div>

      </Dialog>
                <br />
                <br />
                




                <button class="bot">
                <img class="d-block w-100" id="bigger" onClick={this.handleClickOpenSpaguetti} src= {spaghetti} alt="Spaghetti" />
                <div class="card-body">
                    <p class="card-text">Spaghetti<br />$210</p>
                </div>
                </button>
                <Dialog  maxWidth class='dialog_prod' open={this.state.openSp} onClick={this.handleCloseSpaguetti} TransitionComponent={Transition}>
        <AppBar id="appbarprod" className=  'appbar' style={{position: 'relative'}}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={this.handleCloseSpaguetti} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className=   'title'>
              
            </Typography>
           
          </Toolbar>
        </AppBar>
        <div class = "container">
          <div class = "row">
            <div class = "col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <br />
            <img class="d-block w-75" src= {spaghetti} alt="Spaghetti" />
            <p id="text"><br />La venta es por kilo.<br />
            La compra minima es de medio kilo (0.5 kg)<br />
            Con 1 kg comen 3 personas.<br />
            Cantidad aproximada, todo depende del apetito de los comensales!</p>
            </div>
           

            <div class = "col-lg-6 col-md-6 col-sm-6 col-xs-6" >
            <br />
            <div id="tit-past">
            <h2>Spaghetti</h2>
            <h5>$210</h5>
            </div>
            <div id="cant-past">

            <br />
            <p>Cantidad:</p>
            <NumericInput mobile class="form-control" min={0.5} step={0.5} precision={1} value={0.5} format={myFormat}
          />
            </div>
            <div class="container">
        <div class="btn-holder">
         <button id="carrito">
         Agregar al carrito
          </button>
        </div>
           </div>


            </div>
           </div>
        </div>

      </Dialog>

               
                </div>


            </div>
        </div>
        </div>

      );
        }
}

export default Galeria;