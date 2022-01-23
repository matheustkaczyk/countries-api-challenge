import React from 'react';
import { useParams } from 'react-router-dom';

import Header from '../components/Header';

const AppDetails = () => {
  let { name } = useParams();
  console.log(name)

  return (
    <div className="country-details">
      {/* <Header /> */}
      teste
    </div>
  );
};

export default AppDetails;
