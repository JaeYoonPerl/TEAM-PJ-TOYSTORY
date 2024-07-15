import React, { useEffect, useState } from 'react';
// 데이터 불러오기
import { gnbItems2 } from "../func/sub2/sub2_data";
// 내함수 불러오기
import mFn from "../func/my_function";

function S2gnb() {
    const [selectedIdx, setSelectedIdx] = useState(0);
    useEffect(()=>{
        const gnbLi = mFn.qsa(".gnb-ul li");
        gnbLi[0].classList.add("on");
    },[selectedIdx]);

    return (
        <ul className='gnb-ul'>
            {
                gnbItems2.map((v,i)=>
                    <li>
                <a href="#">{v.tit}</a>
              </li>
                )
            }
        </ul>
    );
}

export default S2gnb;