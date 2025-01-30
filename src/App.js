import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import ClassComponent from './Component/ClassComponent';
import DigitalClock from './Component/DigitalClock';
import FunctionComponent from './Component/FunctionComponent';
import From1 from './Component/From1';
import LifeCycle from './Component/LifeCycle';
import Abc from './Component/AbC';
//import ClassComponent from './Component/ClassComponent';
//import DigitalClock from './Component/DigitalClock';
//import FunctionComponent from './Component/FunctionComponent';
//import From1 from './Component/From1';
import Array from './Praveen/Array';
import Demo from './Praveen/Demo';
import FunctionComponent1 from './Praveen/FunctionComponent1';
import DemoFunction from './Praveen/DemoFunction';
import ClickEvent from './Dhiva/ClickEvent';
import Forms from './Dhiva/Forms';
import Increament from './Dhiva/ForLoop/Increament';
import Decreament from './Dhiva/ForLoop/Decreament';
import OddNumber from './Dhiva/ForLoop/OddNumber';
import EvenNumber from './Dhiva/ForLoop/EvenNumbers';
import UseState from './Dhiva/hooks/UseState';

function App() {
  return (
    <div className="App">
  <BrowserRouter>
 <Routes>
 <Route path='/array' element={<Array/>}/> 
 <Route path="/clickevent" element={<ClickEvent/>}/>
 <Route path='/demo' element={<Demo/>}/>
 <Route path='/function' element={<FunctionComponent1/>}/> 
 <Route path='/demofun' element={<DemoFunction/>}/> 
 <Route path='/forms' element={<Forms/>}/>
 <Route path='/Increament' element={<Increament/>}/>
 <Route path='/decreament' element={<Decreament/>}/>
 <Route path='/oddnumber' element={<OddNumber/>}/>
 <Route path='/evennumbers' element={<EvenNumber/>}/>
 <Route path='/usestate' element={<UseState/>}/>
  {/* <Route path='/abc' element={<UseEffect/>}/>
 
  <Route path='/' element={<SignInEvent/>}/>
  <Route path='/abcd' element={<AbC/>}/>
  <Route path='/fun' element={<FunctionComponent/>}/>
  <Route path='/forms' element={<Forms/>}/>
  <Route path='/palin' element={<Palindrome/>}/>
  <Route path='Fib' element={<Fibonaccai/>}/> 
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
