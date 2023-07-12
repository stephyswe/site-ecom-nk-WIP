import { ExperienceSmallButtonNext } from "@/app/(site)/components/section/experience/experience-small-list/experience-small-button-next";
import { ExperienceSmallButtonPrev } from "@/app/(site)/components/section/experience/experience-small-list/experience-small-button-prev";
import { ExperienceSmallItem } from "@/app/(site)/components/section/experience/experience-small-list/experience-small-item";
import { MobileButtons } from "@/app/(site)/components/section/product/mobile/mobile-buttons";
import useWindowSizeState from "@/zustand/useWindowSize";

export const ExperienceSmallList = ({ data }: any) => {
  const { isMobile } = useWindowSizeState();
  return (
    <div className="p q r s">
      <div className="p q r s a6">
        <div className="e ig">
          {isMobile ? null : <ExperienceSmallButtonPrev />}
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
          {isMobile ? null : <ExperienceSmallButtonNext />}
          {isMobile ? <MobileButtons isOpposite /> : null}
        </div>
      </div>
    </div>
  );
};
