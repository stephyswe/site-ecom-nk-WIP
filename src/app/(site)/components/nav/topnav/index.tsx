import { ItemCart } from "@/app/(site)/components/nav/topnav/item-cart";
import { ItemLike } from "@/app/(site)/components/nav/topnav/item-like";
import { ItemSearch } from "@/app/(site)/components/nav/topnav/item-search";
import { ItemUser } from "@/app/(site)/components/nav/topnav/item-user";
import { Logo } from "@/app/(site)/components/nav/topnav/logo";
import { MenuLeft } from "@/app/(site)/components/nav/topnav/menu-left";
import { NavItems } from "@/app/(site)/components/nav/topnav/nav-items";

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
