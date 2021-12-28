import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/hotel_room.jpg';
import '../Styles/home.css';

const Home = () => (
  <div>
    <div className="bg">
      <div className="bg-infor">
        <h3>Find a House accomodation anywhere in the world!!!</h3>
        <p>Click Start button below to explore</p>
        <Link to="/houses" className="btn-link">
          <button type="button">START</button>
        </Link>
      </div>
    </div>
    <div className="home-header">
      <p>SIMPLE AND FAST WAY TO BOOK HOTEL ACCOMODATION</p>
      <p>Comfortable Houses from reliable people</p>
    </div>

    <div className="body-info">
      <div className="aside">
        <p>All stats at your finger tips any day any time</p>
        <p>
          You will have full control of your hotel booking, payment and every
          necessary information you need which will save you from numerous
          stress. Your convenience is our priority
        </p>
        <Link to="/houses" className="btn-link">
          <button type="button" className="learn-more">
            Learn More
          </button>
        </Link>
      </div>
      <div>
        <img src={logo} alt="Hotel" className="hotel-img" />
      </div>
    </div>
  </div>
);

export default Home;
