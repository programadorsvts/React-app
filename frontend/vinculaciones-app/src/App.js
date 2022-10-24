
import './media/style/personalizado.css' 

import { BrowserRouter as Router, Switch,Route,Link } from "react-router-dom";
import { Suspense } from 'react';

function App() {

  return (
   
     <Router>

      <Suspense fallback={<p>.............Loading</p>}>

          <Switch>
                 
                <Route  exact path='/observatorio'>
                  

                </Route>

                <Route  exact path='/revistadigital'>
                  

                </Route>

                <Route  exact path='/'>


                </Route>
          </Switch>
             


      </Suspense>

     </Router>
      
          
  );
}

export default App;
