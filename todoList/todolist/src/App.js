import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDo from './components/ToDo';

function App() {
  const [todos, setTodos] = useState([]);
  const [form, setForm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    let todo = {
      task: form,
      isChecked: false
    }
    setTodos(oldTodos => [...oldTodos, todo]);
    //reset the form
    setForm("");
  }
  const handleCheck = (e, idx) => {
    e.preventDefault();
    let todo = todos[idx];
    //toggle true or false for is clicked key
    todo.isChecked = !todo.isChecked;
    setTodos(oldTodos => [...oldTodos]);
  }
  const handleDestroy = (e, idx) => {
    e.preventDefault();
    setTodos([...todos.slice(0,idx),...todos.slice(idx+1)]);
  }
  return (
    <div className="App">
      <div>
        {
          todos.map((todo, idx) => {
            return <ToDo key={idx} todo={todo} idx={idx} handleCheck={handleCheck} handleDestroy={handleDestroy}/>
          })
        }
      </div>
      <form className="col-5 mx-auto" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label>To Do Task:</label>
          <input className="form-control col-3 mx-auto" type="text" value={form} onChange={(e) => setForm(e.target.value)} />
        </div>
        <input type="submit" value="Add Todo" className="bn btn-primary"></input>
      </form>
    </div>
  );
}
export default App;
