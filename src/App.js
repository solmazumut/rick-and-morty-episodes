import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';
import {Episodes, Episode} from './pages';


function App() {

  return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Episodes} />
            <Route path="/episode/:id" component={Episode} />
        </Switch>
      </BrowserRouter>
  );
}
export default App;