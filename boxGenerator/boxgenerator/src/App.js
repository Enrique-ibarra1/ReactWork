import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from './components/box';

function App() {
  const [form, setForm] = useState("");
  const[boxes, setBoxes] =  useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let box = {
      color: form
    }
    //set boxes takes the original boxes and adds the new box at the end of the array.
    setBoxes(oldboxes => [...oldboxes, box]);
    setForm("");
  }
  const destroyBox = (e, idx) => {
    e.preventDefault();
    setBoxes([
      ...boxes.splice(0,idx)
    ].concat(boxes.splice(idx + 1)))
  }
  return (
    <div className="App">
      <form  className="col-5 mx-auto" onSubmit= {(e) => handleSubmit(e)}>
        <div className="form-group">
          <label>Color:</label>
          {/* //input value must be binded to form as such: */}
          <input value={form} type="text" onChange={(e) => setForm(e.target.value)}/>
        </div>
        <input type="submit" value="Add Box" className="btn btn-danger btn-outline-dark"></input>
      </form>
      <div className="row-3 justify-content-around">
        {
          boxes.map((box,idx) => {
            return <Box color={box.color} key={idx} removeBox={destroyBox} idx={idx}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
