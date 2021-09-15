import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookieBite } from '@fortawesome/free-solid-svg-icons';

class Header extends React.Component {
  render() {
    return (
      <div className="sticky-top bg-danger text-white text-center p-3">
        <h1>
          <FontAwesomeIcon icon={faCookieBite} />
          ookie Crumble
        </h1>
      </div>
    );
  }
}

export default Header;
