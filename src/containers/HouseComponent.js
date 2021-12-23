import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const HouseComponent = () => {
  const houses = useSelector((state) => state.allHouses.houses);
  console.log(houses);
  const renderList = houses.map((house) => {
    const { id, house_description: houseDescription, house_name: houseName } = house;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/houses/${id}`}>
          <div className="ui link cards">
            <div className="card">
              {/* <div className="image"> <img src={image} alt={title}/> </div> */}
              <div className="content">
                <div className="header">{houseName}</div>
                <div className="meta price">{houseDescription}</div>
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

export default HouseComponent;
