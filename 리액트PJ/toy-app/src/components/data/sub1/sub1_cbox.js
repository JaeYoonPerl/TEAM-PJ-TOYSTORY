import mFn from "../../func/my_function.js";

import * as sub1_data from "./sub1_data.js";

export default function sub1Cbox(){

////// 캐릭터 이미지 박스
// 대상 .cha-box
const chgrid = mFn.qs(".cha-box");

// 이미지 넣기
for (let i = 1; i <= 8; i++) {
  chgrid.innerHTML += `
      <div>
        <img src="../../public/images/img1/cha0${i}.jpg" alt="캐릭터">
        <h3>${sub1_data.chaData[i - 1].chaname}</h3>
        <p>${sub1_data.chaData[i - 1].chaintro}</p>
      </div>
      `;

} //////// for /////////
}