import './App.css';
import {BrowserRouter,Routes,Route, Form} from 'react-router-dom';

import LoginAbi from './Abinaya/LoginAbi';
import Abc from './Abinaya/Abc';
import SearchBar from './Tests/SearchBar';
import TaskList from './Tests/TaskList';
import UseState from './Component/UseState';
import UseEffect from './Component/UseEffect';
import LifeCycle from './Component/LifeCycle';
import From1 from './Component/From1';
import Form2 from './Component/Form2';
import Tv from './Component/Propss';
import Propss from './Component/Propss';

function App() {
  return (
    <div className="App">
  <BrowserRouter>
 <Routes> 
   <Route path='/' element={<UseState/>}/>
  <Route path='/abc' element={<UseEffect/>}/>
  <Route path='/abi' element={<LifeCycle/>}/> 
  <Route path='/' element={<Form2/>}/>

 </Routes>
 </BrowserRouter> 
 {/* <Propss  time= "2 o clock"/>
 <Propss  time= "10 o clock"/>
 <Propss  time= "20 o clock"/> */}
    </div>
  );
}

export default App;




















//npm i react-router-dom
