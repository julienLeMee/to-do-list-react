import {useState} from 'react';
import Item from './Item';
import { v4 as uuidv4 } from 'uuid';
// import { Button } from '@mui/material';

export default function Form() {

  const [todo, setTodo] = useState([
    {id: uuidv4(), text: 'Add tasks to do'},
  ]);

  const [input, setInput] = useState();


  const deleteElement = (id) => {
    const filteredState = todo.filter(item => {
      return item.id !== id;
    })
    setTodo(filteredState);
  }

  // const deleteElement = (id) => {
  //   setTodo(todo.filter((item) => item.id !== id));
  // }

  // const addTodo = (e) => {
  //   e.preventDefault();
  //   setTodo([...todo, {id: uuidv4(), text: input}]);
  //   setInput('');
  // }

  const addTodo = (e) => {
    e.preventDefault();
    const newArr = [...todo]

    newArr.push({id: uuidv4(), text: input})
    setTodo(newArr);
    setInput('');
  }

  const linkedInput = (e) => {
    setInput(e);
  }


  return (
    <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
      <form onSubmit={addTodo} className="mb-3">
        <div className="d-flex mt-5 mb-5 mx-2">
          <input
          value={input}
          onChange={e => linkedInput(e.target.value)}
          type="text"
          className="form-control"
          id="todo" />
          <button className="btn btn-primary d-block">Add</button>
        </div>
      </form>
      <ul className="list-group mt-5">
        {todo.map((item) => {
          return (
            <Item
            key={item.id}
            text={item.text}
            id={item.id}
            delFunc={deleteElement}
            />
            )
          })}
      </ul>
    </div>
  )
}

/* <Button variant="contained">Ajouter</Button> */
