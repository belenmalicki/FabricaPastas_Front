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



/*export default {
    cart: [],
    add(id) { this.cart.push(id) },
    remove(id) { this.cart = this.cart.filter(p => p.id !== id)
  }}*/
  const useStyles = makeStyles(theme => ({
    root: {
      justifyContent:'center',
      width: '80%',
    },
    paper: {
      justifyContent:'center',
      marginTop: theme.spacing(3),
      width: '80%',
      overflowX: 'auto',
      marginBottom: theme.spacing(2),
    },
    table: {
      justifyContent:'center',
      minWidth: 650,
    },
  }));
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


  function createData(producto, tipo, cantidad, precio, total) {
    return { producto, tipo, cantidad, precio, total };
  }
  class Tabless extends React.Component{
    constructor(props){
      super(props);
      
      this.state = {
          rows: [],
      }
      }

    MiCarrito(){
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
    console.logs('rows',parseado[0].nombre,  parseado[0].tipo,  parseado[0].cantidad,  parseado[0].precio, ( parseado[0].cantidad* parseado[0].precio))
    this.setState({rows: rows});
    }



    render(){
      var rows=[]
      rows=this.state.rows;  

      return(
        <div style={{ justifyContent:'center',width: '80%',}}>
        <Paper style={{justifyContent:'center', width: '80%', overflowX: 'auto',}}>
          <Table  style={{ justifyContent:'center', minWidth: 650,}}size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Pasta</TableCell>
                <TableCell align="right">Sabor</TableCell>
                <TableCell align="right">Cantidad</TableCell>
                <TableCell align="right">Precio unitario</TableCell>
                <TableCell align="right">Subtotal</TableCell>
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
    }
  }

  class Shoppingcart extends React.Component{
    render(){
      console.log('mi carriro en carrito',localStorage.getItem('carrito'));
      console.log('carrito parse', JSON.parse(localStorage.getItem('carrito')))
      var a=[]
      a=JSON.parse(localStorage.getItem('carrito'));
      console.log('a',a[0].nombre)
      
        return(
            <div>
            <div style ={{backgroundColor:'white', textAlign:'center'}}> 
            <h1> futuro shopping cart</h1>
            <br /><br />
            Mis productos:
            (nombre producto)  $  (total del producto especifico)<br />
                                (suma total)    
                                <br /><br />
                <Tabless />
            <br /><br />
            <Button>Confirmar pedido</Button>
            <Link to='/'>Volver al inicio</Link>
           
            </div>
       
            </div>
        );
    }
    
    }
    export default Shoppingcart;