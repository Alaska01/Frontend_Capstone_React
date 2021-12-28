import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoggedInUser from '../Containers/User/LoggedInUser';
import FetchFav from '../Containers/FetchFav';
import '../Styles/Navbar.css';

const NavBar = () => {
  const auth = useSelector((state) => state.authenticate);

  return (
    <div data-testid="nav">
      <nav className="">
        <div className="container nav">
          <h2 className="">
            <Link to="/" className="logo">
              Find House
            </Link>
          </h2>

          <ul className="">
            <Link to="/houses" className=" ml-4">
              HouseList
            </Link>
          </ul>
          <ul>
            <Link to="/favourites" className=" ml-4">
              <FetchFav />
            </Link>
          </ul>
          {!auth.status && (
            <div className="d-flex">
              <ul className="">
                <Link to="/signup" className=" ml-4">
                  Sign Up
                </Link>
              </ul>
              <ul className="">
                <Link to="/login" className="ml-4">
                  Login
                </Link>
              </ul>
            </div>
          )}

          <ul className="ml-4">{auth.status && <LoggedInUser />}</ul>
          <ul>
            {auth.status && (
              <Link to="/logout" className="ml-4">
                Logout
              </Link>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
