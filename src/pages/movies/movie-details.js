import React from "react";
import moviesList from "../../assets/movies";
import { Link } from "react-router-dom";
import { AiOutlineFieldTime } from "react-icons/ai";
import { FaUserTie } from "react-icons/fa";
function MovieDetails(props) {
	const movieId = props.match.params.movieId;
	const movieItem = moviesList.filter((obj) => obj.id == movieId);
	console.log(JSON.stringify(movieItem, null, 4));
	return (
		<div>
			<nav aria-label="breadcrumb">
				<ol className="breadcrumb">
					<li className="breadcrumb-item">
						<Link to="/">Home</Link>
					</li>
					<li className="breadcrumb-item">
						<Link to="/movies-list">List</Link>
					</li>
					<li className="breadcrumb-item active">
						<Link to={`/movie-details/${movieId}`}>{movieId}</Link>
					</li>
				</ol>
			</nav>
			{movieItem.map((el, index) => (
				<div className="card" key={index}>
					{/* <img src={el.posterUrl} alt="" className="card-img-top" style={{ width: "100%", height: "auto", maxWidth: "250px" }} /> */}
					<div className="card-body">
						<h5 className="card-title">{el.title}</h5>
						<p className="card-text">{el.plot}</p>
						<a className="btn btn-outline-success btn-md" style={{ width: "100%", textAlign: "left" }}>
							<span>
								<FaUserTie />
							</span>{" "}
							{el.director}
						</a>
						<a className="btn btn-outline-danger btn-md mt-2" style={{ width: "100%", textAlign: "left" }}>
							<span>
								<AiOutlineFieldTime />
							</span>{" "}
							{el.runtime} Minutes
						</a>
					</div>
				</div>
			))}
		</div>
	);
}

export default MovieDetails;
