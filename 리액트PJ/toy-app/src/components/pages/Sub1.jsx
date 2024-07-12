import S1Movie from "../modules/S1Movie";
import S1Main from "../modules/S1Main";
import S1Degin from "../modules/S1Degin";



/// CSS 불러오기
import "../../css/sub1.scss";



export default function Sub1(){
    // 코드 리턴구역 ////
    return(
        <>
        <div className="main-bx">
            <S1Main/>
        </div>
        <div className="trmovie-box">
            <S1Movie/>
        </div>
        <div className="design-bx">
            <S1Degin/>
        </div>
        </>
    );
} /////// Sub1 /////