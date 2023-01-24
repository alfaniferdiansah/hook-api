import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "1d43adec9e5c4a508292f5dfb1ffe7bd";

function Content() {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
      )
      .then((res) => {
        setArticles(res.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${API_KEY}`
      )
      .then((res) => {
        setArticles(res.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container-fluid">
	<div className="row d-flex justify-content-center mr-4">
      <form 
        className="input-group mb-4 mt-4 search"
        onSubmit={handleSubmit}>
        <input
          className="form-control input"
          type="text"
          placeholder="Search news..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">Go</button>
      </form>
    </div>
      {articles.map((article, index) => (
        <div className="text-center mt-3" key={index}>
          <h2>{article.title}</h2>
          <img style={{widht:'200px', height:'100px'}} src={article.urlToImage} alt={article.title} />
          <p>{article.description}</p>
          <a href={article.url}>Read more</a>
        </div>
      ))}
    </div>
  );
}

export default Content;
