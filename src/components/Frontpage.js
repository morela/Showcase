import { useState, useEffect } from "react";

function Frontpage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const dataFromServer = await fetchData();
      setData(dataFromServer);
    };

    getData();
  }, []);

  // fetch Tasks
  const fetchData = async () => {
    const res = await fetch("http://localhost:5000/personalInfo");
    const data = await res.json();

    return data;
  };

  return (
    <div>
      {data &&
        data.map((data) => (
          <div key={data.id} className="main" >
            <h1>{data.contactName}</h1>
          </div>
        ))}
    </div>
  );
}

export default Frontpage;
