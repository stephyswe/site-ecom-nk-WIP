"use client";

import { MembershipButton } from "@/components/ui/button/membership-button";
import useWindowSizeState from "@/zustand/useWindowSize";

export const SectionMembership = ({ data: { image, buttons } }: any) => {
  const { isMobile } = useWindowSizeState();
  return (
    <div>
      <section
        className={
          isMobile ? "p q r s h9 i9 be am" : "p q a0 aj ak i9 be h9 gx am"
        }
      >
        <div className={isMobile ? "" : "jm jj"}>
          <div className="p q r s e">
            <div className="dp h0 h1 jn h3">
              <a
                className="ar a7 a8 o as aa aw at au"
                href="file:///D:/nk-nyckeln/bli-nyckelkund"
              >
                <img
                  src={`/globalassets/sb-2022/jacobs-updates/namnlost-3.jpg?ref=2BA3662262&w=${
                    isMobile ? "1280" : "1920"
                  }&format=jpg&quality=85`}
                  srcSet={`/globalassets/sb-2022/jacobs-updates/namnlost-3.jpg?ref=2BA3662262&w=${
                    isMobile ? "2560" : "2880"
                  }&format=jpg&quality=85 1.5x`}
                  alt="NK Nyckeln"
                  width={1440}
                  height={720}
                  id="HeroBlockV2"
                  data-value="Bli-Medlem|Bli-medlem-|NK-Nyckeln"
                  className="r h4 h5 o j0 ae s ez i"
                />
              </a>
            </div>
          </div>
        </div>
        <div className={isMobile ? "" : "jo if"}>
          <div className="p q r s">
            <div className="d8 d9">
              <h1 className="gq gp jp x jq jr js jt">Bli medlem </h1>
              <div className="ex jl">
                <p className="fi gw">
                  <span
                    className="TextRun SCXO226075400 BCX8"
                    lang="SV"
                    data-contrast="auto"
                  >
                    <span className="NormalTextRun SCXO226075400 BCX8">
                      Som medlem i NK Nyckeln
                    </span>
                  </span>
                  <span
                    className="TextRun SCXO226075400 BCX8"
                    lang="SV"
                    data-contrast="auto"
                  >
                    <span className="NormalTextRun SCXO226075400 BCX8">
                      &nbsp;får du ta&nbsp;
                    </span>
                  </span>
                  <span
                    className="TextRun SCXO226075400 BCX8"
                    lang="SV"
                    data-contrast="auto"
                  >
                    <span className="NormalTextRun SCXO226075400 BCX8">
                      del av en unik shoppingupplevelse och blir på riktigt en
                      del av NK:s värld. Medlemskapet kostar dig ingenting, men
                      ger ett stort mervärde.
                    </span>
                  </span>
                </p>
              </div>
              <ul className="ex d8 jl">
                <li>Poäng på alla köp</li>
                <li>Förmåner och erbjudanden</li>
                <li>Förtur till våra reor</li>
                <li>Inbjudningar till kundkvällar</li>
                <li>Fri frakt på NK.se</li>
              </ul>
              <div className="p q r s am b jq b6">
                {buttons.map((item: { title: any }, index: any) => (
                  <MembershipButton {...item} key={item.title} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
