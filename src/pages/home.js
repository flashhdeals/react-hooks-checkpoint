import React from "react";
import { Link } from "react-router-dom";
function Home() {
	return (
		<React.Fragment>
			<nav aria-label="breadcrumb">
				<ol className="breadcrumb">
					<li className="breadcrumb-item active">
						<Link to="/">
							<a href="/">Home</a>
						</Link>
					</li>
				</ol>
			</nav>
			<h3>Home Page</h3>
		</React.Fragment>
	);
}

export default Home;
