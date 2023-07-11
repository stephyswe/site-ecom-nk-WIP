const MenuRow = ({ children }: any) => (
  <ul className="a3 a4 a5 a6 e4 e5 e2 e3 my b c">{children}</ul>
);

const MenuContainer = ({ title, item, img }: any) => (
  <div className="mz">
    <MenuHeading title={title} />
    <ul className="a3 a4 a5 a6 e5 e2 e3 b c e4 my">
      {item && item.map((item: any) => <MenuItem key={item.title} {...item} />)}
    </ul>
    {img && <MenuImage {...img} />}
  </div>
);

const MenuImageItem = ({ ...props }: any) => (
  <img
    loading="eager"
    className="r h4 h5 o jg jh eh d5 j0 i ez s n2"
    {...props}
  />
);

const MenuImage = ({ title, href, image }: any) => (
  <div className="s n1">
    <a className="a7 a8 o as aa aw at au g2" href={href}>
      <div className="dp h0 h1 h2 h3 b am e">
        <MenuImageItem {...image} />
      </div>
      <h4 className="gn go gp gq x gr gs ja ex a6 n3">{title}</h4>
    </a>
    <a
      id="MegaMenuImageButton"
      data-value="Shoppa-nu"
      className="at au a7 a8 o a9 aa ab fk jf g2"
      href="file:///D:/varumarken/mille-notti"
    >
      Shoppa nu
    </a>
  </div>
);

const MenuHeading = ({ title }: any) => (
  <li>
    <span className="g2 n0">{title}</span>
  </li>
);

const MenuItem = ({ datavalue, title, href }: any) => (
  <li className="jc">
    <a
      id="DesktopMegaMenu"
      data-value={datavalue}
      className="a7 a8 o as aa aw at au g2"
      href={href}
    >
      {title}
    </a>
  </li>
);

export { MenuRow, MenuContainer, MenuHeading, MenuItem };
