/* eslint-disable camelcase */

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../Components/Loading';
import { allHouses } from '../Redux/Actions/houseActions';
import House from '../Components/House';
import '../Styles/house.css';

const HouseList = () => {
  const houses = useSelector((state) => state.house.houses);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const url = 'https://ayecapstonebackend.herokuapp.com/api/v1/houses';
  const myFetch = async () => {
    const response = await axios.get(url, { mode: 'cors' });
    dispatch(allHouses(response.data));
    setLoading(false);
  };

  useEffect(() => {
    myFetch();
  }, []);

  if (loading) {
    return (
      <main data-testid="loading">
        <Loading />
      </main>
    );
  }

  return (
    <>
      <div className="container">
        <div className="hotelList">
          {houses.map((house) => {
            const {
              id, house_name, house_description, images,
            } = house;
            return (
              <House
                key={id}
                id={id}
                house_name={house_name}
                house_description={house_description}
                images={images}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HouseList;
