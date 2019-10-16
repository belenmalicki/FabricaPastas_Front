import {Component} from 'react';

const url ="http://localhost:3000/";
const urlInsertContacto="insertContacto";
class ApiController extends Component
{
   
    insertContacto(usuario)
    {
        console.log("guardo contacto",usuario);
        
        
        const endpoint = `${url}${urlInsertContacto}`;
        console.log("Guardando");
            fetch (endpoint,{
            method:'POST',
            mode:"cors",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(usuario)
        }).then ((response) => {
            console.log("response");
            console.log(response);
            return response.json();
           
        }).catch(err => console.error(err));
        
    }
}

export default new ApiController();