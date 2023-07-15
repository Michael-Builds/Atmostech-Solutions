import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from "../Nav/Navbar";

const Industry = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Navbar />
      <div>industries</div>
    </>
  );
};

export default Industry
