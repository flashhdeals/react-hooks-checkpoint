import React from "react";
import { AiOutlineFieldTime } from "react-icons/ai";
import { FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function MovieCard(props) {
	function handleClick(e) {
		e.preventDefault();
	}
	const data = props.data;
	return (
		<>
			{data.map((el, index) => {
				return (
					<div className="col-md-4 mb-3 mt-3" key={index}>
						<Link to={`/movie-details/${el.id}`}>
							<div className="card">
								<img src={el.posterUrl} alt="" className="card-img-top" />
								<div className="card-body">
									<h5 className="card-title">{el.title}</h5>
									<p className="card-text">{el.plot}</p>
									<a href="!#" onClick={handleClick} className="btn btn-outline-success btn-md" style={{ width: "100%", textAlign: "left" }}>
										<span>
											<FaUserTie />
										</span>{" "}
										{el.director}
									</a>
									<a href="!#" onClick={handleClick} className="btn btn-outline-danger btn-md mt-2" style={{ width: "100%", textAlign: "left" }}>
										<span>
											<AiOutlineFieldTime />
										</span>{" "}
										{el.runtime} Minutes
									</a>
								</div>
							</div>
						</Link>
					</div>
				);
			})}
		</>
	);
}
