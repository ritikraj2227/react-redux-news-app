import { useDispatch } from "react-redux";
import { fetchNews } from "../features/newsSlice";

export default function Navbar() {
	const dispatch = useDispatch();

	const handleCategoryClick = (category) => {
		dispatch(fetchNews({ category }));
	};

	return (
		<nav
			className="navbar navbar-expand-lg bg-dark fixed-top"
			data-bs-theme="dark">
			<div className="container-fluid">
				<h3 className="navbar-brand text-light">NewsMonkey</h3>
				<button
					className="navbar-toggler bg-light"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<button
								className="btn btn-link active text-decoration-none text-light"
								onClick={() => handleCategoryClick("general")}>
								General
							</button>
						</li>
						<li className="nav-item">
							<button
								className="btn btn-link active text-decoration-none text-white-50"
								onClick={() => handleCategoryClick("sports")}>
								Sports
							</button>
						</li>

						<li className="nav-item">
							<button
								className="btn btn-link active text-decoration-none text-white-50"
								onClick={() => handleCategoryClick("technology")}>
								Technology
							</button>
						</li>
						<li className="nav-item">
							<button
								className="btn btn-link active text-decoration-none text-white-50"
								onClick={() => handleCategoryClick("science")}>
								Science
							</button>
						</li>
						<li className="nav-item">
							<button
								className="btn btn-link active text-decoration-none text-white-50"
								onClick={() => handleCategoryClick("business")}>
								Business
							</button>
						</li>
						<li className="nav-item">
							<button
								className="btn btn-link active text-decoration-none text-white-50"
								onClick={() => handleCategoryClick("entertainment")}>
								Entertainment
							</button>
						</li>
						<li className="nav-item">
							<button
								className="btn btn-link active text-decoration-none text-white-50"
								onClick={() => handleCategoryClick("health")}>
								Health
							</button>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
