import { useEffect } from "react";
import $ from "jquery";
export default function FooterArea() {
    const footerItems = [
        {
          type: "sns",
          links: [
            { href: "https://www.instagram.com/pixar/", icon: "fa-brands fa-instagram", alt: "Instagram" },
            { href: "https://www.facebook.com/Pixar/", icon: "fa-brands fa-facebook", alt: "Facebook" },
            { href: "https://twitter.com/pixar", icon: "fa-brands fa-twitter", alt: "Twitter" },
            { href: "https://www.youtube.com/pixar", icon: "fa-brands fa-youtube", alt: "YouTube" }
          ]
        },
        {
          type: "policy",
          links: [
            { href: "https://privacy.thewaltdisneycompany.com/en/", text: "PRIVACY POLICY" },
            { href: "https://disneytermsofuse.com/", text: "TERMS OF USE" },
            { href: "https://privacy.thewaltdisneycompany.com/en/current-privacy-policy/your-us-state-privacy-rights/", text: "YOUR US STATE PRIVACY RIGHTS" },
            { href: "https://privacy.thewaltdisneycompany.com/en/for-parents/childrens-online-privacy-policy/", text: "CHILDREN’S ONLINE PRIVACY POLICY" },
            { href: "https://preferences-mgr.truste.com/?affiliateId=115&type=disneycolor", text: "INTEREST-BASED ADS" }
          ]
        },
        {
          type: "corp",
          text: "© 1986-2024 DISNEY / PIXAR"
        }
      ];


      useEffect(() => {
        const footerBox = $(".footer-bx");
        footerItems.forEach(item => {
            let hcode2 = "";
            switch (item.type) {
              case "sns":
                hcode2 += `<div className="sns-part">
                            <aside className="sns-box">
                              <ul>`;
                item.links.forEach(link => {
                  hcode2 += `<li>
                              <a href="${link.href}" target="_blank" className="fa-brands ${link.icon}">
                                <span className="ir"></span>
                              </a>
                            </li>`;
                });
                hcode2 += `</ul>
                          </aside>
                        </div>`;
                break;
              case "policy":
                hcode2 += `<div className="fcont-part">
                            <aside className="info-link">
                              <ul>`;
                item.links.forEach(link => {
                  hcode2 += `<li>
                              <a href="${link.href}" target="_blank">${link.text}</a>
                            </li>`;
                });
                hcode2 += `</ul>
                          </aside>
                        </div>`;
                break;
              case "corp":
                hcode2 += `<div className="corp-part">
                            <address className="corp-info">${item.text}</address>
                          </div>`;
                break;
              default:
                break;
              }
            footerBox.innerHTML += hcode2;
          });

    },[]);
  // 코드 리턴구역 ////
  return (
    <>
      <div id="foot-back">
        <footer id="footer-area" className="section ibx">
          <h1 className="main-title main-tit2">ABOUT</h1>
          <div className="footer-bx col-12"></div>
        </footer>
      </div>
    </>
  );
} /////// FooterArea /////
