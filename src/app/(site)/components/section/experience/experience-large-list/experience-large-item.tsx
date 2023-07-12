import { experienceDataWithButtonType } from "@/app/(site)/data/experience-data";
import { ExperienceButtonLarge } from "@/components/ui/button/experience-large-button";

export const ExperienceLargeItem = ({
  title,
  subtitle,
  href,
  image,
  buttons,
}: experienceDataWithButtonType) => (
  <div className="p q r s gw gz">
    <a className="ar a7 a8 o as aa aw at au" href={href}>
      <div className="dp h0 h1 h2 h3 am b e">
        <img
          loading="lazy"
          width="1280"
          height="960"
          className="r h4 h5 o jg d5 jh eh s h7 ez i"
          {...image}
        />
      </div>
    </a>
    <h3 className="gn go gp gq x gr gs gt gu fi h8">{title}</h3>
    <div className="gv h9 ha gg">
      <p className="fi gw">{subtitle}</p>
    </div>
    <div className="p q r s am b b6">
      {buttons.map((button, index: number) => (
        <ExperienceButtonLarge
          index={index}
          key={button.title}
          {...button}
          href={href}
        />
      ))}
    </div>
  </div>
);
