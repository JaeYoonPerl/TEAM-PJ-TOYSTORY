import React, { useState } from 'react';
import mFn from '../my_function';
import $ from "jquery";

function sub4_poster(props) {



    const poster = mFn.qsa('.poster-common');

    mFn.addEvt(poster[0],"mouseenter",sub4_poster)

    // this.parentElement.classList.add("on");

    setTimeout(()=>{
        poster[0].style.display="none";
    },3000)

}

export default sub4_poster;

