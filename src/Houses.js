import React from 'react';

function House() { 
  React.useEffect(() => {
    fetch('http://localhost:3001/api/v1/houses')
      .then(results => results.json())
      .then(data => {
        console.log(data);
      });
    }, []);

  return (
    <div>
      <h1>Check Console for Data Houses</h1>
    </div>
  );
}

export default House;