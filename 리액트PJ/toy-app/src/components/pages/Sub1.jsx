import S1Movie from "../modules/S1Movie";
import S1Main from "../modules/S1Main";
import S1Degin from "../modules/S1Degin";
import S1Character from "../modules/S1Character";



/// CSS 불러오기
import "../../css/sub1.scss";



export default function Sub1(){
    // 코드 리턴구역 ////
    return(
        <>
        <div className="S1main-bx">
            <S1Main/>
        </div>
        <div className="trmovie-box">
            <S1Movie/>
        </div>
        <div className="S1Cha-box">
            <S1Character/>
        </div>
        <div className="design-bx">
            <S1Degin/>
        </div>
        </>
    );
} /////// Sub1 /////