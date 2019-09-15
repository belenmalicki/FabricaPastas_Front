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
    const [open, setOpen] = React.useState(false);
  
    function handleClickOpen() {
      setOpen(true);
    }
  
    function handleClose() {
      setOpen(false);
    }
  
 
      return (
         
        <div class = "galeria">
           <h1 id="tituloPastas">Nuestras Pastas</h1>
           <br /><br />
        <div class = "container">
            <div class = "row">
                <div class = "col-lg-3 col-md-4 col-sm-4 col-xs-6" >
                <img class="d-block w-100" id="bigger" src="https://www.intentarlavida.site/images/fotos/recetas/sorrentinos.jpg" alt="First slide" /> 
                <div class="card-body">
                    <p class="card-text">Sorrentinos.</p>
                </div>
                <br />
                <img class="d-block w-100" id="bigger" src="https://olivereats.ca/wp-content/uploads/2018/12/Fresh-pasta_041218_36-750x500.jpg" alt="First slide" />
                <div class="card-body">
                    <p class="card-text">Tagliatelli.</p>
                </div>
                </div>
                <div class = "col-lg-3 col-md-4 col-sm-4 col-xs-6">
                <img class="d-block w-100" id="bigger" src="https://mejorrecetas.info/wp-content/uploads/2019/07/18767e2208f85638186154816d971526-750x500.jpg" alt="First slide" />
                <div class="card-body">
                    <p class="card-text">Lasagna.</p>
                </div>
                <br />
                <img class="d-block w-100" id="bigger" src="https://ilreporter.it/wp-content/uploads/2019/02/pasta_fatta_in_casa-1.jpg" alt="First slide" /> 
                <div class="card-body">
                    <p class="card-text">Ravioles.</p>
                </div>
                </div>
                <div class = "col-lg-3 col-md-4 col-sm-4 col-xs-6">
                <img class="d-block w-100" id="bigger" src="https://s3-us-west-2.amazonaws.com/laprensa-bucket/wp-content/uploads/2016/02/05112619/RECETA-4.jpg" alt="First slide" /> 
                <div class="card-body">
                    <p class="card-text">Canelones.</p>
                </div>
                <br />
                <img class="d-block w-100" id="bigger" src="https://www.soniaperonaci.it/wp-content/uploads/2017/12/Pasta-fresca-kenwood_142-750x500.jpg" alt="First slide" />
                <div class="card-body">
                    <p class="card-text">Cappeleti.</p>
                </div>
                </div>
                <div class = "col-lg-3 col-md-4 col-sm-4 col-xs-6">
                <button>
                <img class="d-block w-100" id="bigger" src="http://www.nomecomesnada.es/wp-content/gallery/noquis-caseros/%C3%B1oquis-7-web.jpg" alt="First slide" /> 
                <div class="card-body">
                    <p class="card-text">Ñoquis.<br/> $250</p>
                </div></button>
                <br />
                <br />
                <button>
                <img class="d-block w-100" id="bigger" onClick={handleClickOpen} src="https://gdegastronomia.es/wp-content/uploads/2014/08/4nxkhlcrklo-jorge-zapata-750x500.jpg" alt="First slide" />
                </button>
                <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              
            </Typography>
            <Button color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <div class = "container">
          <div class = "row">
            <div class = "col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <br />
            <img class="d-block w-75" src="https://gdegastronomia.es/wp-content/uploads/2014/08/4nxkhlcrklo-jorge-zapata-750x500.jpg" alt="First slide" />
            </div>
            <div class = "col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <h2>Spaghetti</h2>
            <p>
            Compreme
            </p>
            </div>
           </div>
        </div>

      </Dialog>

                <div class="card-body">
                    <p class="card-text">Spaghetti.</p>
                </div>
                </div>


            </div>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
      );
    
}

export default Galeria;