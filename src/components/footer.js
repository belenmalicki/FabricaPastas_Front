import React, {Component} from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';


const Footer=() =>{
  return (
    <div>
      <footer className='footer is-primary' id="footer" style={{color:'#f3f3eb', textAlign:'center'}}>
        <div class="table-content">
          <div class="row-content">
            <div class="box-content">
              <div style={{textAlign:'center', fontSize:'12px', marginTop:'8px', fontFamily:'Quicksand' }}>
                <p>©Los muchachos <br/>
                  <a href='https://www.facebook.com/'  style={{fontSize:'small',color:'#f3f3eb'}}> <FacebookIcon /> </a>  
                  <a href='https://www.instagram.com/' style={{fontSize:'small',color:'#f3f3eb'}}>  <InstagramIcon  /> </a>   
                </p> 
              </div>
            </div>
          </div>
        </div>   
      </footer> 
    </div>
  );
};

export default Footer;