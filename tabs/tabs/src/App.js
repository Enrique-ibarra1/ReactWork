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
    const [desc, setDesc] = useState("");

    const handleClick = (e, idx) => {
      e.preventDefault();
      tabs.forEach((tab, i) => {
        if(idx === i){
          //!= toggle must not be used here 
          tab.isSeleted = true;
          setDesc(tab.desc);
          setTabs(oldtabs => [...oldtabs]);
        }
      else if( idx !== i){
        tab.isSeleted = false;
        setTabs(oldtabs => [...oldtabs]);
      }
    })
    }
  return (
    <div className="App">
      {
        tabs.map((t,idx) => {
          return <Tab isSelected={t.isSelected} idx={idx} key={idx} name={t.name} handleClick={handleClick}/>
        })
      }
      <p>
      {desc}
      </p>
    </div>
  );
} 
export default App;
