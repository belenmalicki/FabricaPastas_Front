import {Component} from 'react';

const url ="http://localhost:3000/";
const urlInsertContacto="insertContacto";
const urlLogIn = "login";
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


      logIn(data, UsuarioMal, OkIngresar)
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
            console.log("response",response);
            if(response.status===501)
            {
                UsuarioMal("Datos incorrectos, intente nuevamente");
            }
            if (response.status===200)
            {  
                OkIngresar('Ingreso correcto');
            }
            return response.json();
        }).then (responseData => {
                console.log(responseData);
            });
            
                console.log("Recibi datos");

    }
}

export default new ApiController(); 