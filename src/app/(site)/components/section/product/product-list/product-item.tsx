import { ProductItemHeart } from "@/app/(site)/components/section/product/product-button-heart";
import { ProductImages } from "@/app/(site)/components/section/product/product-list/product-images";
import useWindowSizeState from "@/zustand/useWindowSize";

export const ProductItem = ({ index, title, subtitle, price, isLeft }: any) => {
  const { isMobile } = useWindowSizeState();
  const onMouseDown = (e: any) => {
    e.stopPropagation();
  };
  return (
    <div
      className={isMobile ? "e ee ed it n6 d8" : "e ee ed it iv d8"}
      style={{ left: isLeft ? "0%" : undefined }}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseDown}
    >
      <div className="e iw an ed">
        <div className="b ae c an">
          <a
            className={
              isMobile
                ? "ar a7 a8 o aa aw at au e gw ix"
                : "ar a7 a8 o aa aw at au e h9 ix"
            }
            href="file:///D:/ceremonia/guava-rescue-spray-200-ml-v00031145"
          >
            <ProductImages />
          </a>
          <div className="e j1 an">
            <ProductItemHeart />
            <a
              id="CategoryProductListBlock"
              data-value="ProductCard|Text|Guava-rescue-spray-200-ml"
              className="a7 a8 o as at au af j6 j7 ae b c"
              href="file:///D:/ceremonia/guava-rescue-spray-200-ml-v00031145"
            >
              <h2 className="j8 j9 gp gq x ex a5 a6 gs ja jb">
                {title} + {index}
              </h2>
              <p className="ex jc jd">{subtitle}</p>
              <span className="b z ed i6">
                <span className="je">{price} kr</span>
              </span>
              <div className="b b6 jf" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
