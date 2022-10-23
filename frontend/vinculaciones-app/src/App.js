
import './media/style/personalizado.css' 

import { BrowserRouter as Router, Switch,Route,Link } from "react-router-dom";
import { Suspense } from 'react';

function App() {

  return (
   
     <Router>

      <Suspense fallback={<p>.............Loading</p>}>

      </Suspense>

     </Router>
      
          
  );
}

export default App;
