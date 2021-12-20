import React from 'react';

function User() { 
  React.useEffect(() => {
    fetch('http://localhost:3001/api/v1/users')
      .then(results => results.json())
      .then(data => {
        console.log(data);
      });
    }, []);

  return (
    <div>
      <h1>Check Console for Data for Users Data</h1>
    </div>
  );
}

export default User;