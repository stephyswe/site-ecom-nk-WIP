import { FooterMobileBottom } from "./footer-mobile-bottom";
import {
  FooterItemGoteborg,
  FooterItemOmOss,
  FooterItemService,
  FooterItemStockholm,
} from "./footer-mobile-content";
import { FooterMobileItem } from "./footer-mobile-item";

export const FooterMobile = () => (
  <>
    <FooterMobileItem title="NK Stockholm" Content={<FooterItemStockholm />} />
    <div className="kx u s" />
    <FooterMobileItem title="NK Göteborg" Content={<FooterItemGoteborg />} />

    <div className="kx u s" />
    <FooterMobileItem
      footerClass="nt"
      isLarge
      title="Om oss"
      Content={<FooterItemOmOss />}
    />

    <div className="kx u s" />
    <FooterMobileItem
      footerClass="nu"
      title="Service & Tjänster"
      Content={<FooterItemService />}
    />
    <div className="kx u s" />
    <FooterMobileBottom />
  </>
);
