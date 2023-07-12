import { useState } from "react";

import { cn } from "@/lib/utils";

export const FooterMobileItem = ({ footerClass, title, Content }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const isOpenClass = footerClass ?? "ns";
  return (
    <div onClick={() => setIsOpen(!isOpen)}>
      <button
        type="button"
        className="e dp dq dr ds dt cw cx cy cz at as du es dw dx an am b2 x dy e8 e9 bj et eu ev nd ky hz da mc s d8 d9 g2"
      >
        <div className="s b mn am lv">
          <div className="gp gq x ja ex a5 a6 fk s">{title}</div>
          <span
            className={cn("dx ek el dy lv", isOpen ? "nl" : "ne", "fh n o")}
          >
            <svg
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path
                d="M144 77.71l178.68 178.47L144 434.65l22.71 22.71L368.1 256.18 166.71 55z"
                fill="currentColor"
              />
            </svg>
          </span>
        </div>
        {/* <span
            className="ez nm my nn dz no np nq nr"
            style={{
              top: "-1167.19%",
              left: "-59.8352%",
              width: 1942,
              height: 1942,
            }}
          /> */}
      </button>
      <div className={cn("e et dp p q m h5 o nf", isOpen ? isOpenClass : "ng")}>
        <div className="ez j lw i">
          <div className="d8 d9">{Content}</div>
        </div>
      </div>
    </div>
  );
};
