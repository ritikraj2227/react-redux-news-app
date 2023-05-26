import React from "react";

const News = ({ article }) => {
	return (
		<>
			<img
				src={!article.urlToImage ? "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=134" : article.urlToImage}
				className="card-img-top mt-3 rounded"
				alt=""
				style={{ height: "35vh" }}
			/>
			<div className="card-body">
				<p className="card-text">{article.source.name}</p>
				<h5 className="card-title">{article.title}</h5>
				<p className="card-text">{!article.description ? article.title : article.description}</p>
				<p className="card-text">by {!article.author ? "Unknown" : article.author}</p>
				<a
					className="btn btn-primary"
					href={article.url}
					role="button"
					target="_blank"
					rel="noreferrer">
					Read More
				</a>
			</div>
		</>
	);
};

export default News;
