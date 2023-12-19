import React, { useState } from "react";
import './Weather.css'

const api = {
  key: "fdeda4a75802775f6290fee8e51d98f0",
  base: "https://api.openweathermap.org/data/2.5/",
};
const App = () => {
  const [search, setSearch] = useState(``);
  const [weather, setWeather] = useState({});

  function searchPress() {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }
  return (
    <div className="main">
      <div className="all">
        <img src="https://cdn.dribbble.com/users/1108089/screenshots/2955959/dribbble.gif" alt="" />
        <br />
      <input placeholder="Enter City" type="text" onChange={(e) => setSearch(e.target.value)}></input>
      <br></br>
      <button onClick={searchPress}>Search</button>
      <section className="sec">
        {typeof weather.main !== "undefined" ? (
          <div className="Cards">
            <p>Place:{weather.name}</p>
            <p>Temp:{weather.main.temp}</p>
            <p>Cloud/Rain:{weather.weather[0].main}</p>
            <p>Description:({weather.weather[0].description})</p>

            {/* <p>{data.weather}.[].description</p> */}
          </div>
        ) : (
          "Not Found"
        )}
      </section>
      </div>
    </div>
  );
};

export default App;