import React from 'react';
class Welcom extends React.Component{
    render(){
      return (
          <div>
      <h1> Hello, {this.props.name} edad: {this.props.age } </h1>

    
    
      </div>);
     }
    }



    export default Welcom;