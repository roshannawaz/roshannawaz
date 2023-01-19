app.js
import { Fragment } from "react";
import Student from "./Student";

function App(){
  const data= [
    {
      id: 'e1',
      name:'mohith',
      addresss: 'banglore'
    },

    {
      id: 'e2',
      name:'laughter',
      address:'manglore'
    },
  ]
  return (
    <Fragment>{
      data.map((item, i)=>(
        <Student key={i} id={item.id} name={item.name} address={item.address} />
        ))
      }
      </Fragment>

  )
}

export default App;

index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Student from './Student';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Student />
    <App />
  </React.StrictMode>
);

student.js
import { Fragment } from "react";

function Student(props){
    return (
        <Fragment>
        <h3>Student ID: {props.id}</h3>
        <h3>Student Name: {props.name}</h3>
        <h3>Student Address: {props.address}</h3>
        <hr/>
        </Fragment>
    )
}

export default Student;

