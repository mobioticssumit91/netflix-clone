import { useState, useEffect } from "react";

import "./App.css";

function App() {

  const [arr, setArr] = useState([{ title: "play cricket", isChecked: false }, { title: "play video game", isChecked: false }, { title: "read book", isChecked: false }]);


  const actDelItem = (itemIndex) => {
    setArr(arr.filter((item, index) => {
      if (!(index == itemIndex)) {
        return item;
      }
    }))
  }
  const actChange =  (event, itemIndex) => {

    setArr(arr.map((item, index) => {
      if (index == itemIndex) {
        item.isChecked = event.target.checked;
      }
      return item;
    }))

  };

  return (
    <div className='App'>
        {arr.map((item, index) => {
          return (<div key={index}><input type="checkbox" name="hobby" value={item.title} onChange={() => actChange(event,index)}></input> {item.title} {item.isChecked ? "ok" : "false"} <span style={{ color: "red", cursor: "pointer", display: item.isChecked == true ? 'block': 'none' }} onClick={() => actDelItem(index)}> X </span> </div>)
        })}
    </div>
  );


}

export default App;
