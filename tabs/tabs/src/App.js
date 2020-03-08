import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Tab from './components/Tab';

function App() {
  const [tabs, setTabs] = useState([
    {name: "tab one", desc: "this is tab one", isSeleted: false},
    {name: "tab two",  desc: "this is tab two", isSeleted: false},
    {name: "tab three",  desc: "this is tab three", isSeleted: false}
  ]);
  const handleClick = (e, idx) => {
    e.preventDefault();
  }
  return (
    <div className="App">
      {
        tabs.map((t,idx) => {
          return <Tab idx={idx} key={idx} name={t.name} onClick={(e, {idx}) => handleClick(e, {idx})}/>
        })
      }
      <p>
        This is where descriptions go
      </p>
    </div>
  );
}

export default App;
