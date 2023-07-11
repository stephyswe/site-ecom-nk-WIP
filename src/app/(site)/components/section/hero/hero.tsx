import { heroItems } from "@/app/(site)/components/section/hero/hero-data";
import { HeroItem } from "@/app/(site)/components/section/hero/hero-item";

export const Hero = () => (
  <div>
    <div className="p q a0 aj ak al gx">
      <div className="p q r s a6">
        <div className="b gy">
          {heroItems.map((item) => (
            <HeroItem key={item.title} {...item} />
          ))}
        </div>
      </div>
    </div>
  </div>
);
