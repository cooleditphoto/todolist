import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [input, setInput] = useState('');
  const [todolist, setTodolist] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  const handleChange = event => {
    setInput(event.target.value);

  };

  const handleSubmitNewTodo = () => {
    setTodolist([...todolist, input]);
  }

  const handleRemove = (item) => {
    setTodolist(todolist.filter(a => a !== item));
    setCompletedList([...completedList, item]);
  }

  const handleAddBack = (item) => {
    setCompletedList(completedList.filter(a => a !== item));
    setTodolist([...todolist, item]);
  }

  return (
    <div className="App">
      <label>add to-do<input onChange={handleChange} value={input} /></label>
      <button onClick={handleSubmitNewTodo}>add</button>


      <span></span>
      <ul id='newList'>
        {todolist.map((item) => <li><input type="checkbox" onClick={() => handleRemove(item)} /><text>{item}</text></li>)}
        {completedList.map((item) => <li ><input type="checkbox" onClick={() => handleAddBack(item)} /><text style={{ color: 'grey' }}>{item}</text></li>)}

      </ul>
    </div>
  );
}

export default App;
