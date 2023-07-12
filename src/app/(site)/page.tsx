import { BannerRealisation } from "@/app/(site)/components/section/banner-realisation";
import { SectionCategory } from "@/app/(site)/components/section/category/category";
import { SectionExperience } from "@/app/(site)/components/section/experience/section-experience";
import { Hero } from "@/app/(site)/components/section/hero/hero";
import { SectionMembership } from "@/app/(site)/components/section/membership/section-membership";
import { SectionProduct } from "@/app/(site)/components/section/product/section-product";

export default function HomePage() {
  return (
    <div id="content-container" className="b b6 an e2">
      <div className="e">
        <div>
          <div className="g f1 mg f2 lz mh mi mj"></div>
        </div>
      </div>
      <div className="p q r s">
        <main className="p q r s">
          <noscript className="d6 d7 ga b am b2 h s d8 d9">
            Det verkar inte som att din webbläsare har JavaScript aktiverat
            vilket behövs för att använda den här siten
          </noscript>
          <div className="p q r s">
            <div>
              <BannerRealisation />
              <Hero />
              <SectionCategory />
              <SectionProduct />
              <SectionMembership />
              <SectionExperience />
            </div>
          </div>
        </main>
      </div>

    </div>
  );
}
