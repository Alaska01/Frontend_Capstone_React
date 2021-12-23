import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setHouses } from '../redux/actions/houseActions';
import HouseComponent from './HouseComponent';

const HouseListing = () => {
  const houses = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchHouses = async () => {
    const response = await axios
      .get('http://localhost:3001/api/v1/houses')
      .catch((err) => {
        console.log('Err', err);
      });
    dispatch(setHouses(response.data));
  };

  useEffect(() => {
    fetchHouses();
  }, []);
  console.log(houses);
  console.log('Houses: ', houses);

  return (
    <div className="ui grid container">
      <HouseComponent />
    </div>
  );
};

export default HouseListing;
