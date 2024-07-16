import './App.css';
import {BrowserRouter,Routes,Route, Form} from 'react-router-dom';

import LoginAbi from './Abinaya/LoginAbi';
import Abc from './Abinaya/Abc';
import SearchBar from './Tests/SearchBar';
import TaskList from './Tests/TaskList';
import UseState from './Component/UseState';
import UseEffect from './Component/UseEffect';
import LifeCycle from './Component/LifeCycle';

function App() {
  return (
    <div className="App">
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<UseState/>}/>
  <Route path='/abc' element={<UseEffect/>}/>
  <Route path='/abcd' element={<LifeCycle/>}/>

 </Routes>
 </BrowserRouter>
    </div>
  );
}

export default App;




















//npm i react-router-dom
