import { useState } from "react";

import { cn } from "@/lib/utils";

export const ProductImages = () => {
  const [isHovered, setIsHovered] = useState(false);

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
