
import mFn from '../my_function.js';

export default function videoSlide(){

    loadFn();

function loadFn(){
    console.log("로딩완료2");

    // 이동 버튼 대상: .avbtn
    const abtn =mFn.qsa(".avbtn");

    // 변경대상
    const stage = mFn.qs(".video-banner");

    // 블릿 버튼
    let indic = mFn.qsa(".v-indic");

    // 슬라이드(블릿)개수 상수로 셋팅하기
    // 상수는 대문자로 쓰고 단어구분은 언더바로함
    const SLIDE_CNT = 3;

    // 슬라이드 트랜지션 시간 상수
    const SLIDE_TRANS_TIME = 600;

    // 광클금지변수
    let stop = false;

    // 슬라이드 순번 전역변수
    let snum = 0;
    // html태그 변수
    let hcode = "";
    // 지연시간 계산을 위한 순번변수
    let seqNum = 0;

    // 유튜브 링크 데이터
    const videoLink=[
        "https://www.youtube.com/watch?v=ay2j2svxaqA",
        "https://www.youtube.com/watch?v=p5kOgNXjpJo",
        "https://www.youtube.com/watch?v=aGYxNuodVOU",

    ]

    // 초기 셋팅하기
    // 슬라이드, 블릿
    for(let i=0;i< SLIDE_CNT;i++){
        // 슬라이드
        stage.innerHTML +=`
        <li><a href="${videoLink[i]}" target="_blank">
        <img src="./IMG/img3/trailer0${[i+1]}.jpg" alt="썸네일"></a></li>
        
        
        ;

        `
       
    }
}
}

