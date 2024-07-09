import React, { useState } from "react";
import { charS3 } from "../data/sub3_char_data";

function S3CharSlide() {
    const [currentTab, clickTab] = useState(0);
    const selectMenu = (i) => {
        clickTab(i);
    };

    return (
        <div id="char-area">
            <section className="char-area inbox">
                <div className="cont-box">
                    <div className="char-btn">
                        <ul className="indic">
                            {charS3.map((v, i) => (
                                <li key={i} className={i === currentTab ? "submenu focused" : "submenu"} onClick={() => selectMenu(i)}>
                                    <img src={v.cimg} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    <h2 className="main-title sub-tit">Character</h2>
                    {/* <div className="char-box">
                        {charS3[currentTab].tit.map((v, i) => (
                            <li key={i} className="dbox">
                                <div>
                                    <img src={charS3[currentTab].cimg[i]} alt={charS3[currentTab].tit[i]} />
                                    <h3>{charS3[currentTab].tit[i]}</h3>
                                    <p>{charS3[currentTab].ctxt[i]}</p>
                                </div>
                            </li>
                        ))}
                    </div> */}
                </div>
            </section>
        </div>
    );
}

export default S3CharSlide;
