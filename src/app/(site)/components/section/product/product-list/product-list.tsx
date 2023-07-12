import { useState } from "react";
import { animated, useSpring } from "react-spring";
import { useDrag } from "react-use-gesture";

import { ProductItem } from "@/app/(site)/components/section/product/product-list/product-item";
import { MobileButtons } from "@/components/ui/button/mobile-buttons";
import { ProductButton } from "@/components/ui/button/product-button";
import useWindowSizeState from "@/zustand/useWindowSize";

export const ProductList = ({ data }: any) => {
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
            <ProductButton
              onClick={onPrev}
              ariaLabel="Tidigare"
              isHidden={lastX === 0}
            />
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
                    {...data[0]}
                    isLeft={index < 4}
                    index={index}
                  />
                ))}
              </animated.div>
            </div>
          </div>
          {isMobile ? null : (
            <ProductButton onClick={onNext} ariaLabel="Nästa" />
          )}
          {isMobile ? <MobileButtons /> : null}
        </div>
      </div>
    </div>
  );
};
