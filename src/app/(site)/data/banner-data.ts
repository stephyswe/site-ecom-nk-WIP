export type BannerItemType = {
  title: string;
  href: string;
};

export type bannerDataType = {
  title: string;
  subtitle: string;
  item: BannerItemType[];
};

export const bannerData: bannerDataType = {
  title: "REALISATIONEN FORTSÄTTER, NU 40–60 %",
  subtitle:
    "Hitta guldkornen du länge drömt om från varumärken som Ganni, ATP Atelier, BOSS och Palm Angels.",
  item: [
    {
      title: "Dam",
      href: "/rea/dam",
    },
    {
      title: "Herr",
      href: "/rea/herr",
    },
    {
      title: "Barn",
      href: "/rea/barn",
    },
    {
      title: "Skönhet",
      href: "/rea/skonhet",
    },
    {
      title: "Sport",
      href: "/rea/sport",
    },
  ],
};
