import React from 'react';
import './App.css';
import Article from './components/Article';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  state = { articles: null };

  componentDidMount() {
    let url = `${'https://newsapi.org/v2/top-headlines?'}${'country=us&'}${'apiKey=f606d10b0ef84c3e881776d8654b19e8'}`;

    let req = new Request(url);
    fetch(req).then(async response => {
      const resp = await response.json();
      console.log(resp.articles);
      this.setState({ articles: resp });
    });
  }
  render() {
    return (
      <div>
        <Header />
        <Article articles={this.state.articles} />
      </div>
    );
  }
}

export default App;
