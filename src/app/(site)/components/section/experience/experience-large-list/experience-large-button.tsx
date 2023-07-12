export const ExperienceButtonLarge = ({ index, title, datavalue, href }: any) => {
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
