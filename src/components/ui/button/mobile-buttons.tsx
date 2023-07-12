import { cn } from "@/lib/utils";

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
