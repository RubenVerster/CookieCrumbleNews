import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookieBite } from '@fortawesome/free-solid-svg-icons';

class Header extends React.Component {
  render() {
    return (
      <div class="sticky-top bg-danger text-white text-center ">
        <h1>
          <FontAwesomeIcon icon={faCookieBite} />
          ookie Crumble
        </h1>
      </div>
    );
  }
}

export default Header;
