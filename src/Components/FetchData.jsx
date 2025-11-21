/* eslint-disable no-unused-vars */
import React from 'react';
import UseFetch from './UseFetch'; // Import the custom hook
import './FetchData.css';

const FetchData = () => {
  // Use the custom hook to fetch data from fruit.json
  const [data] = UseFetch('./fruit.json');
  
  return (
    <>
      <h1 className='useFetch_heading'>Use Fetch Custom Hook</h1>
      {data ? (
        <ul className='list_data_main'>
          {data.map((e, index) => (
            <li key={index} className='list_data'>
              <h3>{e.name}</h3>
              <img src={e.image} alt={e.name} width="200" />
              <p><strong>Importance: </strong>{e.importance}</p>
              <p><strong>Benefits: </strong>{e.benefits}</p>
              <p><strong>Time to eat: </strong>{e.best_time_to_intake}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Carregando dados,aguarde...</p>
      )}
    </>
  );
};

export default FetchData;