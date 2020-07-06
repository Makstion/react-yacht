import React from 'react';
import "./Preloader.scss";


const Prealoder = (props) => {
  return (
    <div className="preloader-container">
      {/* {props.isFetching ? <div className="preloader"></div> : null} */}
      <div className="preloader"></div>
    </div>
  );
};

export default Prealoder;
