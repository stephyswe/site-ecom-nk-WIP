"use client";

import { ExperienceCityDesktop } from "@/app/(site)/components/section/experience/city/experience-desktop-city";
import { ExperienceCityMobile } from "@/app/(site)/components/section/experience/city/experience-mobile-city";
import { ExperienceLargeList } from "@/app/(site)/components/section/experience/experience-large-list/experience-large-list";
import { ExperienceSmallList } from "@/app/(site)/components/section/experience/experience-small-list/experience-small-list";
import { experienceDataType } from "@/app/(site)/data/experience-data";
import useWindowSizeState from "@/zustand/useWindowSize";

export const SectionExperience = ({ data }: { data: experienceDataType }) => {
  const { isMobile } = useWindowSizeState();
  return (
    <div>
      <div className={isMobile ? "p q r s mj mk k5 t" : "p q r s k3 k4 k5 t"}>
        <div className="p q r s">
          {isMobile ? <ExperienceCityMobile /> : <ExperienceCityDesktop />}
        </div>
        <div className={isMobile ? "p q a0 aj ak al h9" : "p q a0 s h9"}>
          <ExperienceLargeList data={data.large} />
          <ExperienceSmallList data={data.small} />
        </div>
      </div>
    </div>
  );
};
