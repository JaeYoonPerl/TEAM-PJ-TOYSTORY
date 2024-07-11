import React from "react";
import TopArea from "./TopArea";
import FooterArea from "./FooterArea";
import MainArea from "./MainArea";

// 공통 css
import "../../css/common/reset.scss";
import "../../css/common/common.scss";
import "../../css/common/core.scss";
import "../../css/common/grid_12_flex.scss";


function Layout() {
  return (
    <>
      <TopArea />
      <MainArea />
      <FooterArea />
    </>
  );
}

export default Layout;
