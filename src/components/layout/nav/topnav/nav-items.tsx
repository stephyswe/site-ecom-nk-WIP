import { NavItem } from "./nav-item";

const dataNavItems = ["Dam", "Herr", "Barn", "Skönhet", "Sport", "Hem"];

export const NavItems = () => (
  <nav className="fi b3 dx b2 am s fj n o">
    <a
      className="ar a7 a8 o at au fk as aa aw fl fm fn fo fp fq fr fs ft fu fv ag ah fw fx fy fz g0"
      data-scope-link="true"
    >
      <div
        id="DesktopMegaMenu"
        data-value="Upplev-varuhusen"
        className="dp ef eg z x g1 g2"
      >
        Upplev varuhusen
      </div>
    </a>
    <a className="ar a7 a8 o at au fk g3 g4 as aa aw" data-scope-link="true">
      <div
        id="DesktopMegaMenu"
        data-value="REALISATION"
        className="dp ef eg z x g1 az n b0 g5 ah g6 g7 g8"
      >
        REALISATION
      </div>
    </a>
    {dataNavItems.map((title) => (
      <NavItem key={title} title={title} />
    ))}
    <a
      className="ar a7 a8 o at au fk g3 g4 as aa aw"
      href="file:///D:/varumarken"
    >
      <div
        id="DesktopMegaMenu"
        data-value="Varumärken"
        className="dp ef eg z ar x g1 az n b0 g5 ah g6 b1"
      >
        Varumärken
      </div>
    </a>
    <a
      className="ar a7 a8 o at au fk g3 g4 as aa aw"
      href="file:///D:/varuhusen/erbjudanden"
    >
      <div
        id="DesktopMegaMenu"
        data-value="Erbjudanden"
        className="dp ef eg z ar x g1 az n b0 g5 ah g6 b1"
      >
        Erbjudanden
      </div>
    </a>
  </nav>
);
