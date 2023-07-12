"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { animated, useSpring } from "react-spring";
import { useDrag } from "react-use-gesture";

import { cn } from "@/lib/utils";
import useWindowSizeState from "@/zustand/useWindowSize";

const ButtonPrev = ({ onPrev, isHidden }: any) => {
  return (
    <button
      onClick={onPrev}
      aria-label="Tidigare"
      type="button"
      className={cn(
        "dp dq dr ds dt at as es dw an am b2 x dy ar b7 hd fo he fr hf fu ai ah ax e8 e9 bj jx jy ew ho gm hp hq da fk ez im in y z cw cx cy cz io ip",
        isHidden ? "iq" : undefined,
        "i ir"
      )}
    >
      <span className="dx ek el em dy is">
        <SvgButtonNav />
      </span>
    </button>
  );
};

const SvgButtonNav = () => (
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 512 512">
    <path
      d="M144 77.71l178.68 178.47L144 434.65l22.71 22.71L368.1 256.18 166.71 55z"
      fill="currentColor"
    />
  </svg>
);

const ButtonNext = ({ onNext }: any) => (
  <button
    onClick={onNext}
    aria-label="Nästa"
    type="button"
    className="dp dq dr ds dt at as es dw an am b2 x dy ar b7 hd fo he fr hf fu ai ah ax e8 e9 bj jx jy ew ho gm hp hq da fk ez im in y z cw cx cy cz io ip j ir"
  >
    <span className="dx ek el em dy">
      <SvgButtonNav />
    </span>
  </button>
);

const productData = [
  {
    title: "Ceremonia",
    subtitle: "Guava rescue spray 200 ml",
    price: 295,
  },
];

const imageNotFound =
  "data:image/svg+xml;base64,DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUxMiA1MTIiPjxwYXRoIGQ9Ik00MDUgMTM2Ljc5OEwzNzUuMjAyIDEwNyAyNTYgMjI2LjIwMiAxMzYuNzk4IDEwNyAxMDcgMTM2Ljc5OCAyMjYuMjAyIDI1NiAxMDcgMzc1LjIwMiAxMzYuNzk4IDQwNSAyNTYgMjg1Ljc5OCAzNzUuMjAyIDQwNSA0MDUgMzc1LjIwMiAyODUuNzk4IDI1NnoiIGZpbGw9InJnYmEoMCwgMCwgMCwgLjEpIi8+PC9zdmc+";

const productImageData = {
  one: {
    datavalue: "ProductCard|Guava-rescue-spray-200-ml",
    alt: "Guava rescue spray 200 ml",
    src: "/globalassets/guavarescuespray.jpg?ref=4265406BE1&amp;w=320&amp;mode=pad&amp;h=400&amp;format=jpg&amp;quality=85",
    srcSet:
      "/globalassets/guavarescuespray.jpg?ref=4265406BE1&amp;w=480&amp;mode=pad&amp;h=600&amp;format=jpg&amp;quality=85 1.5x,/globalassets/guavarescuespray.jpg?ref=4265406BE1&amp;w=640&amp;mode=pad&amp;h=800&amp;format=jpg&amp;quality=85 2x",
  },
  two: {
    datavalue: "ProductCard|Guava-rescue-spray-200-ml",
    alt: "Guava rescue spray 200 ml",
    src: "/globalassets/guavarescuespray2.jpg?ref=63FEF07014&amp;w=320&amp;mode=pad&amp;h=400&amp;format=jpg&amp;quality=85",
    srcSet:
      "/globalassets/guavarescuespray2.jpg?ref=63FEF07014&amp;w=480&amp;mode=pad&amp;h=600&amp;format=jpg&amp;quality=85 1.5x,/globalassets/guavarescuespray2.jpg?ref=63FEF07014&amp;w=640&amp;mode=pad&amp;h=800&amp;format=jpg&amp;quality=85 2x",
  },
};

const ProductImages = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { one, two } = productImageData;

  return (
    <div
      className="dp h0 h1 iy h3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        alt="Guava rescue spray 200 ml"
        loading="lazy"
        src="data:image/svg+xml;base64,DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUxMiA1MTIiPjxwYXRoIGQ9Ik00MDUgMTM2Ljc5OEwzNzUuMjAyIDEwNyAyNTYgMjI2LjIwMiAxMzYuNzk4IDEwNyAxMDcgMTM2Ljc5OCAyMjYuMjAyIDI1NiAxMDcgMzc1LjIwMiAxMzYuNzk4IDQwNSAyNTYgMjg1Ljc5OCAzNzUuMjAyIDQwNSA0MDUgMzc1LjIwMiAyODUuNzk4IDI1NnoiIGZpbGw9InJnYmEoMCwgMCwgMCwgLjEpIi8+PC9zdmc+"
        className="r h4 h5 o jg jh eh iz ae s ez j j0"
      ></img>
      {/* <ProductImage {...one} />
      <div
        style={{ opacity: isHovered ? "1" : "0", transition: "opacity 500ms" }}
      >
        <ProductImage {...two} />
      </div> */}
    </div>
  );
};

const ProductImage = ({ isSecond, ...props }: any) => (
  <img
    draggable="false"
    onDragStart={(event) => event.preventDefault()}
    loading={isSecond ? "eager" : "lazy"}
    width="1500"
    height="2000"
    className={cn("r h4 h5 o jg jh eh iz ae s ez j j0", isSecond ? "eh" : null)}
    alt={props.alt}
    {...props}
  />
);

const ProductItem = ({ index, title, subtitle, price, isLeft }: any) => {
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

const ProductItemHeart = () => (
  <button
    aria-label="Favorites"
    type="button"
    className="dq j2 dr ds dt cw cx cy cz e4 e5 e2 e3 at as du es dw dx an am b2 x dy e8 e9 bj b4 et eu ev j3 ez j4 h j j5 d5"
  >
    <span className="b am b2 dp ef eg eh ei ej n o">
      <span className="dx ek el em dy">
        <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M12 22.5c-.4 0-.7-.1-.9-.4l-7.7-7.8c-.1-.1-3-2.8-3-6.2C.4 4 2.9 1.5 6.8 1.5c2.1 0 4 1.5 5.1 2.6C13 3 15 1.5 17 1.5c4 0 6.4 2.5 6.4 6.6 0 3-2.3 5.5-2.9 6.2l-7.7 7.8c-.1.3-.4.4-.8.4zm-5.1-20c-3.4 0-5.4 2-5.4 5.6 0 2.9 2.6 5.4 2.6 5.4l7.7 7.8c.1.1.2.1.3 0l7.7-7.8c.6-.7 2.7-2.9 2.7-5.5 0-3.5-2-5.6-5.4-5.6-1.9 0-3.8 1.7-4.8 2.6l-.3.6-.4-.4c-.9-1-2.8-2.7-4.7-2.7z"
            fill="currentColor"
          />
        </svg>
      </span>
    </span>
  </button>
);

export const Products = () => {
  const [isTransform, setTransform] = useState("0%");
  const { isMobile } = useWindowSizeState();

  const onPrev = () => {
    const nextX = lastX + 100;
    set({ x: nextX });
    setLastX(nextX);
  };

  const onNext = () => {
    const nextX = lastX - 100;
    set({ x: nextX });
    setLastX(nextX);
  };

  const [{ x }, set] = useSpring(() => ({ x: 0 }));
  const [lastX, setLastX] = useState(0); // to store the last value of x

  const bind = useDrag(({ down, movement: [mx] }) => {
    if (down) {
      set({ x: lastX + mx });
    } else {
      // calculate the nearest multiple of 25 (since 25% represents one product width)
      const newX = Math.round((lastX + mx) / 25);
      set({ x: newX });
      setLastX(newX);
    }
  });

  const containerClass = (type: "container" | "div1") => {
    const containerClasses = {
      container: ["ie if", ""],
      div1: ["p q r s a5 h9 e", "p q r s n5 h9 e"],
    };

    return isMobile ? containerClasses[type][1] : containerClasses[type][0];
  };

  return (
    <div className={containerClass("container")}>
      <div className={containerClass("div1")}>
        <div className="e ig">
          {isMobile ? null : (
            <ButtonPrev onPrev={onPrev} isHidden={lastX === 0} />
          )}
          <div className="an ed it dp">
            <div>
              <animated.div
                {...bind()}
                className="b iu ht"
                style={{
                  transform: x.interpolate(
                    (x) => `translate3d(${x}%, 0px, 0px)`
                  ),
                  //transition: "all 500ms",
                }}
              >
                {Array.from({ length: 15 }).map((_, index) => (
                  <ProductItem
                    key={index}
                    {...productData[0]}
                    isLeft={index < 4}
                    index={index}
                  />
                ))}
              </animated.div>
            </div>
          </div>
          {isMobile ? null : <ButtonNext onNext={onNext} />}
          {isMobile ? <MobileButtons /> : null}
        </div>
      </div>
    </div>
  );
};

export const MobileButtons = ({ isOpposite }: any) => {
  const buttonActiveClass =
    "dq j2 dr ds dt cw cx cy cz at as du dv es dw fk md me d6 d7";
  const buttonActiveItemClass =
    "my mz n0 kk fo fn kl fr fq km fu ft kn ah ag ay";

  const buttonClass =
    "dq j2 dr ds dt cw cx cy cz at as du dv es dw fk md me d6 d7";
  const buttonItemClass = "my mz n0 b7";

  return (
    <div className="r af kk b b2 p q jq mm jv">
      <button className={buttonActiveClass}>
        <div
          style={{
            height: "10px",
            width: "10px",
            borderRadius: "50%",
          }}
          className={cn(
            isOpposite
              ? buttonActiveItemClass
              : "kk fo fn fm fr fq fp fu ft fs ah ag fv"
          )}
        />
      </button>
      <button className={buttonActiveClass}>
        <div
          style={{
            height: "10px",
            width: "10px",
            borderRadius: "50%",
          }}
          className={isOpposite ? buttonItemClass : "k5"}
        />
      </button>
    </div>
  );
};
