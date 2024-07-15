import React, { useEffect, useState } from 'react';
import { gnbItems2 } from "../func/sub2/sub2_data";

const S2gnb = () => {

    return (
        <ul className="gnb-ul">
            {
                gnbItems2.map((v, i) => (
                    <li key={i}>
                       <a href={`#${v.link}`}>{v.tit}</a>
                    </li>
                ))
            }
        </ul>
    );
}

export default S2gnb;