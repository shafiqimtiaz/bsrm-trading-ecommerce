import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated, userInfo } from "../utils/auth";
import logo from "../Logo.png";

const isActive = (history, path) => {
	if (history.location.pathname === path) {
		return { color: "#ff9900" };
	} else {
		return { color: "grey" };
	}
};

const Menu = ({ history }) => {
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
			<a className="navbar-brand" href="https://shafiqimtiaz.github.io/">
				<img
					className="m-2"
					src={logo}
					width="30"
					height="30"
					alt="https://shafiqimtiaz.github.io/"
				/>
			</a>

			<Link to="/" className="navbar-brand">
				Super Online Store
			</Link>

			<ul className="nav nav-tabs border-0">
				<li className="nav-item">
					<Link className="nav-link" style={isActive(history, "/")} to="/">
						Home
					</Link>
				</li>
				{!isAuthenticated() && (
					<>
						<li className="nav-item">
							<Link
								className="nav-link"
								style={isActive(history, "/login")}
								to="/login"
							>
								Login
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link"
								style={isActive(history, "/register")}
								to="/register"
							>
								Register
							</Link>
						</li>
					</>
				)}

				{isAuthenticated() && (
					<>
						<li className="nav-item">
							<Link
								className="nav-link"
								style={isActive(history, `/${userInfo().role}/dashboard`)}
								to={`/${userInfo().role}/dashboard`}
							>
								Dashboard
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link"
								style={isActive(history, `/cart`)}
								to={`/cart`}
							>
								Cart
							</Link>
						</li>
						<li className="nav-item">
							<span
								className="nav-link"
								style={{ cursor: "pointer", color: "grey" }}
								onClick={() => {
									signout(() => {
										history.push("/login");
									});
								}}
							>
								{" "}
								Log Out
							</span>
						</li>
					</>
				)}
			</ul>
		</nav>
	);
};

export default withRouter(Menu);
