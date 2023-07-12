import { bannerDataType } from "@/app/(site)/data/banner-data";

import { BannerItem } from "./banner-item";

export const BannerList: React.FC<{ data: bannerDataType }> = ({
  data: { title, subtitle, item },
}) => (
  <div>
    <div className="p q r t b am y gb b2 gc gd ge gf gg gh gi gj gk">
      <div className="b b6 gl">
        <div className="gm s">
          <h3 className="gn go gp gq x gr gs gt gu a5 a6">{title}</h3>
        </div>
        <div className="gm s">
          <div className="gv gg gl">
            <div>
              <p className="gw a5">{subtitle}</p>
              <p className="gw a5">
                {item.map((item) => (
                  <BannerItem key={item.title} {...item} />
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
