import React, { useState, useCallback } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
      setData(response.data);
    } catch (err) {
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && data.length > 0 && (
        <ul>
          {data.slice(0, 10).map(item => ( 
            <li key={item.id}>
              <img src={item.url} alt={item.title} style={{width:'100px'}}/>
              <p>{item.title}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
