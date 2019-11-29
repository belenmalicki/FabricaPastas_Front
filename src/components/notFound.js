import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import {Link, Redirect} from 'react-router-dom';


class Exitoso extends Component {
  render() {
    return (
      <div class='backLogin' style={{width: window.innerWidth, height: window.innerHeight}}>
        <div class="table-content">
          <div class="row-content">
            <div class="box-content">
              <DialogContent>
                <DialogContentText  id="outlined-dense" style={{fontSize:'42px',marginTop:'30px', marginBottom:'30px'}}>
                    Error 404
                </DialogContentText>
                <DialogContentText  id="outlined-dense" style={{fontSize:'22px',marginTop:'30px', marginBottom:'30px'}}>
                    Página no encontrada
                </DialogContentText>
              </DialogContent>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Exitoso;