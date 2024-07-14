import React from 'react';

import { designData } from '../data/sub1/sub1_data';


// CSS 불러오기
import "../../css/sub1.scss";

function S1Degin(props) {
  
  const S1DeginBox = new Set();

  return (
    <>
      {designData.map((v, i) => {
        
        if (S1DeginBox.has(v.title01)) return null;
        S1DeginBox.add(v.title01);

        return (
          <React.Fragment key={i}>
            <section className="S1deintro">
              <div className="S1demovie">
                <h3>{v.title01}</h3>
              </div>
              <div className="S1dbox">
                <div className="dmovie1">
                  <iframe src={v.mvid01}></iframe>
                </div>
                <div className="dmovie2">
                  <iframe src={v.mvid02}></iframe>
                </div>
              </div>
              <h4>{v.subintro01}</h4>
            </section>
            <section className="S1bgdintro">
              <div className="S1degbmovie">
                <h3>{v.title02}</h3>
                <h4>{v.subintro02}</h4>
                <div className="S1dbg-box">
                  <div className="dmovie3">
                    <iframe src={v.mvid03}></iframe>
                  </div>
                  <div className="dmovie4">
                    <iframe src={v.mvid04}></iframe>
                  </div>
                </div>
              </div>
            </section>
          </React.Fragment>
        );
      })}
    </>
  );
}



export default S1Degin;