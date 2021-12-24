import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HouseDetail from './containers/HouseDetail';
import HouseListing from './containers/HouseListing';
import Header from './containers/Header';
import Login from './containers/Login';
// import ProductListing from './containers/ProductListing';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Login />
        <Routes>
          <Route path="/" exact element={<HouseListing />} />
          {/* <Route exact path="/" element={<ProductListing />} /> */}
          <Route exact path="/houses/:houseId" element={<HouseDetail />} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
