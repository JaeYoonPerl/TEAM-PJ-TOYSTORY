import React from 'react';
import mFn from '../my_function';

function sub4_poster(props) {

    
    
    const poster = mFn.qsa('.poster-common');

    mFn.addEvt(poster[0],"mouseenter",sub4_poster);

    this.parentElement.classList.add("on");
    // 2초후 앞에 있는 포스터 없애기
    setTimeout(()=>{
        poster[0].style.display="none";
    },3000)

}

export default sub4_poster;