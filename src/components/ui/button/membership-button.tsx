export const MembershipButton = ({ index, title }: any) => {
  const isOpposite = index === 1;
  const standardClass =
    "a7 a8 o as at au an am b2 x dy t u hd fo fn he fr fq hf fu ft ai ah ag hg aw hh e8 e9 bj hi hj hk hl hm hn ew ho gm hp hq da z fk y jv jw";

  const oppositeClass =
    "a7 a8 o as at au an am b2 x dy ar b7 hd fo fn he fr fq hf fu ft ai ah ag e8 e9 bj jx jy ew ho gm hp hq da z aw ax jz k0 k1 k2 fk y jv jw";
  return (
    <div className="ju hc">
      <a
        id="HeroBlockV2"
        data-value="Bli-Medlem|Bli-medlem"
        className={isOpposite ? oppositeClass : standardClass}
        href="file:///D:/nk-nyckeln/bli-nyckelkund"
      >
        <span id="HeroBlockV2" data-value="Bli-Medlem|Bli-medlem">
          {title}
        </span>
      </a>
    </div>
  );
};
