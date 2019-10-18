import {Component} from 'react';

const url ="http://localhost:3000/";
const urlInsertContacto="insertContacto";
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
        
    }
}

export default new ApiController();