export const ExperienceButtonLarge = ({
  index,
  title,
  datavalue,
  href,
}: any) => {
  const commonClasses =
    "a7 a8 o as at au an am b2 x dy fo fn fr fq fu ft ew ho gm hp hq da z gw fk";
  const standardUniqueClasses = "t kk kl km kn ay ah ag aw hh e8 e9 bj ko hn";
  const oppositeUniqueClasses =
    "ar b7 hd he hf ai ah ag e8 e9 bj jx jy aw ax jz k0 k1 k2";

  const className =
    index === 0
      ? `${commonClasses} ${standardUniqueClasses}`
      : `${commonClasses} ${oppositeUniqueClasses}`;

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
