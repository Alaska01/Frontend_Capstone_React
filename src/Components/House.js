import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { fetchFavourites } from '../Redux/Actions/Favourites';
import '../Styles/house.css';

const House = (props) => {
  const dispatch = useDispatch();
  const {
    /* eslint-disable camelcase */
    id, house_name, images, house_description,
  } = props;
  const favHouse = useSelector((state) => state.favourites.favourite);

  const isFav = (houseId) => favHouse.map((fav) => fav.id).includes(houseId);

  const auth = useSelector((state) => state.authenticate);
  const addFavouriteHandler = async () => {
    const url = 'https://ayecapstonebackend.herokuapp.com/api/v1/favourites';
    await axios.post(
      url,

      { house_id: id },

      {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      },

      { withCredentials: true },
    );
    const favs = favHouse.slice(0);
    dispatch(fetchFavourites([...favs, props]));
  };

  return (
    <div className="hotel" data-testid="hotel-card">
      <Link to={`/houses/${id}`} className="cards">
        <div className="img">
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

      {auth.token && (
        <div>
          {!isFav(id) ? (
            <button
              type="button"
              className="btn btn-primary"
              onClick={addFavouriteHandler}
            >
              Add to favorites
            </button>
          ) : (
            <button type="button" className="btn btn-secondary disabled">
              Remove Favourite
            </button>
          )}
        </div>
      )}
    </div>
  );
};

House.propTypes = {
  id: PropTypes.number.isRequired,
  house_name: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
  house_description: PropTypes.string.isRequired,
};
export default House;
