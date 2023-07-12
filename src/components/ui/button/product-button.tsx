import { SvgButtonNav } from "@/components/svg/svg-button-nav";
import { cn } from "@/lib/utils";

interface ButtonProps {
  onClick: () => void;
  isHidden?: boolean;
  ariaLabel: string;
}

export const ProductButton = ({
  onClick,
  isHidden,
  ariaLabel,
}: ButtonProps) => {
  const commonClasses =
    "dp dq dr ds dt at as es dw an am b2 x dy ar b7 hd fo he fr hf fu ai ah ax e8 e9 bj jx jy ew ho gm hp hq da fk ez im in y z cw cx cy cz io ip";
  const isPrevButton = ariaLabel === "Tidigare";

  const buttonClass = cn(
    commonClasses,
    isHidden ? "iq" : undefined,
    isPrevButton ? "i" : "j",
    "ir"
  );

  const spanClass = cn("dx ek el em dy", isPrevButton ? "is" : undefined);

  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      type="button"
      className={buttonClass}
    >
      <span className={spanClass}>
        <SvgButtonNav />
      </span>
    </button>
  );
};
