import { ExperienceLargeItem } from "@/app/(site)/components/section/experience/experience-large-list/experience-large-item";
import { experienceDataType } from "@/app/(site)/data/experience-data";
import useWindowSizeState from "@/zustand/useWindowSize";

export const ExperienceLargeList = ({
  data,
}: {
  data: experienceDataType["large"];
}) => {
  const { isMobile } = useWindowSizeState();
  return (
    <div className="p q r s h9">
      <div className="p q r s a6">
        <div className="b gy">
          {data.map((item, index) => {
            const standard = "rs s a3 a4";
            const opposite = isMobile ? "rs s a4 a3" : "rs s a4 hr";
            const className = index === 0 ? standard : opposite;
            return (
              <div className={className} key={item.title}>
                <ExperienceLargeItem {...item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
