import {Component} from 'react';


const url ="http://localhost:3000/";
const urlInsertContacto="insertContacto";
const urlLogIn = "login";
const urlGetProductos = "productos";
const urlGetContacto = "getContacto";
const urlInsertPedido="insertPedido";
const urlGetPedido='getPedido';

class ApiController extends Component{
    insertContacto(usuario,okUsuario,errorUsuario){
        console.log("guardo contacto",usuario);
        const endpoint = `${url}${urlInsertContacto}`;
        console.log("Guardando");
        fetch (endpoint,{
            method:'POST',
            mode:"cors",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(usuario)
        }).then (response => {
            console.log("response",response);
            if(response.status===501){
                errorUsuario("El mail ya existe");
            }
            if (response.status===200){  
                okUsuario();
            }
        }).catch(err => console.error(err));
    };

    logIn(data, log,usuarioMal){
        const endpoint = `${url}${urlLogIn}`;
        fetch(endpoint,{
            method: 'POST',
            mode: "cors",
            headers:{ 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then ((response) => {
            if(response.status===501){ 
                usuarioMal("Datos incorrectos, intente nuevamente");
            }
            if (response.status===200){  
                log('Ingreso el usuario correcto');
            }
        });
    };
   
    getProductos(okBusqueda){
        const endpoint = `${url}${urlGetProductos}`;
        fetch(endpoint).then ((response) => {
            console.log("response",response);
            return response.json();
        }).then (responseData => {
            console.log("Recibi datos", responseData);
            okBusqueda(responseData);
        });
    };
    
    getPedido(data, okPedido){
        const endpoint = `${url}${urlGetPedido}`;
        console.log('mi mail es: ', data);
        fetch(endpoint,{
            method: 'POST',
            mode: "cors",
            headers:{ 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then ((response) => {
            console.log("Recibi datos getPedido response", response);
            return response.json();
        }).then (responseData => {
            console.log("Recibi datos getPedido",responseData);
            okPedido(responseData);    
        });
    }

    getContacto(data, okContacto){
        const endpoint = `${url}${urlGetContacto}`;
        console.log('mi mail es: ', data);
        fetch(endpoint,{
            method: 'POST',
            mode: "cors",
            headers:{ 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then ((response) => {
            console.log("Recibi datos getContacto response", response);
            return response.json();
        }).then (responseData => {
            console.log("Recibi datos getContacto",responseData);
            okContacto(responseData);  
        });
    }

    insertPedido(pedidoUsu){
        console.log("guardo pedido",pedidoUsu);
        const endpoint = `${url}${urlInsertPedido}`;
        console.log("Guardando");
        fetch (endpoint,{
            method:'POST',
            mode:"cors",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(pedidoUsu)
        }).then (response => {
            console.log("response",response);
            if(response.status===501){
                console.log('no se ingresó el pedido');
            }
            if (response.status===200){  
                console.log('el pedido ingreso corrtamente');
            }
        }).catch(err => console.error(err));
    };
}

export default new ApiController(); 