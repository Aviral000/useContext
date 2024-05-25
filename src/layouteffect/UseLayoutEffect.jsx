import React, { useEffect, useLayoutEffect, useState } from 'react';

export default function UseLayoutEffect() {
  const [data, setData] = useState([]);

  useLayoutEffect(() => {
    const ApiRequest = async () => {
      try {
        const response = await fetch('https://newsdata.io/api/1/news?apikey=pub_43997e7f22694a9bf4173269374819de2fc48&q=hollywood');
        const result = await response.json();
        setData(result.results);
      } catch (error) {
        alert("error in fetching");
      }
    };
    ApiRequest();
  }, []);

  return (
    <div>
      {data.length > 0 ? (
        data.map((news, idx) => (
          <div key={idx}>{news.title}</div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}