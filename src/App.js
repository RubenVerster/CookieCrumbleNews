import React, { useState, useEffect } from 'react';
import './App.css';
import Article from './components/Article';
import Header from './components/Header';
import Footer from './components/Footer';
import axios from 'axios';
import Pagination from 'react-js-pagination';

require('dotenv').config();
const { REACT_APP_ACCESS_KEY } = process.env;
const BASE_URL = `https://newsapi.org/v2/everything?q=keyword&apiKey=${REACT_APP_ACCESS_KEY}`;

const App = () => {
  const [newsArticles, setNewsArticles] = useState(null);
  const [activePage, setActivePage] = useState(1);

  const handlePageChange = () => {};

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

  return (
    <>
      <Header />
      <Article articles={newsArticles} />
      <Footer />
    </>
  );
};

export default App;
