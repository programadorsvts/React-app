import { BrowserRouter as Router, Switch,Route,Link } from "react-router-dom";
import { Suspense } from 'react';
import home from './media/pages/home';
import observatorio from './media/pages/observatorio';
import revistadigital from './media/pages/revistadigital'

import './media/style/personalizado.css' 



function App() {

  return (
   
     <Router>

      <Suspense fallback={<p>.............Loading</p>}>

            <NavBar></NavBar>
          <Switch>

                <Route  exact path="/home" component={home}/>

                <Route  exact path="/observatorio" component={observatorio}/>
     
                 <Route  exact path="/revistadigital" component={revistadigital}/>
          
          </Switch>
            
      </Suspense>

     </Router>
      
          
  );
}

export default App;
