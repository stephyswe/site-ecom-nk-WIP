import { BannerList } from "@/app/(site)/components/section/banner/banner-list";
import { CategoryList } from "@/app/(site)/components/section/category/category-list";
import { SectionExperience } from "@/app/(site)/components/section/experience/section-experience";
import { HeroList } from "@/app/(site)/components/section/hero/hero-list";
import { SectionMembership } from "@/app/(site)/components/section/membership/section-membership";
import { SectionProduct } from "@/app/(site)/components/section/product/section-product";
import { homepageData } from "@/app/(site)/data/data";

export default function HomePage() {
  const {
    bannerData,
    heroData,
    categoryData,
    productData,
    membershipData,
    experienceData,
  } = homepageData;
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
              <BannerList data={bannerData} />
              <HeroList data={heroData} />
              <CategoryList data={categoryData} />
              <SectionProduct data={productData} />
              <SectionMembership data={membershipData} />
              <SectionExperience data={experienceData} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
