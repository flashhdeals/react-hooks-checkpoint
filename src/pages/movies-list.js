import React from "react";
import FilterAndAddMovie from "../components/movie/FilterAndAddMovie";
import { Link } from "react-router-dom";
function MoviesList() {
	return (
		<div>
			<nav aria-label="breadcrumb">
				<ol className="breadcrumb">
					<li className="breadcrumb-item">
						<Link to="/">Home</Link>
					</li>
					<li className="breadcrumb-item active">
						<Link to="/movies-list">List</Link>
					</li>
				</ol>
			</nav>
			<FilterAndAddMovie />
		</div>
	);
}

export default MoviesList;
