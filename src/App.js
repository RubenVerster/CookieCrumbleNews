import React, { useState, useEffect } from 'react';
import './App.css';
import Article from './components/Article';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

require('dotenv').config();
const { REACT_APP_ACCESS_KEY } = process.env;
const BASE_URL = `https://newsapi.org/v2/everything?q=keyword&apiKey=${REACT_APP_ACCESS_KEY}`;

const App = () => {
  const [newsArticles, setNewsArticles] = useState(null);

  const retrieveArticles = async () => {
    try {
      const res = await axios.get(BASE_URL);
      await setNewsArticles(res.data.articles);
    } catch (error) {
      alert(
        `Error retrieving data. API calls might have been reached for the time ¯\_(ツ)_/¯`
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
    </>
  );
};

export default App;