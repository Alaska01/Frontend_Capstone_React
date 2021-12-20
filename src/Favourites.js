import React from 'react';

function Favourite() { 
  React.useEffect(() => {
    fetch('http://localhost:3001/api/v1/favourites')
      .then(results => results.json())
      .then(data => {
        console.log(data);
      });
    }, []);

  return (
    <div>
      <h1>Check Console for Favourites Data</h1>
    </div>
  );
}

export default Favourite;