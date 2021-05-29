import React, { useState, useEffect } from "react";
import moviesList from "../../assets/movies";
import MovieCard from "./MovieCard";
import { Tabs, Accordion, Card, Button, Modal } from "react-bootstrap";

export default function MovieList() {
  const [mList, setMList] = useState(moviesList);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("title");
  const [movieTitle, setMovieTitle] = useState("");
  const [moviePoster, setMoviePoster] = useState(null);
  const [moviePlot, setMoviePlot] = useState("");
  const [movieDirector, setMovieDirector] = useState("");
  const [movieRuntime, setMovieRuntime] = useState(0);
//   const [movieItem, setMovieItem] = useState({});
  const [status, setStatus] = useState(false);

  useEffect(() => {
      console.log("Movie Added, Reloaded");
    //   Return to clean before nav to another page
    //   return(setMovieItem({}))
  }, [setMList]);

  function filterData(data) {
    const newList = data.filter((el) => {
      if (searchTerm) {
        if (filterBy === "title") {
          if (el.title.toLowerCase().includes(searchTerm)) {
            return data;
          }
        } else if (filterBy === "runtime") {
          if (el.runtime.toLowerCase().indexOf(searchTerm) > -1) {
            return data;
          }
        }
      } else {
        return data;
      }
    });
    return newList;
  }

  function handleSelectChange(e) {
    setFilterBy(e.target.value);
  }
  function handleFileUpload(e) {
    setMoviePoster(e.target.files[0]);
  }
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  function handleSubmit(e) {
    let movieItem = {
      id: getRandomInt(1000),
      title: movieTitle,
      year: "",
      runtime: movieRuntime,
      genres: [],
      director: movieDirector,
      actors: "",
      plot: moviePlot,
      posterUrl: `/${moviePoster.name}`,
    };
    setMList([...mList, movieItem]);
    setStatus(true);
    // setMovieItem(movieItem);
    e.preventDefault();
  }
  return (
    <div className="row mt-5">
      <div className="col-md-12">
        <Tabs defaultActiveKey="addMovie">
          <div eventKey="addMovie" title="Add Movie" className="mt-3">
            <form className="form-horizontal" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="movieTitle">
                  <b>Title</b>
                </label>
                <input
                  type="text"
                  name="movieTitle"
                  className="form-control"
                  value={movieTitle}
                  onChange={(e) => setMovieTitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="movieTitle">
                  <b>Poster</b>
                </label>
                <input
                  type="file"
                  name="moviePoster"
                  className="form-control"
                  onChange={handleFileUpload}
                />
              </div>
              <div className="form-group">
                <label htmlFor="movieTitle">
                  <b>Plot</b>
                </label>
                <textarea
                  name="moviePlot"
                  className="form-control"
                  value={moviePlot}
                  onChange={(e) => setMoviePlot(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="movieTitle">
                  <b>Director</b>
                </label>
                <input
                  type="text"
                  name="movieDirector"
                  className="form-control"
                  value={movieDirector}
                  onChange={(e) => setMovieDirector(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="movieTitle">
                  <b>RunTime</b>
                </label>
                <input
                  type="number"
                  step="any"
                  name="movieRuntime"
                  className="form-control"
                  value={movieRuntime}
                  onChange={(e) => setMovieRuntime(e.target.value)}
                />
              </div>
              <div className="form-group">
                <button className="btn btn-warning" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div eventKey="searchMovie" title="Search" className="mt-3">
            <div className="form-group">
              <label>
                <b htmlFor="searchTerm">Search</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="searchTerm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>
                <b>Filter</b>
              </label>
              <select
                name="filterBy"
                className="form-control"
                onChange={handleSelectChange}
              >
                <option value="title">Title</option>
                <option value="runtime">RunTime</option>
              </select>
            </div>
          </div>
        </Tabs>
        <div className="row">
          <div className="col-md-12">
            <Accordion>
              <Card>
                <Accordion.Toggle as={Button} eventKey="0">
                  Movies List
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <div className="row">
                    <MovieCard data={filterData(mList)} />
                  </div>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
