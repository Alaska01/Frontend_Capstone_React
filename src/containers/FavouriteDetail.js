import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectedFavourite,
  removeSelectedFavourite,
} from '../redux/actions/favouriteActions';

const FavouriteDetail = () => {
  const favourite = useSelector((state) => state.favourite.favouriteDetail);
  console.log(favourite);
  const {
    id, house_id: houseID, user_id: userID,
  } = house;
  const { favouriteId } = useParams();
  const dispatch = useDispatch();
  console.log(favouriteId);
  const fetchFavouriteDetail = async () => {
    const response = await axios.get(`http://localhost:3001/api/v1/favourites/${favouriteId}`)
      .catch((err) => {
        console.log('Err ', err);
      });
    console.log(response.data);
    dispatch(selectedFavourite(response.data));
  };

  useEffect(() => {
    if (favouriteId && favouriteId !== '') fetchFavouriteDetail();
    return () => {
      dispatch(removeSelectedFavourite());
    };
  }, [favouriteId]);

  return (
    <div>
      {
                Object.keys(favourite).length === 0 ? (<div> ...loading </div>) : (

                  <div className="jack">
                    <div className="hey">
                      {/* <img className="ui fluid image" src={image} alt="api data call" /> */}
                    </div>
                    <div className="column rp">
                      {/* <img src={image} alt='image' /> */}
                      <h1>{id}</h1>
                      <h1>{userID}</h1>
                      <h3>{houseID}</h3>
                    </div>
                  </div>
                )
}
    </div>
  );
};

export default FavouriteDetail;
