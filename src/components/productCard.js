import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';




const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const constStyle = {
   // border: '5px solid white',
    //width: '50%',
    //height: '35%'
   // position: 'absolute',
    //width:'500px',
    //height:'250px',
  };

  
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  


  

function Galeria(){
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
         
        <div class = "galeria">
           <h1 id="tituloPastas">Nuestras Pastas</h1>
           <br /><br />
        <div class = "container-fluid">
            <div class = "row">
                <div class = "col-lg-3 col-md-4 col-sm-4 col-xs-6" >
                <button class="bot">
                <img class="d-block w-100" id="bigger" onClick={handleClickOpenSorrentinos} src="https://www.intentarlavida.site/images/fotos/recetas/sorrentinos.jpg" alt="First slide" /> 
                <div class="card-body">
                    <p class="card-text">Sorrentinos<br /> $340</p>
                </div>
                </button>
                <Dialog fullWidth open={openSr} onClose={handleCloseSorrentinos} TransitionComponent={Transition}>
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
            <img class="d-block w-75" src="https://mejorrecetas.info/wp-content/uploads/2019/07/18767e2208f85638186154816d971526-750x500.jpg" alt="First slide" />
            <p id="text">La venta es por kilo.<br />
            La compra minima es de medio kilo (0.5 kg)<br />
            Con 1kg comen 2 personas.<br />
            Igualmente, todo depende del apetito de los comensales!</p>
            </div>
           

            <div class = "col-lg-6 col-md-6 col-sm-6 col-xs-6" >
            <br />
            <div id="tit-past">
            <h2>Lasagna</h2>
            <h5>$440</h5>
            </div>
            <div id="cant-past">
            <br />
      <TextField
        label="Cantidad"
        id="simple-start-adornment"
        InputProps={{
          startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
        }}
      />
            </div>
            <br /><br /><br />
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
                <img class="d-block w-100" id="bigger" onClick={handleClickOpenTagliatellis} src="https://olivereats.ca/wp-content/uploads/2018/12/Fresh-pasta_041218_36-750x500.jpg" alt="First slide" />
                <div class="card-body">
                    <p class="card-text">Tagliatelli<br />$280</p>
                </div>
                </button>

                <Dialog fullWidth open={openTg} onClose={handleCloseTagliatellis} TransitionComponent={Transition}>
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
            <img class="d-block w-75" src="https://mejorrecetas.info/wp-content/uploads/2019/07/18767e2208f85638186154816d971526-750x500.jpg" alt="First slide" />
            <p id="text">La venta es por kilo.<br />
            La compra minima es de medio kilo (0.5 kg)<br />
            Con 1kg comen 2 personas.<br />
            Igualmente, todo depende del apetito de los comensales!</p>
            </div>
           

            <div class = "col-lg-6 col-md-6 col-sm-6 col-xs-6" >
            <br />
            <div id="tit-past">
            <h2>Lasagna</h2>
            <h5>$440</h5>
            </div>
            <div id="cant-past">
            <br />
      <TextField
        label="Cantidad"
        id="simple-start-adornment"
        InputProps={{
          startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
        }}
      />
            </div>
            <br /><br /><br />
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
                <img class="d-block w-100" id="bigger" onClick={handleClickOpenLasagna} src="https://mejorrecetas.info/wp-content/uploads/2019/07/18767e2208f85638186154816d971526-750x500.jpg" alt="First slide" />
                <div class="card-body">
                    <p class="card-text">Lasagna<br />$440</p>
                </div>
                </button>
                <Dialog fullWidth open={openLn} onClose={handleCloseLasagna} TransitionComponent={Transition}>
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
            <img class="d-block w-75" src="https://mejorrecetas.info/wp-content/uploads/2019/07/18767e2208f85638186154816d971526-750x500.jpg" alt="First slide" />
            <p id="text">La venta es por kilo.<br />
            La compra minima es de medio kilo (0.5 kg)<br />
            Con 1kg comen 2 personas.<br />
            Igualmente, todo depende del apetito de los comensales!</p>
            </div>
           

            <div class = "col-lg-6 col-md-6 col-sm-6 col-xs-6" >
            <br />
            <div id="tit-past">
            <h2>Lasagna</h2>
            <h5>$440</h5>
            </div>
            <div id="cant-past">
            <br />
      <TextField
        label="Cantidad"
        id="simple-start-adornment"
        InputProps={{
          startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
        }}
      />
            </div>
            <br /><br /><br />
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
                <img class="d-block w-100" id="bigger" onClick={handleClickOpenRavioles} src="https://sethlui.com/wp-content/uploads/2015/07/spruce-fire-station-10-750x500.jpg" alt="First slide" /> 
                <div class="card-body">
                    <p class="card-text">Ravioles<br />$230</p>
                </div>
                </button>

                <Dialog fullWidth open={openRv} onClose={handleCloseRavioles} TransitionComponent={Transition}>
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
            <img class="d-block w-75" src="https://sethlui.com/wp-content/uploads/2015/07/spruce-fire-station-10-750x500.jpg" alt="First slide" />
            <p id="text">La venta es por caja.<br />
            La compra minima es 1 caja.<br />
            Con 2 cajas comen 3 personas.<br />
            Igualmente, todo depende del apetito de los comensales!</p>
            </div>
           

            <div class = "col-lg-6 col-md-6 col-sm-6 col-xs-6" >
            <br />
            <div id="tit-past">
            <h2>Ravioles</h2>
            <h5>$230</h5>
            </div>
            <div id="cant-past">
            <br />
      <TextField
        label="Cantidad"
        id="simple-start-adornment"
        InputProps={{
          startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
        }}
      />
            </div>
            <br /><br /><br />
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
                <img class="d-block w-100" id="bigger" onClick={handleClickOpenCanelones} src="https://s3-us-west-2.amazonaws.com/laprensa-bucket/wp-content/uploads/2016/02/05112619/RECETA-4.jpg" alt="First slide" /> 
                <div class="card-body">
                    <p class="card-text">Canelones<br />$60</p>
                </div>
                </button>
                <Dialog fullWidth open={openCn} onClose={handleCloseCanelones} TransitionComponent={Transition}>
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
            <img class="d-block w-75" src="https://s3-us-west-2.amazonaws.com/laprensa-bucket/wp-content/uploads/2016/02/05112619/RECETA-4.jpg" alt="First slide" />
            <p id="text">La venta es por unidad.<br />
            La compra minima es 1 unidad.<br />
            Con 2 unidades come 1 persona.<br />
            Igualmente, todo depende del apetito de los comensales!</p>
            </div>
           

            <div class = "col-lg-6 col-md-6 col-sm-6 col-xs-6" >
            <br />
            <div id="tit-past">
            <h2>Canelones</h2>
            <h5>$60</h5>
            </div>
            <div id="cant-past">
            <br />
      <TextField
        label="Cantidad"
        id="simple-start-adornment"
        InputProps={{
          startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
        }}
      />
            </div>
            <br /><br /><br />
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
                <img class="d-block w-100" id="bigger" onClick={handleClickOpenCappeleti} src="https://www.soniaperonaci.it/wp-content/uploads/2017/12/Pasta-fresca-kenwood_142-750x500.jpg" alt="First slide" />
                <div class="card-body">
                    <p class="card-text">Cappeleti<br />$220</p>
                </div>
                </button>
                <Dialog fullWidth open={openCp} onClose={handleCloseCappeleti} TransitionComponent={Transition}>
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
            <img class="d-block w-75" src="https://www.soniaperonaci.it/wp-content/uploads/2017/12/Pasta-fresca-kenwood_142-750x500.jpg" alt="First slide" />
            <p id="text">La venta es por caja.<br />
            La compra minima es 1 caja.<br />
            Con 2 cajas comen 3 personas.<br />
            Igualmente, todo depende del apetito de los comensales!</p>
            </div>
           

            <div class = "col-lg-6 col-md-6 col-sm-6 col-xs-6" >
            <br />
            <div id="tit-past">
            <h2>Cappeleti</h2>
            <h5>$220</h5>
            </div>
            <div id="cant-past">
            <br />
      <TextField
        label="Cantidad"
        id="simple-start-adornment"
        InputProps={{
          startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
        }}
      />
            </div>
            <br /><br /><br />
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
                <img class="d-block w-100" id="bigger" onClick={handleClickOpenGnoqui} src="http://www.nomecomesnada.es/wp-content/gallery/noquis-caseros/%C3%B1oquis-7-web.jpg" alt="First slide" /> 
                <div class="card-body">
                    <p class="card-text">Ñoquis<br/> $250</p>
                </div></button>
                <Dialog fullWidth open={openGn} onClose={handleCloseGnoqui} TransitionComponent={Transition}>
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
            <img class="d-block w-75" src="http://www.nomecomesnada.es/wp-content/gallery/noquis-caseros/%C3%B1oquis-7-web.jpg" alt="First slide" />
            <p id="text">La venta es por kilo.<br />
            La compra minima es de medio kilo (0.5 kg)<br />
            Con 1kg comen 3 personas.<br />
            Igualmente, todo depende del apetito de los comensales!</p>
            </div>
           

            <div class = "col-lg-6 col-md-6 col-sm-6 col-xs-6" >
            <br />
            <div id="tit-past">
            <h2>Ñoquis</h2>
            <h5>$250</h5>
            </div>
            <div id="cant-past">
            <br />
      <TextField
        label="Cantidad"
        id="simple-start-adornment"
        InputProps={{
          startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
        }}
      />
            </div>
            <br /><br /><br />
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
                <img class="d-block w-100" id="bigger" onClick={handleClickOpenSpaguetti} src="https://gdegastronomia.es/wp-content/uploads/2014/08/4nxkhlcrklo-jorge-zapata-750x500.jpg" alt="First slide" />
                <div class="card-body">
                    <p class="card-text">Spaghetti<br />$210</p>
                </div>
                </button>
                <Dialog fullWidth open={openSp} onClose={handleCloseSpaguetti} TransitionComponent={Transition}>
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
            <img class="d-block w-75" src="https://gdegastronomia.es/wp-content/uploads/2014/08/4nxkhlcrklo-jorge-zapata-750x500.jpg" alt="First slide" />
            <p id="text">La venta es por kilo.<br />
            La compra minima es de medio kilo (0.5 kg)<br />
            Con 1kg comen 3 personas.<br />
            Igualmente, todo depende del apetito de los comensales!</p>
            </div>
           

            <div class = "col-lg-6 col-md-6 col-sm-6 col-xs-6" >
            <br />
            <div id="tit-past">
            <h2>Spaghetti</h2>
            <h5>$210</h5>
            </div>
            <div id="cant-past">
            <br />
      <TextField
        label="Cantidad"
        id="simple-start-adornment"
        InputProps={{
          startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
        }}
      />
            </div>
            <br /><br /><br />
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
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
      );
    
}

export default Galeria;