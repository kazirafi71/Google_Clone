import React from "react";
import "./Home__Body.css";
import SearchBox from "./SearchBox/SearchBox";

const Home__Body = () => {
  return (
    <div>
      <div className="home__body">
        <img
          src="https://openthread.google.cn/images/ot-contrib-google.png"
          alt=""
        />

        <div className="input__container">
            <SearchBox/>
        </div>
      </div>
    </div>
  );
};

export default Home__Body;
