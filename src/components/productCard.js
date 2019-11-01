import React from 'react';
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

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
  
  function myFormat(num) {
    return num + ' kg';
}
function myFormatUnid(num) {
  return num + ' u';

}


function Galeria(){

  const [state, setState] = React.useState({
    number: '',
    name: 'hai',
  });

 

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

    const classes = useStyles();
    const [openGn, setOpenGnoqui] = React.useState(false);
    const [openSp,  setOpenSpaguetti] = React.useState(false);
    const [openCp,  setOpenCappeleti] = React.useState(false);
    const [openCn,  setOpenCanelones] = React.useState(false);
    const [openRv,  setOpenRavioles] = React.useState(false);
    const [openLn,  setOpenLasagna] = React.useState(false);
    const [openTg,  setOpenTagliatellis] = React.useState(false);
    const [openSr,  setOpenSorrentinos] = React.useState(false);
  
    function handleClickOpenSorrentinos() {
      setOpenSorrentinos(true);
    }
  
    function handleCloseSorrentinos() {
      setOpenSorrentinos(false);
    }

    function handleClickOpenTagliatellis() {
      setOpenTagliatellis(true);
    }
  
    function handleCloseTagliatellis() {
      setOpenTagliatellis(false);
    }

    function handleClickOpenLasagna() {
      setOpenLasagna(true);
    }
  
    function handleCloseLasagna() {
      setOpenLasagna(false);
    }

    function handleClickOpenRavioles() {
      setOpenRavioles(true);
    }
  
    function handleCloseRavioles() {
      setOpenRavioles(false);
    }
    function handleClickOpenCanelones() {
      setOpenCanelones(true);
    }
  
    function handleCloseCanelones() {
      setOpenCanelones(false);
    }

    function handleClickOpenCappeleti() {
      setOpenCappeleti(true);
    }
  
    function handleCloseCappeleti() {
      setOpenCappeleti(false);
    }

    function handleClickOpenGnoqui() {
      setOpenGnoqui(true);
    }
  
    function handleCloseGnoqui() {
      setOpenGnoqui(false);
    }


    function handleClickOpenSpaguetti() {
      setOpenSpaguetti(true);
    }
  
    function handleCloseSpaguetti() {
      setOpenSpaguetti(false);
    }
  
 
      return (
         <div id="productos" class = "container-fluid">       
           <h1 id="tituloPastas">Nuestras Pastas</h1>
           <br /><br />
        <div class = "container-fluid">
            <div class = "row">
                <div class = "col-lg-3 col-md-4 col-sm-4 col-xs-6" >
                <button class="bot">
                <img class="d-block w-100" id="bigger" onClick={handleClickOpenSorrentinos} src= {sorrentinos} alt="Sorrentinos" /> 
                <div class="card-body">
                    <p class="card-text">Sorrentinos<br /> $340</p>
                </div>
                </button>
                <Dialog maxWidth class='dialog_prod' open={openSr} onClose={handleCloseSorrentinos} 
                TransitionComponent={Transition} >
        <AppBar id="appbarprod" className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleCloseSorrentinos} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              
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
                <img class="d-block w-100" id="bigger" onClick={handleClickOpenTagliatellis} src= {tagliatelli} alt="Tagliatelli" />
                <div class="card-body">
                    <p class="card-text">Tagliatelli<br />$280</p>
                </div>
                </button>
      <Dialog  maxWidth  class='dialog_prod' open={openTg} onClose={handleCloseTagliatellis} TransitionComponent={Transition}
              >
        <AppBar id="appbarprod" className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleCloseTagliatellis} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              
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
                <img class="d-block w-100" id="bigger" onClick={handleClickOpenLasagna} src= {lasagna} alt="Lasagna" />
                <div class="card-body">
                    <p class="card-text">Lasagna<br />$440</p>
                </div>
                </button>
                <Dialog  maxWidth class='dialog_prod'  open={openLn} onClose={handleCloseLasagna} TransitionComponent={Transition}>
        <AppBar id="appbarprod" className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleCloseLasagna} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              
            </Typography>
           
          </Toolbar>
        </AppBar>
        <div class = "container">
          <div class = "row">
            <div class = "col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <br />
            <ImageZoom 
          image={{
            src: "https://mejorrecetas.info/wp-content/uploads/2019/07/18767e2208f85638186154816d971526-750x500.jpg",
            alt: "Lasagna",
            class: "img",
        

          }}
          zoomImage={{
            src:  "https://mejorrecetas.info/wp-content/uploads/2019/07/18767e2208f85638186154816d971526-750x500.jpg",
            alt: "Lasagna",
            className: "img--zoomed"
          }}
        />

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
              <FormControl variant="standard" className={classes.formControl} margin="dense" >
                <Select
                  id="dropdown_letra"
                  native
                  value={state.number}
                  onChange={handleChange('number')}
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
                <img class="d-block w-100" id="bigger" onClick={handleClickOpenRavioles} src= {ravioles} alt="Ravioles" /> 
                <div class="card-body">
                    <p class="card-text">Ravioles<br />$230</p>
                </div>
                </button>

                <Dialog  maxWidth class='dialog_prod'  open={openRv} onClose={handleCloseRavioles} TransitionComponent={Transition}>
        <AppBar id="appbarprod" className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleCloseRavioles} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              
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
              <FormControl variant="standard" className={classes.formControl} margin="dense" >
                <Select
                  native
                  value={state.number}
                  onChange={handleChange('number')}
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
                <img class="d-block w-100" id="bigger" onClick={handleClickOpenCanelones}  src= {canelones} alt="Canelones" /> 
                <div class="card-body">
                    <p class="card-text">Canelones<br />$60</p>
                </div>
                </button>
                <Dialog  maxWidth class='dialog_prod'  open={openCn} onClose={handleCloseCanelones} TransitionComponent={Transition}>
        <AppBar id="appbarprod" className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleCloseCanelones} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              
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
              <FormControl variant="standard" className={classes.formControl} margin="dense" >
                <Select
                  native
                  value={state.number}
                  onChange={handleChange('number')}
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
                <img class="d-block w-100" id="bigger" onClick={handleClickOpenCappeleti} src= {cappeletti} alt="Cappeletis" />
                <div class="card-body">
                    <p class="card-text">Cappeleti<br />$220</p>
                </div>
                </button>
                <Dialog  maxWidth class='dialog_prod'  open={openCp} onClose={handleCloseCappeleti} TransitionComponent={Transition}>
        <AppBar id="appbarprod" className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleCloseCappeleti} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              
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
              <FormControl variant="standard" className={classes.formControl} margin="dense" >
                <Select
                  native
                  value={state.number}
                  onChange={handleChange('number')}
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
                <img class="d-block w-100" id="bigger" onClick={handleClickOpenGnoqui} src= {gnoqui} alt="Ñoquis" /> 
                <div class="card-body">
                    <p class="card-text">Ñoquis<br/> $250</p>
                </div></button>
                <Dialog  maxWidth class='dialog_prod'  open={openGn} onClose={handleCloseGnoqui} TransitionComponent={Transition}>
        <AppBar id="appbarprod" className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleCloseGnoqui} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              
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
              <FormControl variant="standard" className={classes.formControl} margin="dense" >
                <Select
                  native
                  value={state.number}
                  onChange={handleChange('number')}
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
                <img class="d-block w-100" id="bigger" onClick={handleClickOpenSpaguetti} src= {spaghetti} alt="Spaghetti" />
                <div class="card-body">
                    <p class="card-text">Spaghetti<br />$210</p>
                </div>
                </button>
                <Dialog  maxWidth class='dialog_prod'  open={openSp} onClose={handleCloseSpaguetti} TransitionComponent={Transition}>
        <AppBar id="appbarprod" className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleCloseSpaguetti} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              
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

export default Galeria;