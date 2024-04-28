// 내함수 가져오기
import mFn from "./my_function.js";

// 로고 나오기
// 대상 : .logo a:last-child
const toyLogoA = mFn.qsa(".logo a");
const poster = mFn.qs(".logo a:last-child");


function showPoster() {
    toyLogoA.forEach((element) => {
      element.addEventListener("click", () => {
        poster.classList.toggle("show");
      });
    });
  }
  
  showPoster();