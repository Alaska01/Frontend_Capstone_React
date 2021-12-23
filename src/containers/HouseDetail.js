import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectedHouse,
  removeSelectedHouse,
} from '../redux/actions/houseActions';

const HouseDetail = () => {
  const house = useSelector((state) => state.house.houseDetail);
  console.log(house);
  const {
    id, house_description: houseDescription, house_name: houseName,
  } = house;
  const { houseId } = useParams();
  const dispatch = useDispatch();
  console.log(houseId);
  const fetchHouseDetail = async () => {
    const response = await axios.get(`http://localhost:3001/api/v1/houses/${houseId}`)
      .catch((err) => {
        console.log('Err ', err);
      });
    console.log(response.data);
    dispatch(selectedHouse(response.data));
  };

  useEffect(() => {
    if (houseId && houseId !== '') fetchHouseDetail();
    return () => {
      dispatch(removeSelectedHouse());
    };
  }, [houseId]);

  return (
    <div>
      {
                Object.keys(house).length === 0 ? (<div> ...loading </div>) : (

                  <div className="jack">
                    <div className="hey">
                      {/* <img className="ui fluid image" src={image} alt="api data call" /> */}
                    </div>
                    <div className="column rp">
                      {/* <img src={image} alt='image' /> */}
                      <h1>{id}</h1>
                      <h1>{houseName}</h1>
                      <h3>{houseDescription}</h3>
                    </div>
                  </div>
                )
}
    </div>
  );
};

export default HouseDetail;
