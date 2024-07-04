import './App.css';
import {BrowserRouter,Routes,Route, Form} from 'react-router-dom';

import LoginAbi from './Abinaya/LoginAbi';
import Abc from './Abinaya/Abc';
import SearchBar from './Tests/SearchBar';
import TaskList from './Tests/TaskList';

function App() {
  return (
    <div className="App">
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<SearchBar/>}/>
  <Route path='/abcd' element={<TaskList/>}/>
 </Routes>
 </BrowserRouter>
    </div>
  );
}

export default App;




















//npm i react-router-dom
