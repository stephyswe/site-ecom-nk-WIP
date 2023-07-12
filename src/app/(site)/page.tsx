import { HeaderComponent } from "@/app/(site)/components/nav/header";
import { BannerRelisation } from "@/app/(site)/components/section/banner-realisation";
import { SectionCategory } from "@/app/(site)/components/section/category/category";
import { SectionExperience } from "@/app/(site)/components/section/experience/section-experience";
import { Hero } from "@/app/(site)/components/section/hero/hero";
import { SectionMembership } from "@/app/(site)/components/section/membership/section-membership";
import { SectionProduct } from "@/app/(site)/components/section/product/section-product";

export default function Home() {
  return (
    <div>
      <div id="not-supported">
        Det verkar som att du använder en gammal webbläsare, det kan göra att
        allt inte fungerar eller ser ut som det borde.
      </div>
      <div className="container">
        <div className="a b c d">
          <HeaderComponent />
          <div id="content-container" className="b b6 an e2">
            <div className="p q r s">
              <main className="p q r s">
                <noscript className="d6 d7 ga b am b2 h s d8 d9">
                  Det verkar inte som att din webbläsare har JavaScript
                  aktiverat vilket behövs för att använda den här siten
                </noscript>
                <div className="p q r s">
                  <div>
                    <BannerRelisation />
                    <Hero />
                    <SectionCategory />
                    <SectionProduct />
                    <SectionMembership />
                    <SectionExperience />
                  </div>
                </div>
              </main>
            </div>
            <div className="e">
              <div>
                <div className="g f1 mg f2 lz mh mi mj"></div>
              </div>
            </div>
          </div>
          <div>
            <footer>
              <div className="kx u s"></div>
              <FooterForm />
              <div className="kx u s"></div>
              <FooterBottom />
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

const FooterBottom = () => (
  <div className="b b6 ky h9">
    <div className="s">
      <div className="p q a0 aj ak al">
        <div className="b6 lr h9 ld ls">
          <div className="gc">
            <div className="b b6 lt">
              <div className="k3 s">
                <div className="gp gq x ja ex a5 gw">NK Stockholm</div>
                <div>Hamngatan 18 – 20</div>
                <div>111 47 Stockholm</div>
                <a
                  className="at au ar a7 a8 o a9 aa ab"
                  href="https://www.google.se/maps/place/Hamngatan+18,+111+47+Stockholm/@59.3330232,18.0673218,17z/data=!3m1!4b1!4m5!3m4!1s0x465f9d5c19adfc17:0xad38c1514ab78e55!8m2!3d59.3330205!4d18.0695051"
                >
                  Hitta hit
                </a>
              </div>
              <div className="k3 s">
                <div className="gp gq x ja ex a5 gw">Öppettider</div>
                <div>Mån – fre: 10 –&nbsp;19</div>
                <div>Lördag: 10 – 18</div>
                <div>Söndag: 11 – 17</div>
                <div>
                  <a
                    className="at au ar a7 a8 o a9 aa ab"
                    href="file:///D:/varuhusen/kontakta-oss"
                  >
                    Övriga öppettider
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="gc">
            <div className="b b6 lt">
              <div className="k3 s">
                <div className="gp gq x ja ex a5 gw">NK Göteborg</div>
                <div>Östra Hamngatan 42</div>
                <div>411 09 Göteborg</div>
                <a
                  className="at au ar a7 a8 o a9 aa ab"
                  href="https://www.google.se/maps/place/%C3%96stra+Hamngatan+42,+411+08+G%C3%B6teborg/@57.7057802,11.9674719,17z/data=!3m1!4b1!4m5!3m4!1s0x464ff365ae8e19b9:0xb89f4621381c0d8f!8m2!3d57.7057774!4d11.9696552"
                >
                  Hitta hit
                </a>
              </div>
              <div className="k3 s">
                <div className="gp gq x ja ex a5 gw">Öppettider</div>
                <div>Mån – fre: 10 – 19</div>
                <div>Lördag: 10 –&nbsp;18</div>
                <div>Söndag: 11 –&nbsp;16</div>
                <div>
                  <a
                    className="at au ar a7 a8 o a9 aa ab"
                    href="file:///D:/varuhusen/kontakta-oss"
                  >
                    Övriga öppettider
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="gc">
            <div className="b b6 lt">
              <div className="k3 s">
                <div className="gp gq x ja ex a5 gw">OM OSS</div>
                <div>
                  <a
                    className="at au ar a7 a8 o a9 aa ab"
                    href="file:///D:/varuhusen/om-oss/var-historia"
                  >
                    Vår historia
                  </a>
                </div>
                <div>
                  <a
                    className="at au ar a7 a8 o a9 aa ab"
                    href="file:///D:/nk-nyckeln"
                  >
                    Bli medlem i NK Nyckeln
                  </a>
                </div>
                <div>
                  <a
                    className="at au ar a7 a8 o a9 aa ab"
                    href="file:///D:/oversikt"
                  >
                    Mina sidor/Logga in
                  </a>
                </div>
                <div>
                  <a
                    className="at au ar a7 a8 o a9 aa ab"
                    href="file:///D:/varuhusen/om-oss/vart-hallbarhetsarbete"
                  >
                    Vårt hållbarhetsarbete
                  </a>
                </div>
                <div>
                  <a
                    className="at au ar a7 a8 o a9 aa ab"
                    href="file:///D:/varuhusen/shoppingguide"
                  >
                    Shoppingguide
                  </a>
                </div>
                <div>
                  <a
                    className="at au ar a7 a8 o a9 aa ab"
                    href="file:///D:/varuhusen/villkor"
                  >
                    Köpvillkor
                  </a>
                </div>
                <div>
                  <a
                    className="at au ar a7 a8 o a9 aa ab"
                    href="file:///D:/service--tjanster/nk-kundservice"
                  >
                    Kontakta oss
                  </a>
                </div>
                <div>
                  <a
                    className="at au ar a7 a8 o a9 aa ab"
                    href="file:///D:/varuhusen/in-english"
                  >
                    In English
                  </a>
                </div>
                <div>
                  <a
                    className="at au ar a7 a8 o a9 aa ab"
                    href="file:///D:/varuhusen/om-oss/integritetsinformation"
                  >
                    Integritetsinformation
                  </a>
                </div>
                <div>
                  <a
                    className="at au ar a7 a8 o a9 aa ab"
                    href="file:///D:/cookies"
                  >
                    Cookies
                  </a>
                </div>
                <div>
                  <a
                    className="at au ar a7 a8 o a9 aa ab"
                    href="https://nkcs.zendesk.com/hc/sv"
                  >
                    Vanliga frågor &amp; svar
                  </a>
                </div>
                <div>
                  <a
                    className="at au ar a7 a8 o a9 aa ab"
                    href="file:///D:/varuhusen/kontakta-oss/press"
                  >
                    Press
                  </a>
                </div>
                <div>
                  <a
                    className="at au ar a7 a8 o a9 aa ab"
                    href="file:///D:/varuhusen/kontakta-oss"
                  >
                    Öppettider
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="gc">
            <div className="b b6 lt">
              <div className="k3 s">
                <div className="gp gq x ja ex a5 gw">
                  Service &amp; Tjänster
                </div>
                <div>
                  <a
                    className="at au ar a7 a8 o a9 aa ab"
                    href="file:///D:/tjanster"
                  >
                    Tjänster
                  </a>
                </div>
                <div>
                  <a
                    className="at au ar a7 a8 o a9 aa ab"
                    href="file:///D:/service--tjanster/nk-kundservice"
                  >
                    NK Kundservice
                  </a>
                </div>
                <div>
                  <a
                    className="at au ar a7 a8 o a9 aa ab"
                    href="file:///D:/service--tjanster/nk-bud"
                  >
                    NK Bud
                  </a>
                </div>
                <div>
                  <a
                    className="at au ar a7 a8 o a9 aa ab"
                    href="file:///D:/service--tjanster/nk-presentkort"
                  >
                    NK Presentkort
                  </a>
                </div>
                <div>
                  <a
                    className="at au ar a7 a8 o a9 aa ab"
                    href="file:///D:/service--tjanster/nk-parkering"
                  >
                    NK Parkering
                  </a>
                </div>
              </div>
              <div className="k3 s">
                <div className="gp gq x ja ex a5 gw">Följ oss</div>
                <div className="b b6 ht h8 lu">
                  <div className="d8 d7">
                    <a
                      aria-label="Shared/Labels/SocialMedia/Facebook"
                      className="ar a7 a8 o as aa aw at au lv"
                      href="https://www.facebook.com/nordiskakompaniet/"
                    >
                      <span className="dx ek el em dy">
                        <svg
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M13 20v-7.33h2.41l.37-2.83H13V8.05c0-.82.18-1.39 1.37-1.39h1.46V4.11A19.62 19.62 0 0013.6 4 3.42 3.42 0 0010 7.77v2.07H7.45v2.83H10V20z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                  <div className="d8 d7">
                    <a
                      aria-label="Shared/Labels/SocialMedia/Instagram"
                      className="ar a7 a8 o as aa aw at au lv"
                      href="https://www.instagram.com/nordiskakompaniet/"
                    >
                      <span className="dx ek el em dy">
                        <svg
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 4.62h3.64a5.06 5.06 0 011.67.38A3 3 0 0119 6.68a5.06 5.06 0 01.31 1.67c0 1 .05 1.23.05 3.64s0 2.69-.05 3.64A5.06 5.06 0 0119 17.3a3 3 0 01-1.7 1.7 5.06 5.06 0 01-1.67.31c-1 0-1.23.05-3.64.05s-2.69 0-3.64-.05A5.06 5.06 0 016.69 19 3 3 0 015 17.3a5.06 5.06 0 01-.31-1.67c0-.94-.06-1.23-.06-3.63V8.36A5.06 5.06 0 015 6.69 3 3 0 016.68 5a5.06 5.06 0 011.67-.31c1 0 1.25-.06 3.65-.06M12 3H8.29a6.9 6.9 0 00-2.19.42A4.64 4.64 0 003.47 6.1a6.9 6.9 0 00-.42 2.19v7.42a6.52 6.52 0 00.42 2.18 4.64 4.64 0 002.63 2.63 6.83 6.83 0 002.18.42c1 0 1.28.06 3.72.06s2.75 0 3.71-.05a6.52 6.52 0 002.18-.42 4.64 4.64 0 002.63-2.63 6.83 6.83 0 00.42-2.18c0-1 .06-1.28.06-3.72V8.29a6.52 6.52 0 00-.42-2.18 4.64 4.64 0 00-2.68-2.63 6.83 6.83 0 00-2.18-.42C14.75 3 14.44 3 12 3zm0 4.38A4.62 4.62 0 1016.62 12 4.62 4.62 0 0012 7.38zM12 15a3 3 0 113-3 3 3 0 01-3 3zm4.8-8.88a1.08 1.08 0 11-1.08 1.08 1.08 1.08 0 011.08-1.08z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="y f4">
          Nordiska Kompaniet © 2023 om inget annat anges.
        </div>
        <div className="b b6 jt b2 ht fi">
          <div className="b d8">
            <span className="dx ek el em dy">
              <svg
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 37 24"
              >
                <path fill="#FF5F00" d="M13.4 3.7h10.1v16.5H13.4V3.7z" />
                <path
                  fill="#EB001B"
                  d="M14.5 12c0-3.2 1.5-6.3 4-8.3C13.9.2 7.3 1 3.8 5.5S1 16.7 5.5 20.3c3.8 3 9.2 3 13 0-2.5-2-4-5.1-4-8.3z"
                />
                <path
                  fill="#F79E1B"
                  d="M34.5 18.5v-.3h.1v-.1h-.3v.1h.1l.1.3zm.7 0v-.4h-.1l-.1.3-.1-.3h-.1v.4h.1v-.3l.1.3.1-.3.1.3zm.3-6.5c0 5.8-4.7 10.5-10.5 10.5-2.4 0-4.6-.8-6.5-2.2 4.6-3.6 5.3-10.2 1.8-14.7-.5-.7-1.1-1.3-1.8-1.8C23.1.2 29.7 1 33.2 5.5c1.5 1.9 2.3 4.1 2.3 6.5z"
                />
              </svg>
            </span>
          </div>
          <div className="b d8">
            <span className="dx ek el em dy">
              <svg
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 71.5 24"
              >
                <path
                  fill="#004686"
                  d="M25.6 22.2l3.5-20.3h5.5l-3.5 20.3h-5.5zM51.3 2.4c-1.1-.4-2.8-.9-5-.9-5.5 0-9.3 2.8-9.4 6.7 0 2.9 2.8 4.6 4.9 5.5 2.2 1 2.9 1.6 2.9 2.5 0 1.4-1.7 2-3.3 2-2.2 0-3.4-.3-5.2-1.1l-.7-.3-.8 4.6c1.3.6 3.7 1.1 6.2 1.1 5.8 0 9.6-2.7 9.7-7 0-2.3-1.5-4.1-4.7-5.5-1.9-.9-3.1-1.6-3.1-2.5 0-.8 1-1.7 3.2-1.7 1.8 0 3.1.4 4.2.8l.5.2.6-4.4zm14.2-.5h-4.3c-1.3 0-2.3.4-2.9 1.7l-8.2 18.6h5.8s1-2.5 1.2-3.1h7.1c.2.7.7 3 .7 3H70L65.5 1.9M58.7 15c.5-1.2 2.2-5.7 2.2-5.7 0 .1.5-1.2.7-1.9l.4 1.7s1.1 4.9 1.3 5.9h-4.6zM21 1.9l-5.4 13.9-.6-2.9c-1-3.3-4.2-6.8-7.7-8.5l5 17.8h5.9l8.7-20.3H21z"
                />
                <path
                  fill="#EF9B11"
                  d="M10.5 1.9H1.6l-.1.4C8.5 4 13.1 8 15 12.9l-2-9.3c-.3-1.3-1.3-1.7-2.5-1.7z"
                />
              </svg>
            </span>
          </div>
          <div className="b d8">
            <span className="dx ek el em dy">
              <svg
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#016FD0"
                  d="M1.5 1.5h21v11.3l-1 1.6 1 1.4v6.6h-21V11.8l.6-.7-.6-.7V1.5z"
                />
                <path
                  fill="#FFF"
                  d="M5.6 16.1v-3.3H9l.4.5.4-.5h12.7v3.1s-.3.2-.7.2h-7l-.4-.5v.5H13v-.9s-.2.1-.6.1h-.5v.8H9.8l-.4-.5-.4.5H5.6zm-4.1-5.7l.8-1.8h1.4l.4 1v-1h1.7l.2.7.3-.7h7.6V9s.4-.4 1.1-.4h2.5l.4 1v-1h1.4l.4.6v-.7h1.4v3.3h-1.4l-.4-.6v.6h-2.1l-.2-.5h-.6l-.2.5h-1.4c-.6 0-.9-.4-.9-.4v.4h-2.1l-.4-.5v.5h-8l-.2-.5h-.5l-.2.5h-1v-1.4z"
                />
                <path
                  fill="#016FD0"
                  d="M2.5 8.9l-1.1 2.5h.7l.2-.5h1.1l.2.5h.7l-1-2.5h-.8zm.4.6l.3.9h-.6l.3-.9zm1.6 1.9V8.9h1l.5 1.6.6-1.6h1v2.5h-.7V9.6l-.7 1.8h-.4l-.7-1.8v1.8h-.6zm3.5 0V8.9h2v.6H8.6v.4H10v.5H8.6v.4H10v.5l-2 .1zm2.4-2.5v2.5h.6v-.9h.3l.7.9h.8l-.8-.9c.3 0 .7-.3.7-.8s-.4-.8-.9-.8h-1.4zm.6.6h.7c.2 0 .3.1.3.3 0 .2-.2.3-.3.3H11v-.6zm2.5 1.9h-.6V8.9h.6v2.5zm1.5 0h-.1c-.7 0-1.1-.5-1.1-1.2S14.2 9 15 9h.7v.6H15c-.3 0-.6.3-.6.7 0 .5.3.7.7.7h.2l-.3.4zm1.3-2.5l-1.1 2.5h.7l.2-.5h1.1l.2.5h.7L17 8.9h-.7zm.4.6l.3.9h-.7l.4-.9zm1.6 1.9V8.9h.7l1 1.6V8.9h.6v2.5h-.8l-1-1.6v1.6h-.5zM6 15.7v-2.5h2v.6H6.6v.4H8v.5H6.6v.4H8v.5l-2 .1zm9.8 0v-2.5h2v.6h-1.4v.4h1.4v.5h-1.4v.4h1.4v.5l-2 .1zm-7.7 0l1-1.2-1-1.2h.8l.5.7.6-.8h.7l-1 1.2 1 1.2H10l-.6-.6-.6.8-.7-.1zm2.7-2.5v2.5h.6v-.8h.6c.5 0 1-.3 1-.9 0-.5-.3-.8-.9-.8h-1.3zm.7.6h.7c.2 0 .3.1.3.3 0 .2-.1.3-.3.3h-.7v-.6zm1.8-.6v2.5h.7v-.9h.3l.7.9h.8l-.8-.9c.3 0 .7-.3.7-.8s-.4-.8-.9-.8h-1.5zm.7.6h.7c.2 0 .3.1.3.3 0 .2-.2.3-.3.3H14v-.6zm4.1 1.9v-.5h1.2c.2 0 .3-.1.3-.2s-.1-.2-.3-.2h-.6c-.5 0-.8-.3-.8-.7 0-.4.2-.8 1-.8h1.2l-.1.5h-1c-.2 0-.3.1-.3.2s.1.2.2.2h.6c.5 0 .8.3.8.7 0 .4-.3.8-.8.8h-1.4zm2.3 0v-.5h1.2c.2 0 .3-.1.3-.2s-.1-.2-.3-.2H21c-.5 0-.8-.3-.8-.7 0-.4.2-.8 1-.8h1.2l-.3.6h-1c-.2 0-.3.1-.3.2s.1.2.2.2h.6c.5 0 .8.3.8.7 0 .4-.3.8-.8.8h-1.2z"
                />
              </svg>
            </span>
          </div>
          <div className="b d8">
            <span className="dx ek el em dy">
              <svg
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 41 24"
              >
                <path
                  fill="#FFB3C7"
                  d="M5.1 1.4h30.6c2 0 3.6 1.6 3.6 3.6v13.8c0 2-1.6 3.6-3.6 3.6H5.1c-2 0-3.6-1.6-3.6-3.6V5.1c0-2 1.6-3.7 3.6-3.7z"
                />
                <path
                  fill="#0A0B09"
                  d="M35.3 13.7c-.5 0-.9.4-.9.9s.4.9.9.9.9-.4.9-.9-.4-.9-.9-.9zm-2.9-.7c0-.7-.6-1.2-1.3-1.2s-1.3.6-1.3 1.2c0 .7.6 1.2 1.3 1.2.7 0 1.3-.5 1.3-1.2zm0-2.4h1.4v4.8h-1.4v-.3c-.4.3-.9.4-1.4.4-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5c.5 0 1 .2 1.4.4v-.3zm-11.4.6v-.6h-1.5v4.8H21v-2.2c0-.8.8-1.2 1.4-1.2v-1.4c-.6 0-1.1.3-1.4.6zM17.3 13c0-.7-.6-1.2-1.3-1.2-.7 0-1.3.6-1.3 1.2 0 .7.6 1.2 1.3 1.2.8 0 1.3-.5 1.3-1.2zm0-2.4h1.4v4.8h-1.4v-.3c-.4.3-.9.4-1.4.4-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5c.5 0 1 .2 1.4.4v-.3zm8.6-.1c-.6 0-1.1.2-1.5.7v-.5H23v4.8h1.5V13c0-.7.5-1.1 1.1-1.1s1 .4 1 1.1v2.5H28v-3.1c0-1.2-.9-1.9-2.1-1.9zm-14.6 4.9h1.5v-7h-1.5v7zm-6.5 0h1.6v-7H4.8v7zm5.5-6.9c0 1.5-.6 2.9-1.6 3.9l2.2 3h-2l-2.4-3.3.6-.5c1-.8 1.6-1.9 1.6-3.2l1.6.1z"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const FooterForm = () => (
  <form className="p q r s">
    <div className="p q a0 aj ak al">
      <div className="b b6 ky a6">
        <div className="hz s">
          <div className="y">
            <h4 className="gn go gp gq x gr gs ja ex a5 a6">
              Prenumerera på vårt nyhetsbrev
            </h4>
          </div>
        </div>
        <div className="hz s">
          <div className="b b6 ap gl b2">
            <div className="av gm">
              <div className="b b6 ap">
                <div className="av">
                  <label className="dx am b2 f4 x a6">
                    <input
                      type="radio"
                      name="store"
                      className="ez kz kx l0 l1 l2 l3 e4 e5 e2 e3 cw cx cy cz l4 l5 dp"
                      defaultValue="Stockholm"
                    />
                    <span className="l6 je ar l7">
                      <svg viewBox="0 0 18 18" width={19} height={19}>
                        <path
                          d="M17.2,9c0,4.6-3.7,8.2-8.2,8.2S0.8,13.6,0.8,9S4.4,0.8,9,0.8S17.2,4.4,17.2,9z"
                          fill="#ffffff"
                        />
                        <path
                          d="M9,17.2c-4.5,0-8.2-3.7-8.2-8.2S4.5,0.8,9,0.8s8.2,3.7,8.2,8.2S13.5,17.2,9,17.2zM9,1.2C4.7,1.2,1.2,4.7,1.2,9s3.5,7.8,7.8,7.8s7.8-3.5,7.8-7.8S13.3,1.2,9,1.2z M9,17.5c-4.7,0-8.5-3.8-8.5-8.5c0-4.7,3.8-8.5,8.5-8.5c4.7,0,8.5,3.8,8.5,8.5C17.5,13.7,13.7,17.5,9,17.5z M9,1.5C4.8,1.5,1.5,4.8,1.5,9s3.4,7.5,7.5,7.5s7.5-3.4,7.5-7.5S13.2,1.5,9,1.5z"
                          fill="currentColor"
                        />
                        <path
                          d="M14,9c0,2.8-2.2,5-5,5s-5-2.2-5-5s2.2-5,5-5S14,6.2,14,9z"
                          fill="primary"
                          className="l8 fh l9 o ei"
                        />
                      </svg>
                    </span>
                    <span className="ar">Stockholm</span>
                  </label>
                </div>
                <div className="av">
                  <label className="dx am b2 f4 x a6">
                    <input
                      type="radio"
                      name="store"
                      className="ez kz kx l0 l1 l2 l3 e4 e5 e2 e3 cw cx cy cz l4 l5 dp"
                      defaultValue="Göteborg"
                    />
                    <span className="l6 je la l7">
                      <svg viewBox="0 0 18 18" width={19} height={19}>
                        <path
                          d="M17.2,9c0,4.6-3.7,8.2-8.2,8.2S0.8,13.6,0.8,9S4.4,0.8,9,0.8S17.2,4.4,17.2,9z"
                          fill="#ffffff"
                        />
                        <path
                          d="M9,17.2c-4.5,0-8.2-3.7-8.2-8.2S4.5,0.8,9,0.8s8.2,3.7,8.2,8.2S13.5,17.2,9,17.2zM9,1.2C4.7,1.2,1.2,4.7,1.2,9s3.5,7.8,7.8,7.8s7.8-3.5,7.8-7.8S13.3,1.2,9,1.2z M9,17.5c-4.7,0-8.5-3.8-8.5-8.5c0-4.7,3.8-8.5,8.5-8.5c4.7,0,8.5,3.8,8.5,8.5C17.5,13.7,13.7,17.5,9,17.5z M9,1.5C4.8,1.5,1.5,4.8,1.5,9s3.4,7.5,7.5,7.5s7.5-3.4,7.5-7.5S13.2,1.5,9,1.5z"
                          fill="currentColor"
                        />
                        <path
                          d="M14,9c0,2.8-2.2,5-5,5s-5-2.2-5-5s2.2-5,5-5S14,6.2,14,9z"
                          fill="none"
                          className="l8 fh l9 o ff"
                        />
                      </svg>
                    </span>
                    <span className="lb">Göteborg</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="av gm">
              <div className="b b6 ap">
                <div className="av">
                  <label className="dx am b2 f4 x a6">
                    <input
                      type="radio"
                      name="gender"
                      className="ez kz kx l0 l1 l2 l3 e4 e5 e2 e3 cw cx cy cz l4 l5 dp"
                      defaultValue="Kvinna"
                    />
                    <span className="l6 je ar l7">
                      <svg viewBox="0 0 18 18" width={19} height={19}>
                        <path
                          d="M17.2,9c0,4.6-3.7,8.2-8.2,8.2S0.8,13.6,0.8,9S4.4,0.8,9,0.8S17.2,4.4,17.2,9z"
                          fill="#ffffff"
                        />
                        <path
                          d="M9,17.2c-4.5,0-8.2-3.7-8.2-8.2S4.5,0.8,9,0.8s8.2,3.7,8.2,8.2S13.5,17.2,9,17.2zM9,1.2C4.7,1.2,1.2,4.7,1.2,9s3.5,7.8,7.8,7.8s7.8-3.5,7.8-7.8S13.3,1.2,9,1.2z M9,17.5c-4.7,0-8.5-3.8-8.5-8.5c0-4.7,3.8-8.5,8.5-8.5c4.7,0,8.5,3.8,8.5,8.5C17.5,13.7,13.7,17.5,9,17.5z M9,1.5C4.8,1.5,1.5,4.8,1.5,9s3.4,7.5,7.5,7.5s7.5-3.4,7.5-7.5S13.2,1.5,9,1.5z"
                          fill="currentColor"
                        />
                        <path
                          d="M14,9c0,2.8-2.2,5-5,5s-5-2.2-5-5s2.2-5,5-5S14,6.2,14,9z"
                          fill="primary"
                          className="l8 fh l9 o ei"
                        />
                      </svg>
                    </span>
                    <span className="ar">Kvinna</span>
                  </label>
                </div>
                <div className="av">
                  <label className="dx am b2 f4 x a6">
                    <input
                      type="radio"
                      name="gender"
                      className="ez kz kx l0 l1 l2 l3 e4 e5 e2 e3 cw cx cy cz l4 l5 dp"
                      defaultValue="Man"
                    />
                    <span className="l6 je la l7">
                      <svg viewBox="0 0 18 18" width={19} height={19}>
                        <path
                          d="M17.2,9c0,4.6-3.7,8.2-8.2,8.2S0.8,13.6,0.8,9S4.4,0.8,9,0.8S17.2,4.4,17.2,9z"
                          fill="#ffffff"
                        />
                        <path
                          d="M9,17.2c-4.5,0-8.2-3.7-8.2-8.2S4.5,0.8,9,0.8s8.2,3.7,8.2,8.2S13.5,17.2,9,17.2zM9,1.2C4.7,1.2,1.2,4.7,1.2,9s3.5,7.8,7.8,7.8s7.8-3.5,7.8-7.8S13.3,1.2,9,1.2z M9,17.5c-4.7,0-8.5-3.8-8.5-8.5c0-4.7,3.8-8.5,8.5-8.5c4.7,0,8.5,3.8,8.5,8.5C17.5,13.7,13.7,17.5,9,17.5z M9,1.5C4.8,1.5,1.5,4.8,1.5,9s3.4,7.5,7.5,7.5s7.5-3.4,7.5-7.5S13.2,1.5,9,1.5z"
                          fill="currentColor"
                        />
                        <path
                          d="M14,9c0,2.8-2.2,5-5,5s-5-2.2-5-5s2.2-5,5-5S14,6.2,14,9z"
                          fill="none"
                          className="l8 fh l9 o ff"
                        />
                      </svg>
                    </span>
                    <span className="lb">Man</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hz s">
          <div className="p q lc s">
            <div className="ld le">
              <div className="e fk h9">
                <input
                  placeholder="Fyll i e-postadress"
                  required=""
                  autoCorrect="off"
                  spellCheck="false"
                  type="email"
                  name="email"
                  pattern="\s*[a-zA-Z0-9.!#$%&’*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-‌9-]+)+\s*"
                  className="bk bl bm s bn bo bp bq br bs bt bu bv bw bx by bz c0 c1 c2 c3 c4 c5 c6 c7 c8 c9 ca cb cc cd ce cf cg ch ci cj ck cl cm cn co cp cq cr cs ct cu cv ar hd fn fo he fq fr hf ft fu ai ag ah lf lg lh li lj lk ll lm d4 ln lo e9 bj d5 ho gm d8 d9 da z lp lq"
                  defaultValue=""
                />
              </div>
              <button
                type="submit"
                className="dp dq dr ds dt at as du es dw dx an am b2 x dy t u hd fo fn he fr fq hf fu ft ai ah ag hg hh e8 e9 bj hi hj hk hl hm hn ew ho gm hp hq da z e"
              >
                <span className="b am b2 dp ef eg eh ei ej n o">Ok</span>
              </button>
            </div>
            <div className="b b6 hu">
              <div className="hz s">
                <div className="y f4">
                  Genom att prenumerera godkänner du våra villkor för
                  nyhetsbrev.{" "}
                  <a
                    target="_self"
                    className="at au ar a7 a8 o a9 aa ab"
                    href="file:///D:/villkor-nyhetsbrev"
                  >
                    Läs villkoren för nyhetsbrev här
                  </a>
                  .
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
);
