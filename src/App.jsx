import React from "react";


function greeting(title) {
  return title;
}
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

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  }, 
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  }, 
];

function App() {

  const arrayLambda = ["yes", "no", "or"];
  // const inutile = "React";
  
  return (
      <div>
        {myElement}
        <Search></Search>
        <h1>{string.length}</h1>
        <h1>{number.toString()}</h1>
        <h1>{console.log(boolean.valueOf())}</h1>
        <ul>
          {arrayLambda.map((lambda) => lambda + "coraman")}
        </ul>
        <List></List>
      </div>
  )
}

function List() {
  return(
    <ul>
    {list.map((item, index) => (
    <div key={index}>
      <li>{item.title}</li>
      <a href="">{item.url}</a>
      <p>{item.num_comments}</p>
      <p>{item.points}</p>
    </div>))}
  </ul>
  )
}

function Search() {
  return (
  <label>
    Search <input type="text"></input>
  </label>
  )
}

export default App
