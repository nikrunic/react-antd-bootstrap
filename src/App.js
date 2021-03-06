import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.less';
import Template from './Template/Template';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route exact path="/" render={() => (
               <Redirect to="/home" />
            )}/> */}
        <Route path="/" component={Template} />
      </Switch>
    </div>
  );
}

export default App;
