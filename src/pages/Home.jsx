import React from "react";
import Featured from "../components/Featured";
import Row from "../components/Row";

const Home = () => {
  return (
    <div className='page'>
      <Featured/>
      <Row title='EPL'/>
      <Row title='La Liga'/>
      <Row title='Serie A'/>
      <Row title='International'/>
    </div>
  );
};

export default Home;
