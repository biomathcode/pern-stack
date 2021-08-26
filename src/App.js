import React from 'react';
import {BrowserRouter as Router, Link , Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import UpdatePage from './pages/UpdatePage.jsx';
import Restaurant from './pages/Restaurant'
import {RestaurantContextProvider} from './context/RestaurantContext'
import './App.css'
function App() {

  return (
    <div className="App">
      <RestaurantContextProvider>
      <Router>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/restaurants/:id/update" component={UpdatePage}/>
        <Route exact path="/restaurants/:id" component={Restaurant}/>
        </Switch>
      </Router>
      </RestaurantContextProvider>

    </div>
  );
}

export default App;
