import React, { useState, useEffect } from "react";
import axios from "axios";

const Content = () => {
const [searchTerm, setSearchTerm] = useState("");
const [articles, setArticles] = useState([]);

const handleSearch = e => {
setSearchTerm(e.target.value);
};

useEffect(() => {
const fetchData = async () => {
    const apikey = 'bb41abc2027b412b8457e911738ea14f'
    const result = await axios(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${apikey}`);
    setArticles(result.data.articles);
    };
    fetchData();
}, [searchTerm]);

return (
<div className="container-fluid">
		<div className="row d-flex justify-content-center mr-4">
            <form className="input-group mb-3 mt-4 search">
                <input
                    className="form-control input"
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="Search news articles"
                />
                <button 
                    className="btn btn-primary" 
                    onClick={() => setSearchTerm("")}
                >
                    Clear
                </button>
            </form>
        </div>
                {articles.map(article => (
                <div key={article.title}>
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                    <a href={article.url}>Read more</a>
                </div>
                ))}
</div>
);
};

export default Content;