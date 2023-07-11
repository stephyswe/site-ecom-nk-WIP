import { Header } from "@/app/(site)/components/nav/header";

export default function Home() {
  return (
    <div>
      <div id="not-supported">
        Det verkar som att du använder en gammal webbläsare, det kan göra att
        allt inte fungerar eller ser ut som det borde.
      </div>
      <div className="container">
        <div className="a b c d">
          <Header />
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
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const BannerRelisation = () => (
  <div>
    <div className="p q r t b am y gb b2 gc gd ge gf gg gh gi gj gk">
      <div className="b b6 gl">
        <div className="gm s">
          <h3 className="gn go gp gq x gr gs gt gu a5 a6">
            REALISATIONEN FORTSÄTTER, NU 40–60 %
          </h3>
        </div>
        <div className="gm s">
          <div className="gv gg gl">
            <div>
              <p className="gw a5">
                Hitta guldkornen du länge drömt om från varumärken som Ganni,
                ATP Atelier, BOSS och Palm Angels.
              </p>
              <p className="gw a5">
                <a
                  target="_self"
                  href="/rea/dam"
                  className="t a7 a8 o a9 aa ab"
                  data-scope-links-container="true"
                >
                  Dam
                </a>
                &nbsp; &nbsp;
                <a
                  target="_self"
                  href="/rea/herr"
                  className="t a7 a8 o a9 aa ab"
                  data-scope-links-container="true"
                >
                  Herr
                </a>
                &nbsp; &nbsp;
                <a
                  target="_self"
                  href="/rea/barn"
                  className="t a7 a8 o a9 aa ab"
                  data-scope-links-container="true"
                >
                  Barn
                </a>
                &nbsp; &nbsp;
                <a
                  target="_self"
                  href="/rea/skonhet"
                  className="t a7 a8 o a9 aa ab"
                  data-scope-links-container="true"
                >
                  Skönhet
                </a>
                &nbsp; &nbsp;
                <a
                  target="_self"
                  href="/rea/sportmode"
                  className="t a7 a8 o a9 aa ab"
                  data-scope-links-container="true"
                >
                  Sport
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
