import React from "react";

import { clipData } from "../data/sub1/sub1_data";

// CSS 불러오기
import "../../css/sub1.scss";

function S1Movie(props) {
  return (
    <>
      {clipData.map((v,i) => (
        <section key={i} className="S1trintro">
          <div className="S1trmovie">
            <h3>{v.title}</h3>
          </div>
          <div className="S1tbox">
            <div className="tmovie1">
              <iframe src={v.mvid01}></iframe>
            </div>
            <div className="tmovie2">
              <iframe src={v.mvid02}></iframe>
            </div>
          </div>
          <h4>{v.subintro}</h4>
        </section>
      ))}
    </>
  );
}

export default S1Movie;
