import React, { useEffect, useRef } from 'react';
import sub1Cbox from "../data/sub1/sub1_cbox.js";
import "../../css/sub1.scss";

export default function S1Character(props) {
  const chgridRef = useRef(null);

  useEffect(() => {
    sub1Cbox(chgridRef);
  }, []);

  return (
    <div id="cha-box" ref={chgridRef}></div>
  );
}
