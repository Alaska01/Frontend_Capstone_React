import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFavourites } from '../Redux/Actions/Favourites';

const FetchFav = () => {
  const auth = useSelector((state) => state.authenticate);
  const dispatch = useDispatch();
  const url = 'https://ayecapstonebackend.herokuapp.com/api/v1/favourites';

  const fetchhandler = () => {
    axios
      .get(
        url,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        },
        { withCredentials: true },
      )
      .then((res) => {
        dispatch(fetchFavourites(res.data));
      });
  };

  return (
    <div>
      <ul
        role="presentation"
        className="navbar-nav"
        onKeyDown={fetchhandler}
        onClick={fetchhandler}
      >
        Favourites
      </ul>
    </div>
  );
};

export default FetchFav;
