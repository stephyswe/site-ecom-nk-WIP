import { SvgButtonNav } from "@/components/svg/svg-button-nav";
import { cn } from "@/lib/utils";

export const ButtonPrev = ({ onPrev, isHidden }: any) => {
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
