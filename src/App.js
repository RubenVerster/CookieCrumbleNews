import React, { useState, useEffect } from 'react';
import './App.css';
import Article from './components/Article';
import Header from './components/Header';
import Footer from './components/Footer';
import Pagination from './components/Pagination';
import axios from 'axios';

require('dotenv').config();
const { REACT_APP_ACCESS_KEY } = process.env;
const BASE_URL = `https://newsapi.org/v2/everything?q=keyword&apiKey=${REACT_APP_ACCESS_KEY}`;

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage, setArticlesPerPage] = useState(4);

  const retrieveArticles = async () => {
    try {
      const res = await axios.get(BASE_URL);
      await setNewsArticles(res.data.articles);
    } catch (error) {
      alert(
        `Error retrieving data. API calls might have been reached for the time`
      );
    }
  };

  useEffect(() => {
    retrieveArticles();
  }, []);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = newsArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Header />
      <Article articles={currentArticles} />
      <Pagination
        articlesPerPage={articlesPerPage}
        totalArticles={newsArticles.length}
        paginate={paginate}
      />
      <Footer />
    </>
  );
};

export default App;
