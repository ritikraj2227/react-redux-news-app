import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import News from "../Components/News";
import { fetchNews, setSearchTerm, selectNews, selectNewsStatus, selectNewsError, selectSearchTerm } from "./newsSlice";

const NewsList = () => {
	const dispatch = useDispatch();
	const news = useSelector(selectNews);
	const status = useSelector(selectNewsStatus);
	const error = useSelector(selectNewsError);
	useSelector(selectSearchTerm);
	const [input, setInput] = useState("");
	const [page, setPage] = useState(1);
	const apikey = process.env.REACT_APP_NEWS_API_KEY;

	useEffect(() => {
		dispatch(fetchNews());
	}, [dispatch]);

	const loadMore = () => {
		setPage((prevPage) => prevPage + 1);
		dispatch(fetchNews(`https://newsapi.org/v2/top-headlines?country=in&page=${page}&apiKey=${apikey}`));
	};

	const handleInputChange = (event) => {
		setInput(event.target.value);
	};

	const handleSearch = (event) => {
		event.preventDefault();
		dispatch(setSearchTerm(input));
	};

	

	return (
		<div
			className="container-fluid"
			style={{ marginTop: "70px" }}>
			<form
				onSubmit={handleSearch}
				className="d-flex justify-content-between">
				<div>
					<h2>Top Headline :</h2>
				</div>
				<div className="d-flex">
					<input
						className="form-control me-2"
						type="text"
						placeholder="Search"
						value={input}
						onChange={handleInputChange}
					/>
					<button
						type="submit"
						className="btn btn-primary">
						Search
					</button>
				</div>
			</form>

			{status === "loading" && (
				<div className="d-flex justify-content-center align-items-center">
					<div
						className="spinner-border"
						role="status">
						<strong className="ms-2">Loading...</strong>
					</div>
				</div>
			)}
			{status === "failed" && <div>Error: {error}</div>}
			{status === "succeeded" && (
				<div
					className="row"
					style={{ width: "100%" }}>
					{news.slice(0, page * 10).map((article) => (
						<div
							key={article.title}
							className="card col-sm-4 m-3 p-3 center"
							style={{ width: "21.7rem" }}>
							<News article={article} />
						</div>
					))}
				</div>
			)}
			<div className="d-flex justify-content-center">
				{news.length > page * 10 && (
					<button
						onClick={loadMore}
						className="btn btn-primary  my-4">
						Load More
					</button>
				)}
			</div>
		</div>
	);
};

export default NewsList;
