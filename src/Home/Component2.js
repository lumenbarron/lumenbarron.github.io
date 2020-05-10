import React from "react";
import {Spring} from 'react-spring/renderprops'

export default function Component2() {
  return (
    <Spring
    from={{opacity : 0 }}
    to={{opacity : 1 }}
    config={{delay: 1000 , duration : 1000}}
    >
      {(props) => (
        <div style={props}>
          <div style={c2style}>
            <h1>Holi</h1>
            <p>Otro componenete d prueba</p>

          </div>
        </div>
      )}
    </Spring>
  );
}

const c2style = {
  background: "magenta",
  color: "white",
  padding: "1.5rem",
};
