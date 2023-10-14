import React, { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define your API endpoint
    const apiUrl = '/api/v1';

    // Make a GET request using Axios
    axios.get(apiUrl)
      .then(response => {
        // Log the response to the console
        console.log('API Response:', response.data);
        
        // Set the data state with the response
        setData(response.data);
      })
      .catch(err => {
        // Log any errors to the console
        console.error('API Error:', err);
        
        // Set the error state with the error object
        setError(err);
      });
  }, []);

  return (
    <div className="App">
      {error ? (
        <p>Error: {error.message}</p>
      ) : data ? (
        <div>
          <h1>Data from API:</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
