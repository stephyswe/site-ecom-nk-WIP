import { ExperienceSmallItem } from "@/app/(site)/components/section/experience/experience-small-list/experience-small-item";
import { experienceDataType } from "@/app/(site)/data/experience-data";
import { MobileButtons } from "@/components/ui/button/mobile-buttons";
import { ProductButton } from "@/components/ui/button/product-button";
import useWindowSizeState from "@/zustand/useWindowSize";

export const ExperienceSmallList = ({
  data,
}: {
  data: experienceDataType["small"];
}) => {
  const { isMobile } = useWindowSizeState();
  return (
    <div className="p q r s">
      <div className="p q r s a6">
        <div className="e ig">
          {isMobile ? null : (
            <ProductButton onClick={() => {}} isHidden ariaLabel="Föregående" />
          )}
          <div className="an ed it dp">
            <div>
              <div
                className="b iu ks"
                style={{ transform: "translate3d(0%, 0px, 0px)" }}
              >
                {data.map((item) => (
                  <ExperienceSmallItem key={item.title} {...item} />
                ))}
              </div>
            </div>
          </div>
          {isMobile ? null : (
            <ProductButton onClick={() => {}} ariaLabel="Nästa" />
          )}
          {isMobile ? <MobileButtons isOpposite /> : null}
        </div>
      </div>
    </div>
  );
};
