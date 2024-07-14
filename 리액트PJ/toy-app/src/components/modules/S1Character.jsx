import React, { useEffect } from 'react';

// 내함수 불러오기
import mFn from "../../func/my_function.js";


import sub1Cbox from '../data/sub1/sub1_cbox.js';

// CSS 불러오기
import "../../css/sub1.scss";

function S1Character(prop){

    useEffect(() => {
    sub1Cbox()
    });

    ////// 코드 리턴 구역
    return (
        <>

        </>
    );

} /////// S1Character /////