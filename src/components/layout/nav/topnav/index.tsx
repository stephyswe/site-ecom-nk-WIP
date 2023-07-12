import { ItemCart } from "./item-cart";
import { ItemLike } from "./item-like";
import { ItemSearch } from "./item-search";
import { ItemUser } from "./item-user";
import { Logo } from "./logo";
import { MenuLeft } from "./menu-left";
import { NavItems } from "./nav-items";

export const TopNav = () => (
  <div className="e k b c ac d ae af ag ah ai">
    <div className="p q a0 aj ak al">
      <div className="b am">
        <div className="b an ao">
          <MenuLeft />
        </div>
        <div className="b b2 am">
          <Logo />
        </div>
        <div className="b an ao ac am">
          <ItemSearch />
          <div className="b en">
            <span className="eo ep eq er" />
            <ItemLike />
            <span className="eo ep eq er" />
            <ItemUser />
            <span className="eo ep eq er" />
            <ItemCart />
          </div>
        </div>
      </div>
      <NavItems />
    </div>
  </div>
);
