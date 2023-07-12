import { HeroButton } from "@/components/ui/button/hero-button";

export const HeroItem = ({ title, subtitle, href, image, buttons }: any) => {
  const imageNotFound =
    "data:image/svg+xml;base64,DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUxMiA1MTIiPjxwYXRoIGQ9Ik00MDUgMTM2Ljc5OEwzNzUuMjAyIDEwNyAyNTYgMjI2LjIwMiAxMzYuNzk4IDEwNyAxMDcgMTM2Ljc5OCAyMjYuMjAyIDI1NiAxMDcgMzc1LjIwMiAxMzYuNzk4IDQwNSAyNTYgMjg1Ljc5OCAzNzUuMjAyIDQwNSA0MDUgMzc1LjIwMiAyODUuNzk4IDI1NnoiIGZpbGw9InJnYmEoMCwgMCwgMCwgLjEpIi8+PC9zdmc+";
  return (
    <div className="p q r s gw gz">
      <a className="ar a7 a8 o as aa aw at au" href={href}>
        <div className="dp h0 h1 h2 h3 am b e">
          {image && (
            <img
              loading="lazy"
              className="r h4 h5 o jg jh eh s h7 ez i"
              {...image}
              src={image.src ? image.src : imageNotFound}
            />
          )}
        </div>
      </a>
      <h3 className="gn go gp gq x gr gs gt gu fi h8">{title}</h3>
      <div className="gv h9 ha gg">
        <p className="fi gw">{subtitle}</p>
      </div>
      <div className="p q r s am b b6">
        {buttons.map((button: any) => (
          <HeroButton key={button.title} {...button} />
        ))}
      </div>
    </div>
  );
};
