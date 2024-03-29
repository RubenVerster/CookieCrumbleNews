import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookieBite } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className="sticky-top bg-primary text-white text-center p-3">
      <h1>
        <FontAwesomeIcon icon={faCookieBite} />
        ookie Crumble
      </h1>
    </div>
  );
};

export default Header;
