import React, { useEffect, useRef } from "react";
import sub1bgbox from "../func/sub1/sub1_bgbox.js";

//CSS 불러오기
import "../../css/sub1.scss";

export default function S1BgCdegin(props) {
  const S1gridRef = useRef(null);

  useEffect(() => {
    sub1bgbox(S1gridRef);
  }, []);

  return <div id="S1bgc-box" ref={S1gridRef}></div>;
}
