import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './Footer';
import NavBar from './NavBar'
import '../Styles/App.css';
import authenticate from '../Redux/Actions/authenticate';
import HouseList from '../Containers/HouseList';
import HouseDetails from '../Containers/HouseDetails';
import Error from './Error';
import About from './About';
import SignUp from '../Containers/User/SignUp';
import Login from '../Containers/User/login';
import Logout from '../Containers/User/Logout';
import Favourites from '../Containers/Favourite';
import Home from './Home';

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authenticate);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('token'));
    if (user) {
      dispatch(
        authenticate({
          status: true,
          token: user.token,
          username: user.username,
        }),
      );
    } else {
      dispatch(authenticate());
    }
  }, []);
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/houses" element={<HouseList />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/favourites" element={auth.status && <Favourites />} />
          <Route path="/houses/:id" element={<HouseDetails />} />
          <Route exact path="About" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
