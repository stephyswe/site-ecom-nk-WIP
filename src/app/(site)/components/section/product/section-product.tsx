"use client";

import { Products } from "@/app/(site)/components/section/product/part-products";
import useWindowSizeState from "@/zustand/useWindowSize";

const productData = {
  title: "Hårvård inför soliga dagar",
  subtitle:
    "Skäm bort håret med en ordentlig fuktboost inför sol- och badsäsongen.",
  buttons: [
    {
      title: "Shoppa nu",
    },
  ],
};

export const SectionProduct = () => {
  const { title, subtitle, buttons } = productData;
  const standard = "p q a0 s gx b i6 i7 i8 ft fu i9 be ia ib di dj ic id";
  const mobile = "p q a0 aj ak b n4 i7 i8 ft fu i9 be ia ib di dj ic id";
  const { isMobile } = useWindowSizeState();
  return (
    <div>
      <div>
        <div className={isMobile ? mobile : standard}>
          <Products />
          <SectionProductMenu
            title={title}
            subtitle={subtitle}
            buttons={buttons}
          />
        </div>
      </div>
    </div>
  );
};

const SectionProductMenu = ({ title, subtitle, buttons }: any) => {
  const { isMobile } = useWindowSizeState();

  const standard = "fi h9 jk jl";
  const mobile = "jf h9 jk jl";
  return (
    <div className={isMobile ? "" : "ji jj"}>
      <div className="p q r s a6">
        <h3 className="gn go gp gq x gr gs gt gu a5 a6">{title}</h3>
        <p className={isMobile ? mobile : standard}>{subtitle}</p>
        {buttons.map((item: any) => (
          <a
            key={item.title}
            id="CategoryProductListBlock"
            data-value="Hårvård-inför-soliga-dagar|Shoppa-nu"
            className="a7 a8 o as at au dx an am b2 x dy t u hd fo fn he fr fq hf fu ft ai ah ag hg aw hh e8 e9 bj hi hj hk hl hm hn ew ho gm hp hq da z"
            href="file:///D:/skonhet/harvard?sortBy=popularity"
          >
            <span className="f3">{item.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
};
