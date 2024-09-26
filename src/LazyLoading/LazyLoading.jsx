import React, { Suspense, lazy } from 'react'; 
 
// Use React.lazy to dynamically import the component 
const LazyComponent = React.lazy(() => import('./DigitalClock')); 
 // React.Lazy and Suspence, Loading is a keyword for Lazyloading and code splitting.
function LazyLoading() { 
  return ( 
    <div> 
      <h1>My App</h1> 
      <Suspense fallback={<div>Loading...</div>}> 
        <DigitalClock/> 
      </Suspense> //wrapping
    </div> 
  ); 
} 
 
export default LazyLoading; 
 
//()
//</> 