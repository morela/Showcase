// import { useState, useEffect } from "react";
import useSWR from "swr";

import canvasScript from "../canvas";
import linkedin from "../img/linkedin.png";
import github from "../img/github.png";

function Frontpage() {
  // const [data, setData] = useState([]);

  const linkedinUrl = "https://linkedin.com/in/bartoszkuzminski/";
  const githubUrl = "https://github.com/morela";

  const url = "https://showcase-server-heroku.herokuapp.com/personalInfo";

  const { data: result, error } = useSWR(url);
  if (error) return <h1>Something went wrong!</h1>;
  if (!result) return <h1>Loading...</h1>;

  // I stay commented code only to show second option of getting data but without caching.
  // const getData = async () => {
  //   const dataFromServer = await fetchData();
  //   setData(dataFromServer);
  // };
  // getData();

  // const fetchData = async () => {
  //   const res = await fetch(url);
  //   const data = await res.json();
  //   return data;
  // };

  return (
    <>
      <canvas id="world" src="canvasScript"></canvas>
      {result &&
        result.map((data) => (
          <div key={data.id} className="main">
            <div className="mainBox">
              <div className="title">
                <h1>{data.contactName}</h1>
                <a href={"mailto:" + data.email}>
                  <h3>contact</h3>
                </a>
              </div>
              <div className="icons">
                <a href={githubUrl} target="_blank" rel="noreferrer">
                  <img src={github} alt="github" />
                </a>

                <a href={linkedinUrl} target="_blank" rel="noreferrer">
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
