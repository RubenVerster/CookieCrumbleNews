import React from 'react';

class Article extends React.Component {
  renderList() {
    return this.props.articles.articles.map(article => {
      return (
        <div class="container">
          <br />
          <div className="card text-center border border-danger">
            <div className="card-header">
              <h3>{article.title}</h3>
            </div>
            <div className="card-body">
              <div className="container">
                <div className="row ">
                  <div className="col-sm-12 col-md-6">
                    <a href={article.url}>
                      <img className="img-thumbnail" src={article.urlToImage} />
                    </a>
                  </div>
                  <div className="col-sm-12 col-md-6 ">
                    <div>
                      <p className="card-text m-3">{article.description}</p>
                      <a
                        href={article.url}
                        className="btn btn-info btn-lg m-3"
                        target="_blank"
                      >
                        Sound Interesting?
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer text-muted ">
              Fresh In On: <span>{article.publishedAt.substr(0, 10)}</span>
            </div>
          </div>
          <br />
        </div>
      );
    });
  }

  render() {
    if (!this.props.articles) {
      return null;
    }

    return <div>{this.renderList()}</div>;
  }
}

export default Article;
