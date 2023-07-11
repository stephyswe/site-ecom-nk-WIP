import useMenuState from "@/zustand/useMenu";

export const NavItem = ({ title, ...props }: any) => {
  const { onOpen, isOpen } = useMenuState();
  const activeMenu = isOpen === title;
  return (
    <a
      className="ar a7 a8 o at au fk g3 g4 as aa aw"
      href="file:///D:/dam"
      onMouseEnter={() => onOpen(title)}
    >
      <div
        id="DesktopMegaMenu"
        data-value={title}
        className={`dp ef eg z ar x g1 az n b0 g5 ah ${
          activeMenu ? "ai" : "g6"
        } b1`}
      >
        {title}
      </div>
    </a>
  );
};
