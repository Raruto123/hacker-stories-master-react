import React from "react";


function greeting(title) {
  return title;
};
//strings
const string = "yo";

//number
const number = new Number;

//boolean
const boolean = new Boolean;

//undefined

//null


//bigInt

//symbol

const myElement = React.createElement("h1", null, `Hello ${greeting("hey")}`);

function App() {
  
  return (
      <div>
        {myElement}
        <label>
          test <input type="text"></input>
        </label>
        <h1>{string.length}</h1>
        <h1>{number.toString()}</h1>
        <h1>{console.log(boolean.valueOf())}</h1>
      </div>
  )
}

export default App
