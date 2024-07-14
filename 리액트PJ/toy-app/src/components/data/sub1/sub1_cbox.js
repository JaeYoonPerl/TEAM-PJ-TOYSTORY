
import { chaData } from "./sub1_data.js";

export default function sub1Cbox(ref) {
  const chgrid = ref.current;

  // 이미지 넣기
  if (chgrid) {
    for (let i = 1; i <= 8; i++) {
      chgrid.innerHTML += `
        <div class="s1chbox">
          <img src="../../public/images/img1/cha0${i}.jpg" alt="캐릭터">
          <h3>${chaData.chaname}</h3>
          <p>${chaData.chaintro}</p>
        </div>
      `;
    }
  }
}
