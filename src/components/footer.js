import React, {Component} from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import logo1 from './img/logo10.png';



const Footer=() =>{
      return (
        <div>
          <footer className='footer is-primary'   id="footer" style={{color:'#f3f3eb'}}>
              <div className='container'>
                <div className='row'>
                  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 " style={{ textAlign:'rigth', fontSize:'15px',}}>
               
                      
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 " style={{textAlign:'center', fontSize:'12px', marginTop:'8px', fontFamily:'Quicksand' }}>
                  <p>©Los muchachos <br/>
                  <a href='https://www.facebook.com/'  style={{fontSize:'small',color:'#f3f3eb'}}> <FacebookIcon /> </a>    
                  <a href='https://www.instagram.com/' style={{fontSize:'small',color:'#f3f3eb'}}>  <InstagramIcon  /> </a>   
                  </p> 
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 "style={{textAlign:'right', fontSize:'12px', marginTop:'8px'}}>
                     
                  </div>
               </div>
              </div>
              
          </footer> 
        </div>


      );
};

export default Footer;