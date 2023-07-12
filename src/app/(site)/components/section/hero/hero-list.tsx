"use client";

import { HeroItem } from "@/app/(site)/components/section/hero/hero-item";
import useWindowSizeState from "@/zustand/useWindowSize";

export const HeroList = ({ data }: any) => {
  const { isMobile } = useWindowSizeState();

  const containerClass = (index: number) => {
    const containerClasses = {
      desktop: ["r s a3 a4", "r s a4 hr"],
      mobile: ["r s a3 a4", "r s a4 a3"],
    };
    const classes = isMobile
      ? containerClasses.mobile
      : containerClasses.desktop;
    return classes[index];
  };
  return (
    <div>
      <div className="p q a0 aj ak al gx">
        <div className="p q r s a6">
          <div className="b gy">
            {data.map((item: any, index: any) => {
              return (
                <div key={item.title} className={containerClass(index)}>
                  <HeroItem key={item.title} {...item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
