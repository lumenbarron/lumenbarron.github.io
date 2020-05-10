import React from "react";
import {Spring, Transition} from 'react-spring/renderprops'

export default function Component1() {
  return (
    <Spring
    from={{opacity : 0, marginTop : -500 }}
    to={{opacity : 1, marginTop : 0 }}
    config={{tension: 210, friction: 10, mass: 7.8, delay: 1000 , duration : 2000 }}

    >
      {(props) => (
        <div style={props}>
          <div style={c1style}>
            <h1>Holi</h1>
            <p>Soy un componenete d prueba</p>
            {/* <Spring
            from={{number : 0}}
            to={{number:10}}
            config={{duration: 2000}}
            >
              {(props) => ( <div style={props}><h1>{props.number.toFixed()}</h1></div>)}
            </Spring> */}
          </div>
        </div>
      )}
    </Spring>
  );
}

const c1style = {
  background: "blue",
  color: "white",
  padding: "1.5rem",
};

const btn ={
  background: "black",
  color: "white",
}

//rfc
//rce
