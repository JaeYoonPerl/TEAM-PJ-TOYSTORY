import React from "react";

// CSS 불러오기
import "../../css/sub1.scss";


function S1Main(props) {
  return (
    <section className="S1intro-area">
      <div className="main-img">
        <img src={process.env.PUBLIC_URL+"/images/img1/bged0.jpg"} alt="main_img" />
      <h2 className="S1main-title">
        To infinity <br />
        And beyond
      </h2>
      </div>
    </section>
  );
}

export default S1Main;
