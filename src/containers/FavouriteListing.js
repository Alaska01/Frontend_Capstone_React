import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setHouses } from '../redux/actions/favouriteActions';
import HouseComponent from './FavouriteComponent';

const FavouriteListing = () => {
  const houses = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchFavourites = async () => {
    const response = await axios
      .get('http://localhost:3001/api/v1/favourites')
      .catch((err) => {
        console.log('Err', err);
      });
    dispatch(setFavourites(response.data));
  };

  useEffect(() => {
    fetchFavourites();
  }, []);
  console.log(favourites);
  console.log('Favourites: ', favourites);

  return (
    <div className="ui grid container">
      <FavouriteComponent />
    </div>
  );
};

export default FavouriteListing;
