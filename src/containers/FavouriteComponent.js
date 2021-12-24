import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const FavouriteComponent = () => {
  const favourites = useSelector((state) => state.allFavourites.favourites);
  console.log(favourites);
  const renderList = favourites.map((favourite) => {
    const { id, user_id: userID, house_id: houseID } = favourites;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/favourites/${id}`}>
          <div className="ui link cards">
            <div className="card">
              {/* <div className="image"> <img src={image} alt={title}/> </div> */}
              <div className="content">
                <div className="header">{houseID}</div>
                {/* <div className="meta price">{houseDescription}</div> */}
                {/* <div className="meta" >{category}</div> */}
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <>
      {renderList}
    </>
  );
};

export default FavouriteComponent;
