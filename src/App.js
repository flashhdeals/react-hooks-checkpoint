import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import MoviesList from "./pages/movies-list";
import Navigation from "./components/menu/Navigation";
import MovieDetails from "./pages/movies/movie-details";
function App() {
	useEffect(() => {
		document.title = "React Hooks Checkpoint";
		return () => {
			// cleanup
		};
	}, []);
	return (
		<React.Fragment>
			<Router>
				<Navigation />
				<div className="container">
					<Switch>
						<Route path="/" exact component={() => <Home />} />
						<Route path="/movies-list" component={() => <MoviesList />} />
						<Route path="/movie-details/:movieId" component={(props) => <MovieDetails {...props} />} />
					</Switch>
				</div>
			</Router>
		</React.Fragment>
	);
}

export default App;
