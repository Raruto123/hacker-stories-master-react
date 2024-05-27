import React, { useState } from "react";

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



const App = () => { 

  const arrayLambda = ["yes", "no", "or"];
  const stories = [
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

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  console.log(searchTerm);
  // const inutile = "React";
  
  return (
      <div>
        {myElement}
        <Search onChange={handleChange}></Search>
        <h1>{string.length}</h1>
        <h1>{number.toString()}</h1>
        <h1>{console.log(boolean.valueOf())}</h1>
        <ul>
          {arrayLambda.map((lambda) => lambda + "coraman")}
        </ul>
        {/* <List list={stories.filter((story) => story.title === searchTerm)}></List> */}
        <List list={stories}></List>
      </div>
  )
};

const List = (props) => {
  return(
    <ul>
    {props.list.map((item, index) => (
    <div key={index}>
      <Item item={item}></Item>
    </div>
    )
    )
    }
  </ul>
  )
}

function Item(props) {

  return(
    <>
    <li>{props.item.title}</li>
    <a href="">{props.item.url}</a>
    <p>{props.item.num_comments}</p>
    <p>{props.item.points}</p>
    </>
  )
}


const Search = (props) => {

  return (
  <label>
    Search <input type="text" onChange={props.onChange}></input>
  </label>
  )
};

export default App
