import React, { Component } from 'react'


export default class App extends Component {
  constructor() {
    super();
    console.log("constructor");
  }

  componentDidMount() {
    console.log("component Did Mount");
  }

  render(){
    console.log("this is jsx");
    return <h2>COmponent did mount</h2>;
    
  }

}
