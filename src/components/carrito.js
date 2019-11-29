import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import pastaController from '../controller/pastaController';
import Dialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import { Form, Checkbox } from 'semantic-ui-react'

  function createData(nombre, tipo, cantidad, precio, total) {
    return {nombre, tipo, cantidad, precio, total };
  }
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });

  const BButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 14,
      padding: '6px 12px',
      lineHeight: 1.5,
      backgroundColor: 'white',
      marginRight:'18px',
    }
  })(Button);

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

      return(
        <div style={{ justifyContent:'center',width: '75%', marginLeft: 'auto', marginRight: 'auto'}}>
        <Paper style={{justifyContent:'center', width: '100%', overflowX: 'auto',}}>
          <Table  style={{ justifyContent:'center', minWidth: 650, marginTop:'10px', marginBottom:'10px'}}size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell style={{fontSize:'16px'}}>Pasta</TableCell>
                <TableCell align="left" style={{fontSize:'16px'}}>Sabor</TableCell>
                <TableCell align="left" style={{fontSize:'16px'}}>Cantidad</TableCell>
                <TableCell align="left" style={{fontSize:'16px'}}>Precio unitario</TableCell>
                <TableCell align="left" style={{fontSize:'16px'}}>Subtotal</TableCell>
                <TableCell align="left" style={{fontSize:'16px'}}></TableCell>
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
                  <TableCell align="left" style={{fontSize:'16px'}}>${row.precio}</TableCell>
                  <TableCell align="left" style={{fontSize:'16px'}}>${row.precio*row.cantidad}</TableCell>
                  <TableCell align="center" style={{fontSize:'16px'}}>
                  <Link  to='/shoppingcart'>
                  <Button key={row.nombre} onClick={()=>this.eliminarProd(row.nombre, row.tipo)}>Eliminar</Button>
                  </Link>
                  </TableCell>
                  <div>
                    
                  </div>
                 

                  </TableRow>
                
              ))}
              <TableRow style={{backgroundColor:'#DEE2E0'}}>
              <TableCell align="left"></TableCell>
                  <TableCell align="left"></TableCell>
                  <TableCell align="left"></TableCell>
                  <TableCell align="left" style={{fontSize:'25px'}} >Total:</TableCell>
                  <TableCell align="left" style={{fontSize:'25px'}}>${total}</TableCell>
                  <TableCell align="left"></TableCell>
                  </TableRow>
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
          estado:'pendiente',
        }
        console.log('parse json', pedidoUsuario );
        localStorage.setItem('pedido',JSON.stringify(pedidoUsuario));
       // console.log('stringfy de pedido', localStorage.getItem('pedido'));
        pastaController.insertPedido(pedidoUsuario);
        localStorage.removeItem('carrito');
        return <Redirect to='/'></Redirect>
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

    render(){
      console.log('la sucursal es:', this.sucursal);
      this.sucursal=this.state.value;
        return(
            <div  class='backCarrito' style={{width: window.innerWidth, height: window.innerHeight, position:'absolute'}}>
              <div class="container"  style ={{textAlign:'center', marginTop:'30px', paddingTop:'12px'}}> 
                <h1 id="tituloCarrito" ><strong>Carrito de compras</strong></h1>
              </div>   

             <div style={{justifyContent:'center', marginTop:'80px'}}>                   
                <ProdTable />
                </div>
           
            
            <div class="row" style={{textAlign:'right', position: 'absolute', right: 190, marginTop:'20px'}}>
            <BButton onClick={()=>this.handleClickOpenConfirmar()} style={{color:'black', marginRight:'-1px'}} variant="contained">CONFIRMAR PEDIDO</BButton>
            <Dialog  open={this.state.openConf} onClose={this.handleCloseConfirmar} TransitionComponent={Transition} style={{textAlign:'center'}}>
                           
                <p style={{marginTop:'40px', marginBottom:'25px', marginLeft:'60px', marginRight:'60px',fontFamily:'Quicksand', fontSize:'28px' ,fontWeight:'bold'}}>
                    ¿Desea confirmar la reserva? 
                </p>
                <p style={{ marginBottom:'25px', marginLeft:'60px', marginRight:'60px',fontFamily:'Quicksand', fontSize:'18px'}}>
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
                            <p style={{marginTop:'90px', marginBottom:'25px', marginLeft:'60px', marginRight:'60px',fontFamily:'Quicksand', fontSize:'28px' ,fontWeight:'bold'}}>
                               Gracias por realizar su pedido 
                              </p>
                              <p style={{ marginBottom:'25px', marginLeft:'60px', marginRight:'60px',fontFamily:'Quicksand', fontSize:'20px' }}>
                               Uno de nuestros representantes se comunicara con usted a la brevedad.
                              </p>
                              <p style={{ marginBottom:'5px', marginLeft:'60px', marginRight:'60px',fontFamily:'Quicksand', fontSize:'20px' }}>
                              Su codigo para retirar el pedido es:
                              </p>
                              <p style={{marginBottom:'80px', marginLeft:'60px', marginRight:'60px',fontFamily:'Quicksand', fontSize:'22px' }}>
                              <strong>{localStorage.getItem('Usuariologueado')}</strong></p>
                              <Link to='/' style={{color:'#209c7d', textDecoration:'none'}}>   
                                <Button style={{justifyContent:'flex-end',color:'#209c7d', marginBottom:'20px', marginRight:'10px' ,fontFamily:'Quicksand', fontSize:'18px',fontWeight:'bold'}} onClick={this.handleCloseMensaje}>
                                  Volver al inicio
                                </Button>
                              </Link>
                                                  
                              </Dialog>
           

                    <Button style={{justifyContent:'flex-end', marginBottom:'40px', color:'#209c7d',  fontFamily:'Quicksand', fontSize:'18px',fontWeight:'bold'}} onClick={this.handleCloseConfirmar}>
                        Cancelar
                    </Button>
                      </div>                     
              </Dialog>
            <BButton style={{marginLeft:'20px'}} variant="contained">
              <Link to='/' style={{color:'black'}}>VOLVER AL INICIO</Link> 
            </BButton>
            </div>
       
            </div>
        );
    }
    
    }
    export default Shoppingcart;

