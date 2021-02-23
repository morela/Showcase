import { useState, useEffect } from "react";

import canvasScript from "../canvas";
import linkedin from "../img/linkedin.png";
import github from "../img/github.png";

function Frontpage() {
  const [data, setData] = useState([]);
  const linkedinUrl = "https://linkedin.com/in/bartoszkuzminski/";
  const githubUrl = "https://github.com/morela";
  useEffect(() => {
    const getData = async () => {
      const dataFromServer = await fetchData();
      setData(dataFromServer);
    };

    getData();
  }, []);

  // fetch data
  const fetchData = async () => {
    const res = await fetch("http://localhost:5000/personalInfo");
    const data = await res.json();

    return data;
  };

  return (
    <>
      <canvas id="world" src="canvasScript"></canvas>
      {data &&
        data.map((data) => (
          <div key={data.id} className="main">
            <div className="mainBox">
              <div className="title">
                <h1>{data.contactName}</h1>
                <a href={"mailto:" + data.email}>
                  <h3>contact</h3>
                </a>
              </div>
              <div className="icons">
                <a href={githubUrl} target="_blank">
                  <img src={github} alt="github" />
                </a>

                <a href={linkedinUrl} target="_blank">
                  <img src={linkedin} alt="linkedin" />
                </a>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default Frontpage;
