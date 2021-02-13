import React from 'react';

import Home from './pages/Home';
import Detail from './pages/Detail';

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  return (    

    <Router>
      <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/detail/:id/:limit" component={Detail} />
      </div>
    </Router>

  );
}

export default App;
