// 내함수 가져오기
import mFn from "./my_function.js";


function loadFn(){
    console.log("로딩완료!");

    // 대상선정
    let banner = mFn.qs(".char-banner");
    console.log("대상:", banner);

    // 이동버튼
    const abtn = mFn.qsa(".abtn");

    // 블릿버튼
    let indic = mFn.qs(".indic");

    // 블릿, 슬라이드 개수
    const SLIDE_CNT = 5;
     // 슬라이드 트랜지션 시간 상수
     const SLIDE_TRANS_TIME = 600;

    // 광클금지변수
    let stop = false;

    // 슬라이드 순번 전역변수
    let snum = 0;

    // 데이터 할당
    // 캐릭터 이름
    const bulText =["Woody", "Buzz Lightyear","Lotso","Ken","Andy"]
    
    // 소개택스트
    const introText=[
        "Woody is a cowboy sheriff who proclaims his signature catchphrases from the 1950s TV show Woody’s Roundup every time his pull-string is pulled. He’s always been Andy’s favorite toy. Even though his owner is now grown, the loyal sheriff Woody maintains a steadfast belief that Andy still cares about his toys.",
        "Buzz Lightyear is a heroic space ranger action figure, complete with laser beam, karate-chop action, and pop-out wings. Buzz is a boy’s dream toy who becomes a quick favorite of young Andy and the closest of buddies with Woody. While Buzz’s sole mission used to be defeating the evil Emperor Zurg, what he now cares about most is keeping his toy family together. Buzz’s new mission is sidetracked along the way, however, when his journey brings out surprising aspects of his personality even he didn’t know existed.",
        "Lotso is a jumbo, extra-soft teddy bear with a pink and white plush body and a velvety purple nose. This lovable bear ranks fuzzy heads and shoulders above other teddy bears because he smells like sweet strawberries. With a smile that will light up your child’s face and a belly just asking to be hugged, Lotso Bear is sure to become a bedtime necessity. Stain resistant. Spot clean plush surface with a damp cloth.",
        "Grab your binoculars and join Ken on a safari! A swinging bachelor who's always on the lookout for fun, Ken sports the perfect outfit for his eco-adventure: light blue shorts and a leopard-print shirt with short sleeves sure to keep him cool in the hot sun. And after his exciting expedition, Ken will be ready to hit the dance floor in style. His accessories include a matching scarf, sensible loafers, and a fashion-forward gold belt. Dozens of additional Ken outfits sold separately.",
        "Andy—Buzz and Woody’s kind, imaginative young owner—is now nearly 18 years old and just days away from heading to college. His bedroom walls, once covered with Buzz Lightyear posters, are now plastered with images of sports cars, rock bands, and skateboarders. Although Andy no longer brings his old toys out from the chest for playtime, he hasn’t been able to bring himself to get rid of them. With his imminent departure looming, and his mom's prodding, the time has come for Andy to decide the fate of his favorite toys.",
    ];
    
    
        // html태그 변수
        let hcode = "";
        // 지연시간 계산을 위한 순번변수
        let seqNum = 0;
         // 초기 셋팅하기
        // 슬라이드 배너 표시
        // 블릿 영역 표시
        for(let i=0;i< SLIDE_CNT;i++){
            // 슬라이드 넣기
            banner.innerHTML +=`<li ${i === 0 ? 'class="on"' : ""}>
            <img 
            src="./IMG/img3/toystory3-${i + 1}.jpg"         
            alt="slide">
        </li>    `;

        // 블릿 넣기
        indic.innerHTML += `<li><span>${bulText[i]}</span>
        <img src="./IMG/img3/ico${i+1}.png" alt="charbtn"/>
        </li>`;
        }


}

loadFn();