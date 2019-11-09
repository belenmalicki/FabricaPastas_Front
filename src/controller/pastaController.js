import {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';

const url ="http://localhost:3000/";
const urlInsertContacto="insertContacto";
const urlLogIn = "login";
const urlGetProductos = "productos";
class ApiController extends Component
{

    insertContacto(usuario,okUsuario,errorUsuario)
    {
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
            if(response.status===501)
            {
                errorUsuario("El mail ya existe");
            }
            if (response.status===200)
            {  
                okUsuario();
            }

        }).catch(err => console.error(err));

    };


      logIn(data, log,usuarioMal)
    {
        const endpoint = `${url}${urlLogIn}`;
        console.log("Buscando")
        console.log(data);
       fetch(endpoint,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{ 'Content-Type': 'application/json'},
            body: JSON.stringify(data) // data can be `string` or {object}!
        }).then ((response) => {
            console.log("response",response.status);
            if(response.status===501)
            {
                console.log("entre al 501")
                usuarioMal("Datos incorrectos, intente ");
            }
            if (response.status===200)
            {  
                console.log("entre al 200")
                log('Ingreso el usuario correcto');
               
            }
            //return response.json();
        });/*.then (responseData => {
                console.log(responseData);
            });
            
                console.log("Recibi datos");*/

    };

   
    getProductos(okBusqueda){
        const endpoint = `${url}${urlGetProductos}`;
        //console.log("Buscando")
       fetch(endpoint).then ((response) => {
            console.log("response",response);
            return response.json();
        }).then (responseData => {
                console.log(responseData);
            
                //console.log("Recibi datos");
                okBusqueda(responseData);
                
          
          
          
        });
    }
}

export default new ApiController(); 