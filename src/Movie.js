import React, { useState, useEffect } from "react";

import Axios from "axios";
import Navbar from "./Navbar.js";

const Movie = () => {
  const [daftarMovie, setDaftarMovie] = useState([]);
  useEffect(() => {
    if (inputSearch === "") {
      getData();
    }
  }, []);

  const getData = () => {
    Axios.get(`http://backendexample.sanbercloud.com/api/movies`).then(
      (res) => {
        setDaftarMovie(res.data);
      }
    );
  };

  const [inputTitle, setTitle] = useState("");
  const [inputDescription, setDescription] = useState("");
  const [inputYear, setYear] = useState(2020);
  const [inputDuration, setDuration] = useState(120);
  const [inputGenre, setGenre] = useState("");
  const [inputRating, setRating] = useState(0);
  const [inputImage, setImage] = useState("");
  const [inputSearch, setSearch] = useState("");

  const handleChange = (event) => {
    let typeOfInput = event.target.name;
    switch (typeOfInput) {
      case "title": {
        setTitle(event.target.value);
        break;
      }
      case "description": {
        setDescription(event.target.value);
        break;
      }
      case "year": {
        setYear(event.target.value);
        break;
      }
      case "duration": {
        setDuration(event.target.value);
        break;
      }
      case "genre": {
        setGenre(event.target.value);
        break;
      }
      case "rating": {
        setRating(event.target.value);
        break;
      }
      case "image": {
        setImage(event.target.value);
        break;
      }
      default: {
        break;
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post(`http://backendexample.sanbercloud.com/api/movies`, {
      title: inputTitle,
      description: inputDescription,
      year: inputYear,
      duration: inputDuration,
      genre: inputGenre,
      rating: inputRating,
      image_url: inputImage,
    }).then((res) => {
      getData();
    });
  };

  const handleEdit = (id) => {
    Axios.put(`http://backendexample.sanbercloud.com/api/movies/${id}`, {
      title: inputTitle,
      description: inputDescription,
      year: inputYear,
      duration: inputDuration,
      genre: inputGenre,
      rating: inputRating,
      image_url: inputImage,
    }).then((res) => {
      getData();
    });
  };

  const handleDelete = (id) => {
    Axios.delete(`http://backendexample.sanbercloud.com/api/movies/${id}`).then(
      (res) => {
        getData();
      }
    );
  };
  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
  };
  const handleSearch = () => {
    for (var i = 0; i < daftarMovie.length; i++) {
      if (daftarMovie[i].title === inputSearch) {
        setDaftarMovie([daftarMovie[i]]);
        console.log(daftarMovie);
      }
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <form onSubmit={handleSearch}>
        <div style={{ margin: "auto", textAlign: "center", marginTop: "1rem" }}>
          <input
            type="text"
            name="search"
            value={inputSearch}
            onChange={handleChangeSearch}
          />
          <button>search</button>
        </div>
      </form>

      <h1>Daftar Film</h1>
      <table>
        <thead>
          <tr>
            <th>no</th>
            <th>Title</th>
            <th>Description</th>
            <th>Year</th>
            <th>Duration</th>
            <th>Genre</th>
            <th>Rating</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {daftarMovie.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.year}</td>
                <td>{item.duration}</td>
                <td>{item.genre}</td>
                <td>{item.rating}</td>
                <td>
                  <button onClick={() => handleEdit(item.id)} value={index}>
                    Edit
                  </button>
                  &nbsp;
                  <button onClick={() => handleDelete(item.id)} value={index}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h1>Movies Form</h1>
      <form onSubmit={handleSubmit}>
        <label style={{ float: "left" }}>Title:</label>
        <input
          style={{ float: "right" }}
          type="text"
          name="title"
          value={inputTitle}
          onChange={handleChange}
        />
        <br />
        <br />
        <label style={{ float: "left" }}>Description:</label>
        <input
          style={{ float: "right" }}
          type="text"
          name="description"
          value={inputDescription}
          onChange={handleChange}
        />
        <br />
        <br />
        <label style={{ float: "left" }}>Year:</label>
        <input
          style={{ float: "right" }}
          type="text"
          name="year"
          value={inputYear}
          onChange={handleChange}
        />
        <br />
        <br />
        <label style={{ float: "left" }}>Duration:</label>
        <input
          style={{ float: "right" }}
          type="number"
          name="duration"
          value={inputDuration}
          onChange={handleChange}
        />
        <br />
        <br />
        <label style={{ float: "left" }}>Genre:</label>
        <input
          style={{ float: "right" }}
          type="text"
          name="genre"
          value={inputGenre}
          onChange={handleChange}
        />
        <br />
        <br />
        <label style={{ float: "left" }}>Rating:</label>
        <input
          style={{ float: "right" }}
          type="number"
          name="rating"
          value={inputRating}
          onChange={handleChange}
        />
        <br />
        <br />
        <label style={{ float: "left" }}>Image Url:</label>
        <input
          style={{ float: "right" }}
          type="text"
          name="image"
          value={inputImage}
          onChange={handleChange}
        />
        <br />
        <br />
        <div style={{ width: "100%", paddingBottom: "20px" }}>
          <button style={{ float: "right" }}>submit</button>
        </div>
      </form>
    </>
  );
};

export default Movie;
