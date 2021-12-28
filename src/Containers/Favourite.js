/* eslint-disable camelcase */

import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { fetchFavourites } from '../Redux/Actions/Favourites';

const Favourites = () => {
  const favHouse = useSelector((state) => state.favourites.favourite);
  const auth = useSelector((state) => state.authenticate);
  const dispatch = useDispatch();
  const removeHandler = async (id) => {
    const url = `http://localhost:3001/api/v1/favourites/${id}`;

    await axios.delete(
      url,
      {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      },

      { withCredentials: true },
    );
    const favHouses = favHouse.filter((favourite) => favourite.id !== id);
    dispatch(fetchFavourites(favHouses));
  };

  return (
    <>
      <div className="container " data-testid="favourite">
        <div className="hotelList push">
          {favHouse.map((favourite) => {
            const {
              id, house_name, images, house_description
            } = favourite;
            return (
              <div key={id} className="hotel">
                <div>
                  <Link key={id} className="cards " to={`/houses/${id}`}>
                    <div>
                      <img className="image" src={images} alt={house_name} />
                    </div>
                    <div>
                      <h5 className="title">{house_name}</h5>
                    </div>
                    <div className="info">
                      <p>{house_description}</p>
                      {/* <p>
                        $
                        {price}
                      </p> */}
                    </div>
                  </Link>
                  <button
                    type="button"
                    onClick={() => removeHandler(id)}
                    className="btn btn-primary fav-button"
                  >
                    Remove from favourites
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Favourites;
