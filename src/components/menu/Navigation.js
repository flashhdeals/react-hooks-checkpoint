import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand>
				<Link to="/">MOVIES</Link>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link>
						<Link to="/">Home</Link>
					</Nav.Link>
					<Nav.Link>
						<Link to="/movies-list">Movies List</Link>
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default Navigation;
