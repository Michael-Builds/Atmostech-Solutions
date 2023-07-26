import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from "../Nav/Navbar";
// import Main from './Main';

const Industry = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Navbar />
      <section style={{ marginTop: "80px" }}>
        {/* <Main/> */}
      </section>
    </>
  );
};

export default Industry
