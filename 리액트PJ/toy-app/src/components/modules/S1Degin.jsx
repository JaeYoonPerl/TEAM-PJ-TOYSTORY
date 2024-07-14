import React from 'react';

import { designData } from '../data/sub1/sub1_data';
import S1BgDegin from './S1BgDegin';

// CSS 불러오기
import "../../css/sub1.scss";

function S1Degin(props) {
    return (
        <>
          {designData.map((v,i) => (
            <section key={i} className="S1deintro">
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
              <S1BgDegin/>
            </section>

          ))}
        </>
      );
}

export default S1Degin;