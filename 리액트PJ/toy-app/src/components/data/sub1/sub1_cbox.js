import mFn from "../../func/my_function.js";

import {chaData} from "./sub1_data.js";

export default function sub1Cbox(){

const chgrid = mFn.qs(".cha-box");
let chcode = "";
// 이미지 넣기
for (let i = 1; i <= 8; i++) {
  chcode += `
      <div class="s1chbox">
        <img src="../../public/images/img1/cha0${i}.jpg" alt="캐릭터">
        <h3>${chaData.chaname}</h3>
        <p>${chaData.chaintro}</p>
      </div>
      `;
  }
  chgrid.innerHTML =chcode;
}