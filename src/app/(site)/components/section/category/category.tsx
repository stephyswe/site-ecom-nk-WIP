"use client";

import { categoryData } from "@/app/(site)/components/section/category/category-data";
import { CategoryItem } from "@/app/(site)/components/section/category/category-item";
import useWindowSizeState from "@/zustand/useWindowSize";

export const SectionCategory = () => {
  const { isMobile } = useWindowSizeState();

  const containerClass = (type: "list" | "item") => {
    const containerClasses = {
      list: ["b hs ht hu hv", "b b6 ht hu hv"],
      item: ["hw an hx hy hz i0 i1", "mi an hx hy hz i0 i1"],
    };

    return isMobile ? containerClasses[type][1] : containerClasses[type][0];
  };

  return (
    <div>
      <div className="p q a0 aj ak al h9 gx dp">
        <div>
          <div className={containerClass("list")}>
            {categoryData.map((item) => (
              <div key={item.title} className={containerClass("item")}>
                <CategoryItem {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
