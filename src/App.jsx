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

  const [searchTerm, setSearchTerm] = useState("redux");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  console.log(searchTerm);
  // const inutile = "React";
  
  return (
      <div>
        {myElement}
        <Search onChange={handleChange} search={searchTerm}></Search>
        <h1>{string.length}</h1>
        <h1>{number.toString()}</h1>
        <h1>{console.log(boolean.valueOf())}</h1>
        <ul>
          {arrayLambda.map((lambda) => lambda + "coraman")}
        </ul>
        {/* <List list={stories.filter((story) => story.title.toLocaleLowerCase() === searchTerm)}></List> */}
        <List list={stories.filter((story) => story.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))}></List>
        {/* <List list={stories}></List> */}
      </div>
  )
};

const List = ({list}) => {
  return(
    <ul>
    {list.map((item, index) => (
    <div key={index}>
      <Item item={item}></Item>
    </div>
    )
    )
    }
  </ul>
  )
}

function Item({item}) {

  return(
    <>
    <li>{item.title}</li>
    <a href="">{item.url}</a>
    <p>{item.num_comments}</p>
    <p>{item.points}</p>
    </>
  )
}


const Search = ({search, onChange}) => {
  //le destructuring
  //{search, onChange} = props qui permet props.search etc.

  return (
  <label>
    Search <input type="text" onChange={onChange} value={search}></input>
  </label>
  )
};

export default App
