"use client";

import { MobileButtons } from "@/app/(site)/components/section/product/part-products";
import useWindowSizeState from "@/zustand/useWindowSize";

const experienceLargeData = [
  {
    title: "Ny avdelning på NK i Stockholm: Tommy Hilfiger Kids",
    subtitle:
      "Hos nyöppnade Tommy Hilfiger Kids hittar du premiumplagg för barn och tonåringar, inspirerade av en amerikansk livsstil vid kusten. Välkommen till Plan 4.",
    href: "file:///D:/avdelningar/stockholm/tommy-hilfiger-kids",
    image: {
      src: "globalassets/sb-2023/puffar-startsida/tommy-kids-puff.jpg?ref=92DB042C5B&w=1920&format=jpg&quality=85",
      srcSet:
        "/globalassets/sb-2023/puffar-startsida/tommy-kids-puff.jpg?ref=92DB042C5B&w=2880&format=jpg&quality=85 1.5x",
    },
    buttons: [
      {
        title: "Läs mer",
        datavalue:
          "Ny-avdelning-på-NK-i-Stockholm:-Tommy-Hilfiger-Kids|Läs-mer",
      },
    ],
  },
  {
    title: "Följ NK Göteborg på Instagram",
    subtitle:
      "Vill du få de bästa reatipsen från varuhuset? Följ NK på Instagram för att ta del av utvalda fynd eller klicka dig in till vår guide med information om vilka varumärken och avdelningar som är på realisation, våningsplan för våningsplan.",
    href: "https://www.instagram.com/nkgoteborg/",
    image: {
      src: "/globalassets/sb-2023/puffar-startsida/insta-gbg-puff.jpg?ref=45A4B22353&w=1920&format=jpg&quality=85",
      srcSet:
        "/globalassets/sb-2023/puffar-startsida/insta-gbg-puff.jpg?ref=45A4B22353&w=2880&format=jpg&quality=85 1.5x",
    },
    buttons: [
      {
        title: "Följ NK Göteborg",
        datavalue: "Följ-NK-Göteborg-på-Instagram|Följ-NK-Göteborg",
      },
      {
        title: "Till reaguiden i varuhuset",
        datavalue: "Följ-NK-Göteborg-på-Instagram|Till-reaguiden-i-varuhuset-",
      },
    ],
  },
];

const ExperienceCity = () => {
  const { isMobile } = useWindowSizeState();
  return (
    <div className="p q r s">
      {isMobile ? <ExperienceCityMobile /> : <ExperienceCityDesktop />}
    </div>
  );
};

const ExperienceCityMobile = () => (
  <>
    <h2 className="fi gp gq j8 j9 gt kf gs jt a6 y x kh">Upplev NK</h2>
    <img
      alt="Varuhusen i Stockholm och Göteborg"
      loading="lazy"
      src="/globalassets/sb-2022/nyheter/varuhus640-480.jpg?ref=406DA3CE57&w=960&format=png&quality=85"
      srcSet="/globalassets/sb-2022/nyheter/varuhus640-480.jpg?ref=406DA3CE57&w=1440&format=png&quality=85 1.5x,/globalassets/sb-2022/nyheter/varuhus640-480.jpg?ref=406DA3CE57&w=1920&format=png&quality=85 2x"
      className="r s h4 h5 o jg jh eh h7"
    />
    <div className="p q r s b b2 ki kj">
      <a
        id="DepartmentStoreArticleBlock"
        data-value="StoreButton|Stockholm"
        className="a7 a8 o as at au dx an am b2 x dy t kk kl fo fn km fr fq kn fu ft ay ah ag aw hh e8 e9 bj ko hn ew ho gm hp hq da z kp kq"
        href="file:///D:/varuhusen?selected-store=sth"
      >
        Stockholm
      </a>
      <a
        id="DepartmentStoreArticleBlock"
        data-value="StoreButton|Göteborg"
        className="a7 a8 o as at au dx an am b2 x dy t kk kl fo fn km fr fq kn fu ft ay ah ag aw hh e8 e9 bj ko hn ew ho gm hp hq da z kp"
        href="file:///D:/varuhusen?selected-store=gbg"
      >
        Göteborg
      </a>
    </div>
  </>
);

const ExperienceCityDesktop = () => (
  <div className="s b am dp p q a5 a6 k6">
    <img
      alt="Varushuset i Stockholm"
      loading="lazy"
      src="/globalassets/sb-2022/nyheter/stlm-black-final1280x960.jpg?ref=7EEDF72DF5&w=2880&format=png&quality=85 1.5x"
      srcSet=""
      className="r h4 h5 o jg jh eh h7 k7 k8 k9 ka kb kc kd"
    />
    <div className="p q a5 a6 ke">
      <h2 className="fi gp gq j8 j9 gt kf gs jt kg y x kh">Upplev NK</h2>
      <div className="p q r s b b2 ki kj">
        <a
          id="DepartmentStoreArticleBlock"
          data-value="StoreButton|Stockholm"
          className="a7 a8 o as at au dx an am b2 x dy t kk kl fo fn km fr fq kn fu ft ay ah ag aw hh e8 e9 bj ko hn ew ho gm hp hq da z kp kq"
          href="file:///D:/varuhusen?selected-store=sth"
        >
          Stockholm
        </a>
        <a
          id="DepartmentStoreArticleBlock"
          data-value="StoreButton|Göteborg"
          className="a7 a8 o as at au dx an am b2 x dy t kk kl fo fn km fr fq kn fu ft ay ah ag aw hh e8 e9 bj ko hn ew ho gm hp hq da z kp"
          href="file:///D:/varuhusen?selected-store=gbg"
        >
          Göteborg
        </a>
      </div>
    </div>
    <img
      alt="Varuhuset i Göteborg"
      loading="lazy"
      src="/globalassets/sb-2022/nyheter/gbg-varuhus-black1280x960.jpg?ref=669CA1E59F&w=1920&format=png&quality=85"
      srcSet="/globalassets/sb-2022/nyheter/gbg-varuhus-black1280x960.jpg?ref=669CA1E59F&w=2880&format=png&quality=85 1.5x"
      className="r h4 h5 o jg jh eh h7 k7 k8 k9 ka kb kc kr"
    />
  </div>
);

const ExperienceLargeItem = ({
  title,
  subtitle,
  href,
  image,
  buttons,
}: any) => (
  <div className="p q r s gw gz">
    <a className="ar a7 a8 o as aa aw at au" href={href}>
      <div className="dp h0 h1 h2 h3 am b e">
        <img
          loading="lazy"
          width="1280"
          height="960"
          className="r h4 h5 o jg d5 jh eh s h7 ez i"
          {...image}
        />
      </div>
    </a>
    <h3 className="gn go gp gq x gr gs gt gu fi h8">{title}</h3>
    <div className="gv h9 ha gg">
      <p className="fi gw">{subtitle}</p>
    </div>
    <div className="p q r s am b b6">
      {buttons.map((button: any, index: number) => (
        <ButtonItem index={index} key={button.title} {...button} href={href} />
      ))}
    </div>
  </div>
);

const ButtonItem = ({ index, title, datavalue, href }: any) => {
  const standard =
    "a7 a8 o as at au an am b2 x dy t kk kl fo fn km fr fq kn fu ft ay ah ag aw hh e8 e9 bj ko hn ew ho gm hp hq da z gw fk";
  const opposite =
    "a7 a8 o as at au an am b2 x dy ar b7 hd fo fn he fr fq hf fu ft ai ah ag e8 e9 bj jx jy ew ho gm hp hq da z gw aw ax jz k0 k1 k2 fk";

  const className = index === 0 ? standard : opposite;
  return (
    <div className="hb y hc">
      <a
        id="EditorialButtonBlock"
        data-value={datavalue}
        className={className}
        href={href}
      >
        <span id="EditorialButtonBlock" data-value={datavalue}>
          {title}
        </span>
      </a>
    </div>
  );
};

const experienceSmallData = [
  {
    title: "Lacoste på NK Stage",
    subtitle:
      "Upptäck det ikoniska tennis- och livsstilsvarumärket Lacoste på NK Stage i sommar. Här hittar du ett brett utbud av mode för både henne och honom.",
    href: "file:///D:/avdelningar/stockholm/nk-stage",
    image: {
      alt: "NK STAGE",
      src: "/globalassets/sb-2023/puffar-startsida/lacoste-puff2.jpg?ref=32BFD5FB30&w=1920&format=jpg&quality=85",
      srcSet:
        "/globalassets/sb-2023/puffar-startsida/lacoste-puff2.jpg?ref=32BFD5FB30&w=2880&format=jpg&quality=85 1.5x",
    },
    link: {
      title: "Läs mer",
    },
  },
  {
    title: "Ny popup på NK i Göteborg: J.Lindeberg",
    subtitle:
      "Välkommen till J.Lindebergs nya popup på Plan 1. Här hittar du golfkläder, bags, accessoarer och allt du kan tänkas behöva inför golfrundan.&nbsp;",
    href: "file:///D:/avdelningar/goteborg/j.lindeberg",
    image: {
      alt: "NK STAGE",
      src: "/globalassets/sb-2023/puffar-startsida/j-lindeberg-puff.jpg?ref=19850C689F&w=1920&format=jpg&quality=85",
      srcSet:
        "/globalassets/sb-2023/puffar-startsida/j-lindeberg-puff.jpg?ref=19850C689F&w=1920&format=jpg&quality=85",
    },
    link: {
      title: "Hitta i varuhuset",
    },
  },
  {
    title: "Beställ din picknickkasse från NK Saluhall",
    subtitle:
      "Duka upp till en måltid i det gröna med NK Saluhalls picknickkassar. Läs mer om ROT Butik & Kök och Olja&Oliv Delis kassar här.",
    href: "file:///D:/avdelningar/goteborg/j.lindeberg",
    image: {
      alt: "NK STAGE",
      src: "//globalassets/sb-2023/picknick--nya-saluhallsbilder/picknick-puff-startsida.jpg?ref=48883F1BF0&w=1920&format=jpg&quality=85",
      srcSet:
        "/globalassets/sb-2023/picknick--nya-saluhallsbilder/picknick-puff-startsida.jpg?ref=48883F1BF0&w=1920&format=jpg&quality=85",
    },
    link: {
      title: "Läs mer",
    },
  },
  {
    title: "Beställ din picknickkasse från NK Saluhall",
    subtitle:
      "Duka upp till en måltid i det gröna med NK Saluhalls picknickkassar. Läs mer om ROT Butik & Kök och Olja&Oliv Delis kassar här.",
    href: "file:///D:/avdelningar/goteborg/j.lindeberg",
    image: {
      alt: "NK STAGE",
      src: "//globalassets/sb-2023/picknick--nya-saluhallsbilder/picknick-puff-startsida.jpg?ref=48883F1BF0&w=1920&format=jpg&quality=85",
      srcSet:
        "/globalassets/sb-2023/picknick--nya-saluhallsbilder/picknick-puff-startsida.jpg?ref=48883F1BF0&w=1920&format=jpg&quality=85",
    },
    link: {
      title: "Läs mer",
    },
  },
  {
    title: "Beställ din picknickkasse från NK Saluhall",
    subtitle:
      "Duka upp till en måltid i det gröna med NK Saluhalls picknickkassar. Läs mer om ROT Butik & Kök och Olja&Oliv Delis kassar här.",
    href: "file:///D:/avdelningar/goteborg/j.lindeberg",
    image: {
      alt: "NK STAGE",
      src: "//globalassets/sb-2023/picknick--nya-saluhallsbilder/picknick-puff-startsida.jpg?ref=48883F1BF0&w=1920&format=jpg&quality=85",
      srcSet:
        "/globalassets/sb-2023/picknick--nya-saluhallsbilder/picknick-puff-startsida.jpg?ref=48883F1BF0&w=1920&format=jpg&quality=85",
    },
    link: {
      title: "Läs mer",
    },
  },
];

const ExperienceSmallItem = ({ title, subtitle, href, image, link }: any) => {
  const { isMobile } = useWindowSizeState();
  return (
    <div
      className={isMobile ? "e ee ed it mll ku" : "e ee ed it kt ku"}
      style={{ left: "0%" }}
    >
      <div className="p q r s gw gz">
        <a className="ar a7 a8 o as aa aw at au" href={href}>
          <div className="dp h0 h1 h2 h3 am b e">
            <img
              width="1280"
              height="960"
              loading="lazy"
              className="r h4 h5 o jg jh eh s h7 ez i d5"
              {...image}
            />
          </div>
        </a>
        <h3 className="gn go gp gq x gr gs gt gu fi h8">{title}</h3>
        <div className="gv h9 ha gg">
          <p className="fi gw">{subtitle}</p>
        </div>
        <div className="p q r s am b b6">
          <div className="hb kv">
            <a
              id="EditorialButtonBlock"
              data-value="Lacoste-på-NK-Stage|Läs-mer"
              className="at au a7 a8 o a9 aa ab kw gw fk t"
              href={href}
            >
              {link.title}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExperienceButtonPrev = () => (
  <button
    aria-label="Tidigare"
    type="button"
    className="dp dq dr ds dt at as es dw an am b2 x dy ar b7 hd fo he fr hf fu ai ah ax e8 e9 bj jx jy ew ho gm hp hq da fk ez im in y z cw cx cy cz io ip iq i ir"
  >
    <span className="dx ek el em dy is">
      <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 512 512">
        <path
          d="M144 77.71l178.68 178.47L144 434.65l22.71 22.71L368.1 256.18 166.71 55z"
          fill="currentColor"
        />
      </svg>
    </span>
  </button>
);

const ExperienceButtonNext = () => (
  <button
    aria-label="Nästa"
    type="button"
    className="dp dq dr ds dt at as es dw an am b2 x dy ar b7 hd fo he fr hf fu ai ah ax e8 e9 bj jx jy ew ho gm hp hq da fk ez im in y z cw cx cy cz io ip j ir"
  >
    <span className="dx ek el em dy">
      <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 512 512">
        <path
          d="M144 77.71l178.68 178.47L144 434.65l22.71 22.71L368.1 256.18 166.71 55z"
          fill="currentColor"
        />
      </svg>
    </span>
  </button>
);

export const SectionExperience = () => {
  const { isMobile } = useWindowSizeState();
  return (
    <div>
      <div className={isMobile ? "p q r s mj mk k5 t" : "p q r s k3 k4 k5 t"}>
        <ExperienceCity />
        <div className={isMobile ? "p q a0 aj ak al h9" : "p q a0 s h9"}>
          <div className="p q r s h9">
            <div className="p q r s a6">
              <div className="b gy">
                {experienceLargeData.map((item, index) => {
                  const standard = "rs s a3 a4";
                  const opposite = isMobile ? "rs s a4 a3" : "rs s a4 hr";
                  const className = index === 0 ? standard : opposite;
                  return (
                    <div className={className} key={item.title}>
                      <ExperienceLargeItem {...item} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="p q r s">
            <div className="p q r s a6">
              <div className="e ig">
                {isMobile ? null : <ExperienceButtonPrev />}
                <div className="an ed it dp">
                  <div>
                    <div
                      className="b iu ks"
                      style={{ transform: "translate3d(0%, 0px, 0px)" }}
                    >
                      {experienceSmallData.map((item) => (
                        <ExperienceSmallItem key={item.title} {...item} />
                      ))}
                    </div>
                  </div>
                </div>
                {isMobile ? null : <ExperienceButtonNext />}
                {isMobile ? <MobileButtons isOpposite /> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
