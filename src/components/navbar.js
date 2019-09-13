import React from 'react';


class Navbar extends React.Component{
render(){
    return( 
        
        <div class = "menu">
        <img src= "/logo10.png" alt = "logo" title = "logo"/>
      <ul class="nav justify-content-end">
    <li class="nav-item">
    <button type="button" class="btn btn-outline-dark">
      <a class="nav-link active" href="https://www.google.com/">Inicio</a>
      </button>
    </li>
    <li class="nav-item">
    <button type="button" class="btn btn-outline-dark">
      <a class="nav-link" href="https://www.youtube.com/">Nuestra Historia</a>
      </button>
    </li>
    <li class="nav-item">
    <button type="button" class="btn btn-outline-dark">
      <a class="nav-link" href="#">Nuestros Productos</a>
      </button>
    </li>
    <li class="nav-item">
    <button type="button" class="btn btn-outline-dark">
      <a class="nav-link" href="#">Contacto</a>
      </button>
    </li>
    <li class="nav-item">
    <button type="button" class="btn btn-outline-dark">
      <a class="nav-link" href="#">Ingresar</a>
      </button>
    </li>
  </ul>
  </div>
  );
 }
} 

export default Navbar;
/*import React, { Component } from 'react'
import Nav from '@bit/react-bootstrap.react-bootstrap.nav'
import Button from '@bit/react-bootstrap.react-bootstrap.button'
import Form from '@bit/react-bootstrap.react-bootstrap.form'
import FormControl from '@bit/react-bootstrap.react-bootstrap.form-control'
import Navbar from '@bit/react-bootstrap.react-bootstrap.navbar'
import ReactBootstrapStyle from '@bit/react-bootstrap.react-bootstrap.internal.style-links';

class Example extends Component {
	render() {
		return (
			<>
				<Navbar bg="dark" variant="dark" style={{ minWidth: 700 }}>
					<Navbar.Brand href="#home">Navbar</Navbar.Brand>
					<Nav className="mr-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#features">Features</Nav.Link>
						<Nav.Link href="#pricing">Pricing</Nav.Link>
					</Nav>
					<Form inline>
						<FormControl type="text" placeholder="Search" className="mr-sm-2" />
						<Button variant="outline-info">Search</Button>
					</Form>
				</Navbar>
				<br />
				<Navbar bg="primary" variant="dark" style={{ minWidth: 700 }}>
					<Navbar.Brand href="#home">Navbar</Navbar.Brand>
					<Nav className="mr-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#features">Features</Nav.Link>
						<Nav.Link href="#pricing">Pricing</Nav.Link>
					</Nav>
					<Form inline>
						<FormControl type="text" placeholder="Search" className="mr-sm-2" />
						<Button variant="outline-light">Search</Button>
					</Form>
				</Navbar>

				<br />
				<Navbar bg="light" variant="light" style={{ minWidth: 700 }}>
					<Navbar.Brand href="#home">Navbar</Navbar.Brand>
					<Nav className="mr-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#features">Features</Nav.Link>
						<Nav.Link href="#pricing">Pricing</Nav.Link>
					</Nav>
					<Form inline>
						<FormControl type="text" placeholder="Search" className="mr-sm-2" />
						<Button variant="outline-primary">Search</Button>
					</Form>
				</Navbar>
			</>
		)
	}
}

export default () => (<div><ReactBootstrapStyle /><Example /></div>) */