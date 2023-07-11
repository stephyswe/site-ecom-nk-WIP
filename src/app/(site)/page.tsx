import { Header } from "@/app/(site)/components/nav/header";
import { BannerRelisation } from "@/app/(site)/components/section/banner-realisation";
import { SectionCategory } from "@/app/(site)/components/section/category/category";
import { Hero } from "@/app/(site)/components/section/hero/hero";
import { SectionProduct } from "@/app/(site)/components/section/product/section-product";

export default function Home() {
  return (
    <div>
      <div id="not-supported">
        Det verkar som att du använder en gammal webbläsare, det kan göra att
        allt inte fungerar eller ser ut som det borde.
      </div>
      <div className="container">
        <div className="a b c d">
          <Header />
          <div id="content-container" className="b b6 an e2">
            <div className="p q r s">
              <main className="p q r s">
                <noscript className="d6 d7 ga b am b2 h s d8 d9">
                  Det verkar inte som att din webbläsare har JavaScript
                  aktiverat vilket behövs för att använda den här siten
                </noscript>
                <div className="p q r s">
                  <div>
                    <BannerRelisation />
                    <Hero />
                    <SectionCategory />
                    <SectionProduct />
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
