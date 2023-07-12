import useMenuState from "@/zustand/useMenu";

import { dataMegaMenuHem } from "./data-menu";
import { MenuContainer, MenuRow } from "./menu-items";

const MenuComponent = () => {
  const { isOpen } = useMenuState();
  if (isOpen === "Hem") return <Menu data={dataMegaMenuHem} />;
  return <div className="e eh i j s d dz ml"></div>;
};

const Menu = ({ data }: any) => (
  <div className="e eh i j s d ms ml ag ah mt">
    <div
      className="dp e"
      style={{ opacity: 1, height: 422, transform: "translateY(0px)" }}
    >
      <div>
        <div className="p q a0 s mu mv">
          <nav className="ld mw mx b7">
            {data.map((item: any) => (
              <MenuRow key={item.title} {...item}>
                {item.map((item: any) => (
                  <MenuContainer key={item.title} {...item} />
                ))}
              </MenuRow>
            ))}
          </nav>
        </div>
      </div>
    </div>
  </div>
);

export { MenuComponent, Menu };
