/* eslint-disable no-unused-vars */
import React from 'react';
import UseFetch from './UseFetch';
import './FetchData.css';

const FetchData = () => {
  // Agora recebe todos os estados
  const [data, loading, error] = UseFetch('/fruit.json');
  
  return (
    <>
      <h1 className='useFetch_heading'>Use Fetch Custom Hook</h1>
      
      {loading && <p>Carregando dados, aguarde...</p>}
      
      {error && (
        <div className="error">
          <p>Erro ao carregar dados: {error}</p>
          <p>Verifique se o arquivo fruit.json existe na pasta public/</p>
        </div>
      )}
      
      {data && !loading && (
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
      )}
      
      {!data && !loading && !error && (
        <p>Nenhum dado encontrado.</p>
      )}
    </>
  );
};

export default FetchData;