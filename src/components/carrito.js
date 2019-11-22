import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import pastaController from '../controller/pastaController';
import Modal from 'react-bootstrap/Modal'

  function createData(nombre, tipo, cantidad, precio, total) {
    return {nombre, tipo, cantidad, precio, total };
  }


  class ProdTable extends React.Component{
    constructor(props){
      super(props);
      
      this.state = {
          rows: [],
      }
      }
      eliminarProd(nombre, tipo){
        if(nombre!== 'No se seleccionó ningún producto'){
        //console.log('mostrar key:', nombre, tipo)
        var vector= JSON.parse(localStorage.getItem('carrito'));
        //console.log('vector:', vector.length);
        for(var i=0;!(vector[i].nombre===nombre&& vector[i].tipo===tipo);i++){}
         // console.log('vectores:', vector, i);
          if(vector[i].nombre===nombre&& vector[i].tipo===tipo){
            vector[i]=null; 
          }
          
         var aux=[], x=0;
        for(i=0;i<vector.length;i++){
          if(vector[i]!=null){
            aux[x]=vector[i];
            x++;
          }
        }

        //console.log('Vector final ult', aux);
        var a= JSON.stringify(aux);
        localStorage.setItem('carrito', a);
        console.log('localstorage', localStorage.getItem('carrito'));
      }
      }

    render(){
      var rows
      if((JSON.parse(localStorage.getItem('carrito'))).length===0){
         rows = [
          createData('No se seleccionó ningún producto', ' ', ' ', ' ', ' ')]
      }
      else{
         rows=JSON.parse(localStorage.getItem('carrito'))
      }
      
      console.log('rows',rows);
      var sum=0;
      
      return(
        <div style={{ justifyContent:'center',width: '75%'}}>
        <Paper style={{justifyContent:'center', width: '100%', overflowX: 'auto',}}>
          <Table  style={{ justifyContent:'center', minWidth: 650}}size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell style={{fontSize:'16px'}}>Pasta</TableCell>
                <TableCell align="left" style={{fontSize:'16px'}}>Sabor</TableCell>
                <TableCell align="left" style={{fontSize:'16px'}}>Cantidad</TableCell>
                <TableCell align="left" style={{fontSize:'16px'}}>Precio unitario</TableCell>
                <TableCell align="left" style={{fontSize:'16px'}}>Subtotal</TableCell>
              </TableRow>
           </TableHead> 
            <TableBody>
              {rows.map(row  => (
                <TableRow key={row.nombre} >
                  <TableCell component="th" scope="row" style={{fontSize:'16px'}}>
                    {row.nombre}
                  </TableCell>
                  <TableCell align="left" style={{fontSize:'16px'}}>{row.tipo}</TableCell>
                  <TableCell align="left" style={{fontSize:'16px'}}>{row.cantidad}</TableCell>
                  <TableCell align="left" style={{fontSize:'16px'}}>{row.precio}</TableCell>
                  <TableCell align="left" style={{fontSize:'16px'}}>{row.precio*row.cantidad}</TableCell>
                  <Link  to='/shoppingcart'>
                  <Button key={row.nombre} onClick={()=>this.eliminarProd(row.nombre, row.tipo)}>Eliminar</Button>
                  </Link>
                  {sum=sum +row.precio*row.cantidad}

                  </TableRow>
                
              ))}
              <TableCell align="left"></TableCell>
                  <TableCell align="left"></TableCell>
                  <TableCell align="left"></TableCell>
                  <TableCell align="left" style={{fontSize:'25px'}} >Total:</TableCell>
                  <TableCell align="left" style={{fontSize:'25px'}}>{sum}</TableCell>

            </TableBody>
          </Table>
        </Paper>
      </div>


      );
    }
  }
 
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  class Shoppingcart extends React.Component{

    handleGrabar(){
      if((JSON.parse(localStorage.getItem('carrito'))).length!==0){
        alert('grabar');
        let pedidoUsuario={
          pedido:JSON.parse(localStorage.getItem('carrito')),
          cliente:localStorage.getItem('Usuariologueado'),
        }
        console.log('parse json', pedidoUsuario );

        //pastaController.insertPedido(pedidoUsuario);
      }
    }

    handleClickOpenConfirmar(){
      //this.setState({openSr: true,prodSelec:aux});
    }
   /* handleClickOpenSorrentinos= (id) => {
      console.log('mi id es:', id)
      let aux = this.state.data[id];
      console.log('prod selec:', aux)
 
  };
  handleCloseSorrentinos= () => {
    this.setState({openSr: false});
  };*/
      state = { show: false };
      showModal = () => {
        this.setState({ show: true });
      };

      hideModal = () => {
        this.setState({ show: false });
      };

    render(){
      
        return(
            <div  class='' style={{width: window.innerWidth, height: window.innerHeight}}>
            <div id="tituloPastas" style ={{textAlign:'center', marginTop:'30px'}}> 
            <h1> Carrito de compras</h1>
            </div>
   

             <div style={{justifyContent:'center', marginTop:'80px'}}>                   
                <ProdTable />
                </div>
            <br /><br />
            <Modal show={this.state.show} handleClose={this.hideModal}>
              <p>Modal</p>
              <p>Data</p>
            </Modal>
            <Button onClick={this.showModal}>Confirmar pedido</Button>
           
            <Link to='/'>Volver al inicio</Link>

        <button type="button" >
          open
        </button>
            
       
            </div>
        );
    }
    
    }
    export default Shoppingcart;


    


/*export default {
    cart: [],
    add(id) { this.cart.push(id) },
    remove(id) { this.cart = this.cart.filter(p => p.id !== id)
  }}*/
  
 /* 
  function createData(producto, tipo, cantidad, precio, total) {
    return { producto, tipo, cantidad, precio, total };
  }

  function MiCarrito(){
    console.log('mi carriro en carrito',localStorage.getItem('carrito'));
   var i ,array=[]
   var parseado=JSON.parse(localStorage.getItem('carrito'))
   
   for( i=0; i<parseado.length;i++){
       array.push(createData(parseado[i],i))
   }
   //this.setState({data: array});
   
   const rows = [
    createData( parseado[0].nombre,  parseado[0].tipo,  parseado[0].cantidad,  parseado[0].precio, ( parseado[0].cantidad* parseado[0].precio)),
    //createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
   // createData('Eclair', 262, 16.0, 24, 6.0),
   // createData('Cupcake', 305, 3.7, 67, 4.3),
    //createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  this.setState({row: rows});
  }
  

  function DenseTable() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Table className={classes.table} size="small" aria-label="a dense table">
           <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
           </TableHead> 
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }*/