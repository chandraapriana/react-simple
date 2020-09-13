import React, { useState, useEffect } from "react";
import Logo from "./logo.png";
import Axios from "axios";
import Navbar from "./Navbar.js";

export default function Home() {
  const [daftarMovie, setDaftarMovie] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    Axios.get(`http://backendexample.sanbercloud.com/api/movies`).then(
      (res) => {
        console.log(res.data);
        setDaftarMovie(res.data);
      }
    );
  };

  return (
    <>
      <Navbar />
      <section>
        <h1>Daftar Film Film Terbaik</h1>
        {daftarMovie.map((el, i) => {
          return (
            <div className="movie-card">
              <h1>{el.title}</h1>
              <div style={{ display: "inline-block" }}>
                <div style={{ float: "left", width: "50%" }}>
                  <img style={{ width: "100%" }} src={el.image_url} alt="" />
                </div>
                <div style={{ float: "right", width: "50%" }}>
                  <h1>Rating : {el.rating}</h1>
                  <h1>Durasi : {el.duration}</h1>
                  <h1>genre : {el.genre}</h1>
                </div>
              </div>
              <div>
                <p>deskripsi : {el.description}</p>
              </div>
            </div>
          );
        })}
      </section>
      <footer>
        <h5>copyright &copy; 2020 by Sanbercode</h5>
      </footer>
    </>
  );
}
