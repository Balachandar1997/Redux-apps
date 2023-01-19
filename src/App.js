
import './App.css';
import {BrowserRouter as Router,Route,Switch}  from 'react-router-dom'
import Header from './components/Header';
import ProductListing from './components/ProductListing';
import Productdetails from './components/Productdetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={ProductListing} />
          <Route path="/product/:productId" component={Productdetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
