import React, { useEffect, useState } from "react";
import './Pixabay.css';
// import "./Psixabay/Pixabay.css";


const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=39413048-bd5faff0bd27764a3d3c547be&q=${search}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((d) => setData(d.hits));
  });
  return (
    <div className="App">
      <nav>
        <div className="navbar">
          <form action="">
            <div className="nav-div">
              <h1>Suaysh</h1>
              <i class="fa-regular fa-bell"></i>
              <p>Explore</p>
              <button className="upload">Upload</button>
            </div>

            <center>
              <br />
              <br />
              <h1>Stunning royalty-free images & royalty-free stock</h1>
              <p>
                Over 4.1 million+ high quality stock images, videos and music
                shared by our talented community.
              </p>
              <input
                className="input"
                placeholder="Search Image"
                type="text"
                onChange={(e) => setSearch(e.target.value)}
              />
            </center>
          </form>
        </div>
        <section>
          {data &&
            data.map((item) => {
              return (
                <img
                  src={item.webformatURL}
                  alt=""
                  height={item.webformatHeight}
                  width={item.webformatWidth}
                />
              );
            })}
        </section>
      </nav>
    </div>
  );
};

export default App;
