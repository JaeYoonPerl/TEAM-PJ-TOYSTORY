import { useEffect } from "react";
import $ from "jquery";

export default function TopArea() {
  useEffect(() => {
    // 대상: .GNB
    const GNB = $("#GNB");
    // 대상: .ts
    const TS = $(".ts");
    // 대상: .bg-image

    // GNB 내용
    let gnbContent = '<ul class="menu-list">';
    // TS 내용
    let tsContent = "";
    for (let i = 1; i <= 4; i++) {
      gnbContent += `
              <li data-index="${i}">
              <a class="icon1" href="./sub${i}.html">Toy Story ${i}</a>
              <a class="icon2" href="./sub${i}.html">
                  <img src="./IMG/toy${i}_icon.png" alt="Toy Story ${i}">
              </a>
              </li>
              `;
      tsContent += `<img src="./IMG/poster/0${i}_ts.jpg" alt="ts${i}" class="ts-img">`;
    }
    gnbContent += "</ul>";
    console.log(gnbContent);
    // 내용 삽입
    $(()=>{
        GNB.html(gnbContent);
        TS.html(tsContent);
    });
  }, []);
  // 코드 리턴구역 ////
  return (
    <>
      <header id="top-area" className="">
        <div className="page-bx col-9">
          <div id="GNB" className=""></div>
          <div className="logobx-area mlogo">
            <a href="./main.html">
              <img src="./IMG/PIXAR_LOGO black.png" alt="메인로고" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
} /////// TopArea /////
