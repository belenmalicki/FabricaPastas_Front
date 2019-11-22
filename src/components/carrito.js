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
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Form, Checkbox } from 'semantic-ui-react'

  function createData(nombre, tipo, cantidad, precio, total) {
    return {nombre, tipo, cantidad, precio, total };
  }
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });

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
      var rows,total;
      //JSON.parse(localStorage.getItem('carrito'))).length===0|| 
      if(JSON.parse(localStorage.getItem('carrito'))===null){
         rows = [
          createData('No se seleccionó ningún producto', ' ', ' ', ' ', ' ')]
      }
      else
      {
         rows=JSON.parse(localStorage.getItem('carrito'))
         total=0;
         for (let i = 0; i < rows.length; i++) 
         {
          total = total + (parseInt(rows[i].precio)* parseInt(rows[i].cantidad));
          console.log()
         }
       
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
                  <div>
                    
                  </div>
                 

                  </TableRow>
                
              ))}
              <TableCell align="left"></TableCell>
                  <TableCell align="left"></TableCell>
                  <TableCell align="left"></TableCell>
                  <TableCell align="left" style={{fontSize:'25px'}} >Total:</TableCell>
                  <TableCell align="left" style={{fontSize:'25px'}}>{total}</TableCell>

            </TableBody>
          </Table>
        </Paper>
      </div>


      );
    }
  }
 
  class Shoppingcart extends React.Component{
    constructor(props){
      super(props);
      
      this.state = {
          open: false,
          openMsj:false,
          sucursal:'',
      }
    }
    handleGrabar=()=>{

      if((JSON.parse(localStorage.getItem('carrito'))).length!==0 && this.sucursal!== undefined){
        //alert('grabar');
        this.setState({openMsj: true});
        console.log('la sucursal que seleccionaste fue:', this.sucursal);
        let pedidoUsuario={
          pedido:JSON.parse(localStorage.getItem('carrito')),
          cliente:localStorage.getItem('Usuariologueado'),
          sucursal:this.sucursal,
        }
        console.log('parse json', pedidoUsuario );
        localStorage.setItem('pedido',JSON.stringify(pedidoUsuario));
       // console.log('stringfy de pedido', localStorage.getItem('pedido'));
        pastaController.insertPedido(pedidoUsuario);
      }
      else if((JSON.parse(localStorage.getItem('carrito'))).length===0){
        alert('No se encontró ningun pedido');
      }
      else if(this.sucursal === undefined){
        alert('Seleccione una sucursal para continuar');
      }

    }
    handleClickOpenConfirmar= () => {
      this.setState({openConf: true});
  };
    handleCloseConfirmar= () => {
      this.setState({openConf: false});
  };

  handleCloseMensaje= () => {
    this.setState({openMsj: false});
    this.setState({openConf: false});
};
  handleInputChange(evt) {
  this.setState({ [evt.target.name]: evt.target.value });
  }
       
   state = {}
  handleChangeSucursal = (e, { value }) => this.setState({ value })
//https://react.semantic-ui.com/modules/checkbox/ 
    render(){
      console.log('la sucursal es:', this.sucursal);
      this.sucursal=this.state.value;
        return(
            <div  class='' style={{width: window.innerWidth, height: window.innerHeight}}>
            <div id="tituloPastas" style ={{textAlign:'center', marginTop:'30px'}}> 
            <h1> Carrito de compras</h1>
            </div>
   

             <div style={{justifyContent:'center', marginTop:'80px'}}>                   
                <ProdTable />
                </div>
            <br /><br />
            
            
            <Button onClick={()=>this.handleClickOpenConfirmar()} style={{color:'white'}} >Confirmar pedido</Button>
            <Dialog  open={this.state.openConf} onClose={this.handleCloseConfirmar} TransitionComponent={Transition} style={{textAlign:'center'}}>
                           
                <p style={{marginTop:'40px', marginBottom:'25px', marginLeft:'60px', marginRight:'60px',fontFamily:'Quicksand', fontSize:'24px' ,fontWeight:'bold'}}>
                    ¿Desea confirmar la reserva? 
                </p>
                <p style={{ marginBottom:'25px', marginLeft:'60px', marginRight:'60px',fontFamily:'Quicksand', fontSize:'16px'}}>
                    Te llamaremos en las proximas 24 hs. horas para confirmar el día y horario de retiro.
                </p>
                <p style={{fontFamily:'Quicksand', fontSize:'18px', textAlign:'left', marginLeft:'60px', marginBottom:'20px'}}>
                    Seleccione la sucursal a retirar su pedido.
                </p>

                  <Form style={{fontFamily:'Quicksand', fontSize:'18px', textAlign:'left', marginLeft:'80px', marginBottom:'60px'}}>
                      <Form.Field>
                      </Form.Field>
                      <Form.Field>
                        <Checkbox
                          radio
                          label='Güemes 3331'
                          name='checkboxRadioGroup'
                          value='Guemes'
                          checked={this.state.value === 'Guemes'}
                          onChange={this.handleChangeSucursal}
                        />
                      </Form.Field>
                      <Form.Field>
                        <Checkbox
                          radio
                          label='Rivadavia 4035'
                          name='checkboxRadioGroup'
                          value='Rivadavia'
                          checked={this.state.value === 'Rivadavia'}
                          onChange={this.handleChangeSucursal}
                        />
                      </Form.Field>

                    </Form>


                <div >
                    <Button  style={{justifyContent:'flex-start',marginRight:'100px',marginBottom:'40px', color:'#209c7d', fontFamily:'Quicksand', fontSize:'18px',fontWeight:'bold'}} onClick={()=>this.handleGrabar()}>
                        Aceptar
                    </Button>
                            <Dialog  open={this.state.openMsj} onClose={this.handleCloseMensaje} TransitionComponent={Transition} style={{textAlign:'center'}}>
                            <p style={{marginTop:'40px', marginBottom:'25px', marginLeft:'60px', marginRight:'60px',fontFamily:'Quicksand', fontSize:'24px' ,fontWeight:'bold'}}>
                               Gracias por realizar su pedido 
                              </p>
                              <p style={{ marginBottom:'25px', marginLeft:'60px', marginRight:'60px',fontFamily:'Quicksand', fontSize:'18px' }}>
                               Uno de nuestros representantes se comunicara con usted a la brevedad.
                              </p>
                              <p style={{ marginBottom:'5px', marginLeft:'60px', marginRight:'60px',fontFamily:'Quicksand', fontSize:'18px' }}>
                              Recuerde informar su mail de usuario a la hora de retirar el pedido.
                              </p>
                                        
                                  <Button style={{justifyContent:'flex-end', marginBottom:'40px', color:'#209c7d',  fontFamily:'Quicksand', fontSize:'18px',fontWeight:'bold'}} onClick={this.handleCloseMensaje}>
                                      Volver al inicio
                                  </Button>
                                                  
                              </Dialog>
           

                    <Button style={{justifyContent:'flex-end', marginBottom:'40px', color:'#209c7d',  fontFamily:'Quicksand', fontSize:'18px',fontWeight:'bold'}} onClick={this.handleCloseConfirmar}>
                        Cancelar
                    </Button>
                      </div>                     
              </Dialog>
           
            <Link to='/'>Volver al inicio</Link>

            
       
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