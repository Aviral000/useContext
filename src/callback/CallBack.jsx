import React, { useCallback, useState } from 'react'

export default function CallBack() {
  const [value, setValue] = useState(false);
  const [data, setData] = useState([]);

  const handleSubmit = useCallback(() => {
    setValue(!value);
  }, [setValue, value]);

  const ApiRequest = useCallback(async () => {
    try {
      const response = await fetch("https://newsdata.io/api/1/news?apikey=pub_43997e7f22694a9bf4173269374819de2fc48&category=sports");
      const result = await response.json();
      setData(result.results);
    } catch (error) {
      alert(error);
    }
  }, []);

  const handleApi = useCallback(async () => {
    ApiRequest();
  }, [ApiRequest])

  console.log(data);

  return (
    <div>
      {value ? (
        <div>
          <h3>CallBack successfully worked</h3>
          <button type='button' onClick={handleApi}>Api</button>
          {data.map((ele) => (
            <div style={{ width: "50vw", height: "60vh" }}>
                <li key={ele.title}>{ele.title}</li>
                <img src={ele.image_url} alt="" style={{ width: "100%", height: "30vh" }} />
            </div>
          ))}
        </div>
      ) : (
        <button type='button' onClick={handleSubmit}>Show</button>
      )}
    </div>
  )
}