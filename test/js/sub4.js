import catInfo from './sub4_data.js';


import mFn from './my_function.js';
import spreadCommon from "./sub_spread_common.js";
spreadCommon();

import goSub from './gosub.js';
goSub();

const gbox = mFn.qs(".gbox");


let hcode = "<ul>";

for(let i=1; i<=8; i++) {
    hcode += `
        <li>
            <img src="./IMG/img4/ts4_0${i}.jpg" 
            alt="갤러리이미지">
        </li>
    `;
} ///// for /////

hcode += "</ul>";


gbox.innerHTML = hcode;



let target = mFn.qsEl(gbox,'ul');



const updateCriteria = () => mFn.qsaEl(target,"li")[0].offsetWidth;



let criteria = updateCriteria();


mFn.addEvt(window,"resize",

    ()=> {criteria = updateCriteria();
   
});



let currVal = 0;



function moveGallery(){
    

    target.style.translate = --currVal + "px";

    
    if(currVal <= Math.floor(-criteria)){
       
        target.appendChild(mFn.qsaEl(target,"li")[0]);


        target.style.translate =  "0px";

    
        currVal = 0;

    } ///////////////// if 문 /////////
    
    
    if(!stopSts)
    setTimeout(moveGallery,10);

} //////// moveGallery ///////////////



let stopSts = false;

// 1. 멈추기(mouseenter)
mFn.addEvt(gbox,"mouseenter",()=>{
    //  멈춤상태변수 true변경
    stopSts = true;

});
// 2. 다시 흘러가기(mouseleave)
mFn.addEvt(gbox,"mouseleave",()=>{
    //  멈춤상태변수 false 변경
    stopSts = false;
    // 재귀호출함수 호출하기
    moveGallery();
});



/////////////////////////////////////////////////////////////////
// 포스터 영역
// 대상요소
const poster = mFn.qsa('.poster-common');

mFn.addEvt(poster[0],"mouseenter",showPoster)

function showPoster(){
    console.log(this.parentElement);
    this.parentElement.classList.add("on");
    // 2초후 앞에 있는 포스터 없애기
    setTimeout(()=>{
        poster[0].style.display="none";
    },3000)
}



//// 캐릭터 영역
// 대상 : .cha-box
(()=>{

    const catList = mFn.qs(".cha-box");
    
    console.log(catList);

    const makeCode = (imgName,title) => {
        let hcode = '<ul class = "cha-pic">';
        for(let i=1;i<=5;i++){
            hcode += `<li>
                 <img src="./IMG/img4/${imgName+i}.jpg" alt="${title}" />
                 </li>
            `;
        } //// for ///
        hcode += "</ul>";

        return hcode;
    }; ////// makeCode 함수 ////////
    
    
    catList.innerHTML = 
    catInfo.map((v,i)=>`
        <h1 class = "main-title">${v.title}</h1>
        <span class = "sub-text2">${v.desc}</span>        
        ${makeCode(v.imgName,v.title)}`).join('');

})();


mousePo();

// 마우스 포인터 구역

    function mousePo(){
        const wrap = mFn.qs(".wrap");
        const moving = mFn.qs(".pointer");
    
        wrap.onmousemove = (e) => {
            moving.style.top = e.pageY + "px";
            moving.style.left = e.pageX + "px";
        };
    
        wrap.onmouseenter = () => {
            moving.style.opacity = 1;
        };
        wrap.onmouseleave = () => {
            moving.style.opacity = 0;
        };
    }