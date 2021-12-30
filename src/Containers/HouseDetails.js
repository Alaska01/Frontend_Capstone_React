/* eslint-disable camelcase */

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import Loading from '../Components/Loading';
import { singleHouse } from '../Redux/Actions/houseActions';
import '../Styles/detail.css';

const HouseDetails = () => {
  const details = useSelector((state) => state.detail.details);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { id } = useParams();
  const url = `http://localhost:3001//api/v1/houses/${id}`;

  const fetchDetails = async () => {
    const response = await axios.get(url, { mode: 'cors' });
    dispatch(singleHouse(response.data));
    setLoading(false);
  };

  useEffect(() => {
    fetchDetails();
  }, [id]);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  const {
    house_name, house_description, images,
  } = details;
  return (
    <div className="container">
      <div>
        <h3>
          Name:
          {house_name}
        </h3>
        <p>
          Description:
          {house_description}
        </p>
        {/* <p>
          Price: $
          {price}
        </p> */}
        <img src={images} alt={house_name} className="detail-img" />
      </div>
      {/* <div className="description">
        <h3 className="text-decoration-underline">Hotel Description</h3>
        <p>{description}</p>
      </div> */}
    </div>
  );
};

export default HouseDetails;
