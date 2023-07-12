import { BannerItemType } from "@/app/(site)/data/banner-data";

export const BannerItem: React.FC<BannerItemType> = ({ title, href }) => (
  <>
    <a
      target="_self"
      href={href}
      className="t a7 a8 o a9 aa ab"
      data-scope-links-container="true"
    >
      {title}
    </a>
    &nbsp; &nbsp;
  </>
);
