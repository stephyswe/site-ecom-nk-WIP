import useWindowSizeState from "@/zustand/useWindowSize";

export const ExperienceSmallItem = ({
  title,
  subtitle,
  href,
  image,
  link,
}: any) => {
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
