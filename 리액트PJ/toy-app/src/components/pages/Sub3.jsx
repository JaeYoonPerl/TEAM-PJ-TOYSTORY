import "../../css/sub3.scss";
import S3CharSlide from "../modules/S3CharSlide";

export default function Sub3(){
    // 코드 리턴구역 ////
    return(
        <>
          <div id="intro-area">
            <section className="intro-area">
                <div className="cont-box">

                   
                    <div className="bg-box"></div>
                    
                   
                    <div className="toy-3rd-logo">
                        <img src="../images/img3/toystory_logo3-removebg-preview.png" alt="toy3-logo"/>
                    </div>
                    
                    <div className="sino-box">
                        <span className="sub-text sub-text1">The creators of the beloved Toy Story films re-open the toy box and bring moviegoers back to the delightful world of our favorite gang of toy characters in Toy Story 3. As Andy prepares to depart for college, Buzz, Woody, and the rest of his loyal toys are troubled about their uncertain future. <br/><br/>

                            Toy Story 3 is a comical adventure that lands the toys in a room full of untamed tots who can't wait to get their sticky little fingers on these "new" toys. It's pandemonium as the toys try to stay together, ensuring that "no toy gets left behind."</span>
                    </div>
                </div>

            </section>
        </div>
        <S3CharSlide/>
        
        {/* <div id ="char-area">
            <section className="char-area inbox">
                <div className="cont-box">
                     
                <a href="#" className="abtn ab1"></a>
                <a href="#" className="abtn ab2"></a>
                   
                    <div className="col-3">
                        <div className="char-btn">
                            <ol className="indic"></ol>
                        </div>
                    </div>
                    
                    <div className="col-9">
                        <h2 className="main-title sub-tit">Character</h2>
                        <div className="char-box">
                            <ul className="char-banner sub-text2"></ul>
                        </div>
                    </div>
                   
                </div>    
            </section>
        </div> */}


        <div id="video-area">
            <section class="video-area inbox">
                <div class="cont-box">
                    <div class="col-12">
                        <h2 class="sub-tit main-title">Trailer</h2>
                        <div class="video-box">

                            <ul class="video-banner"></ul>
                            
                            
                            <a href="javascript:;" class="avbtn ab1"><img src="../images/img3/left_btn.png" alt="왼쪽이동버튼"/></a>
                            <a href="javascript:;" class="avbtn ab2"><img src="../images/img3/right_btn.png" alt="오른쪽이동버튼"/></a>
                            
                            
                            <div class="video-btn">


                                <ol class="v-indic"></ol>
                            </div>

                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
        </>
    );
} /////// Sub3 /////