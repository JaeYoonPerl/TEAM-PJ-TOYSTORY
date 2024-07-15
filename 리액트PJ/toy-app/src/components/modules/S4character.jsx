import React from "react";

import { catInfo } from "../data/sub4/sub4_chadata";

function S4character(props) {
  let cData = catInfo;

  return (
    <div className="cha-intro">
      {cData.map((v, i) => (
        <ul className="cha-pic" key={i}>
          <li>
            <img src={process.env.PUBLIC_URL + `/images/img4/${v.imgName}1.jpg`} alt={v.title} />
          </li>
          <li>
            <img src={process.env.PUBLIC_URL + `/images/img4/${v.imgName}2.jpg`} alt={v.title} />
          </li>
          <li>
            <img src={process.env.PUBLIC_URL + `/images/img4/${v.imgName}3.jpg`} alt={v.title} />
          </li>
          <li>
            <img src={process.env.PUBLIC_URL + `/images/img4/${v.imgName}4.jpg`} alt={v.title} />
          </li>
          <li>
            <img src={process.env.PUBLIC_URL + `/images/img4/${v.imgName}5.jpg`} alt={v.title} />
          </li>
          <h1 className="main-title">{v.title}</h1>
          <span>
            {v.desc.split("*").map((v, i) => (
              <p key={i}>{v}</p>
            ))}
          </span>
          {/* <span className="sub-text2">{v.desc}</span> */}
        </ul>
      ))}
    </div>
  );
}

export default S4character;
