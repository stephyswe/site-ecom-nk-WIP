"use client";

import { ProductList } from "@/app/(site)/components/section/product/product-list/product-list";
import { ProductMenu } from "@/app/(site)/components/section/product/product-menu";
import useWindowSizeState from "@/zustand/useWindowSize";

export const SectionProduct = ({ data }: any) => {
  const standard = "p q a0 s gx b i6 i7 i8 ft fu i9 be ia ib di dj ic id";
  const mobile = "p q a0 aj ak b n4 i7 i8 ft fu i9 be ia ib di dj ic id";
  const { isMobile } = useWindowSizeState();
  return (
    <div>
      <div>
        <div className={isMobile ? mobile : standard}>
          <ProductList data={data.products} />
          <ProductMenu data={data.menu} />
        </div>
      </div>
    </div>
  );
};
