import { Link } from "react-router-dom";
// 데이터 불러오기
import { topItems } from "../data/top_foot_data";
const tData = topItems;

export default function TopArea() {
  // tsContent += `<img src="./IMG/poster/0${i}_ts.jpg" alt="ts${i}" class="ts-img">`;

  // 코드 리턴구역 ////
  return (
    <>
      <header id="top-area" className="">
        <div className="page-bx col-9">
          <div id="GNB" className="">
            <ul className="menu-list">
              {tData.map((v, i) => (
                <li key={i}>
                  <Link to={v.link} className="icon1">
                    {v.text}
                  </Link>
                  <Link to={v.link} className="icon2">
                    <img
                      src={process.env.PUBLIC_URL + "./IMG/toy${i}_icon.png"}
                      alt={v.text}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
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
