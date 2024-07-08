import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Main from "./components/pages/Main";
import Sub1 from "./components/pages/Sub1";
import Sub2 from "./components/pages/Sub2";
import Sub3 from "./components/pages/Sub3";
import Sub4 from "./components/pages/Sub4";

export default function MainComponent(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>

      <Route index element={<Main/>}/>
      <Route path="sub1" element={<Sub1/>}/>
      <Route path="sub2" element={<Sub2/>}/>
      <Route path="sub3" element={<Sub3/>}/>
      <Route path="sub4" element={<Sub4/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

// 먼저 root 객체 만들기
const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<MainComponent />);
