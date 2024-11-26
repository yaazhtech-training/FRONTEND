import './App.css';
import {BrowserRouter,Routes,Route, Form} from 'react-router-dom';

import ClassComponent from './Component/ClassComponent';
import DigitalClock from './Component/DigitalClock';
import FunctionComponent from './Component/FunctionComponent';
import From1 from './Component/From1';
import LifeCycle from './Component/LifeCycle';
import Abc from './Component/AbC';

function App() {
  return (
    <div className="App">
  <BrowserRouter>
 <Routes> 
  
  {/* <Route path='/abc' element={<UseEffect/>}/>
 
  <Route path='/' element={<SignInEvent/>}/>
  <Route path='/abcd' element={<AbC/>}/>
  <Route path='/fun' element={<FunctionComponent/>}/>
  <Route path='/forms' element={<Forms/>}/>
  <Route path='/palin' element={<Palindrome/>}/>
  <Route path='Fib' element={<Fibonaccai/>}/> */}
  <Route path='/class' element={<ClassComponent/>}/>
  <Route path='/john' element={<DigitalClock/>}/>
  <Route path='/function' element={<FunctionComponent/>}/>
  <Route path='/form' element={<From1/>}/>
  <Route path='/abi' element={<LifeCycle/>}/> 
  <Route path='/abc' element ={<Abc/>}/>

  {/* <Route path='/forms' element={<Forms/>}/> */}

 </Routes>
 </BrowserRouter> 
 {/* <Propss  time= "2 o clock"/>
 <Propss  time= "10 o clock"/>
 <Propss  time= "20 o clock"/> */}
    </div>
  );
}

export default App;


/*

<BrowserRouter>  <>tag/element

<Router>


</Router>

</BrowserRouter>
*/




















//npm i react-router-dom
