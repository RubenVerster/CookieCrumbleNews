import React from 'react';
import PacmanLoader from 'react-spinners/PacmanLoader';
import Pagination from 'react-js-pagination';

const Article = ({ articles }) => {
  const rendernewsArticles = () => {
    if (articles == null || articles.length < 1) {
      return (
        <div className="container">
          <h3 className="mt-5 text-center text-danger">Loading Your News...</h3>
          <div
            style={{
              transform: 'rotate(-90deg)',
              margin: '0 auto',
            }}
          >
            <PacmanLoader size={42} color="#DC3545" />
          </div>
        </div>
      );
    } else {
      const renderedArticles = articles.map(
        ({ title, url, urlToImage, description, publishedAt }) => {
          return (
            <div class="container">
              <br />
              <div className="card text-center border border-danger">
                <div className="card-header">
                  <h3>{title}</h3>
                </div>
                <div className="card-body">
                  <div className="container">
                    <div className="row ">
                      <div className="col-sm-12 col-md-6">
                        <img
                          className="img-thumbnail"
                          srcset={urlToImage}
                          alt="News Image"
                        />
                      </div>
                      <div className="col-sm-12 col-md-6 d-flex align-items-center justify-content-center">
                        <div>
                          <p className="card-text m-3">{description}</p>
                          <a
                            href={url}
                            className="btn btn-danger btn-lg m-3"
                            target="_blank"
                          >
                            Sound Interesting?
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-footer text-muted text-right">
                  Fresh In On: <span>{publishedAt.substr(0, 10)}</span>
                </div>
              </div>
              <br />
            </div>
          );
        }
      );
      return renderedArticles;
    }
  };

  return <>{rendernewsArticles()}</>;
};

export default Article;
