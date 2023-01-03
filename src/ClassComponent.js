import React from "react";

//class component
class ClassComponent extends React.Component {
    render(){   //render method
      return <h1> Class Component - {this.props.title}</h1>
    }
  }

export default ClassComponent ;