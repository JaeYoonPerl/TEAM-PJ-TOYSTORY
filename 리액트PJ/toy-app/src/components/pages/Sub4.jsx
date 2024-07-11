// 서브페이지4 //

import "../../css/sub4.scss";



export default function Sub4() {

  // 코드 리턴구역 ////
  return (
    <section>
      {/* 메뉴 영역  */}
      <header id="top-area" className=""></header>
      <div className="ts"></div>
      {/* 상단 영역  */}
      <div id="top">
        <div className="screen">
          {/* 유튜브 아이프레임  */}
          <iframe
            id="ifr"
            src="https://www.youtube.com/embed/u8GQibRXVHg"
            allow="autoplay"
          ></iframe>
        </div>
      </div>

      {/* 메인 영역  */}
      <div id="main">
        <div className="main-title">
          <img src={process.env.PUBLIC_URL +`/images/img4/toystory4_logo.jpg`} alt="토이스토리 로고" />
        </div>
        {/* 재귀함수 호출  */}
        <div className="gbox"></div>
        {/* 시놉시스 구역  */}
        <div className="main-synopsis">
          <h2 className="main-title">Synopsis</h2>
          <span className="sub-text1">
            Woody has always been confident about his place in the world and that his priority is
            taking care of his kid, whether that’s Andy or Bonnie.
            <br />
            But when Bonnie adds a reluctant new toy called “Forky” to her room, a road trip
            adventure alongside old and new friends will show Woody how big the world can be for a
            toy.
          </span>
        </div>
        {/* 포스터 영역  */}
        <div className="main-poster">
          <h2 className="main-title">POSTER</h2>
          <ul className="poster poster-common">
            <li>
              <img src={process.env.PUBLIC_URL +`/images/img4/ts4_circle.png`} alt="포스터" />
              <span className="sub-text1">mouse here!</span>
            </li>
          </ul>
          <ul className="poster2 poster-common">
            <li>
              <img src={process.env.PUBLIC_URL +`/images/img4/toystory4_poster.jpg`} alt="포스터" />
            </li>
            <li>
              <img src={process.env.PUBLIC_URL +`/images/img4/toystory4_poster2.jpg`} alt="포스터" />
            </li>
            <li>
              <img src={process.env.PUBLIC_URL +`/images/img4/toystory4_poster3.jpg`} alt="포스터" />
            </li>
          </ul>
        </div>
        {/* 캐릭터 소개 영역  */}
        <div className="main-character">
          <div className="cha-box"></div>
        </div>

        {/* 하단 영역  */}
        <div id="footer">
          <div className="pointer"></div>
          <div className="footer-icon">
            <a href="#">
              <img src={process.env.PUBLIC_URL +`/images/img4/alien1.png`} alt="알린이미지" />
            </a>
          </div>
        </div>
        <div className="footer-bx col-12"></div>
      </div>
    </section>
  );
} /////// Sub4 /////