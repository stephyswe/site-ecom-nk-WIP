type ExperienceCustomDataType = {
  title: string;
  subtitle: string;
  href: string;
  image: {
    alt: string;
    src: string;
    srcSet: string;
  };
};

export type experienceDataWithButtonType = {
  buttons: {
    title: string;
    datavalue: string;
  }[];
} & ExperienceCustomDataType;

export type experienceDataWithLinkType = {
  link: {
    title: string;
  };
} & ExperienceCustomDataType;

export type experienceDataType = {
  small: experienceDataWithLinkType[];
  large: experienceDataWithButtonType[];
};

const experienceSmallData: experienceDataWithLinkType[] = [
  {
    title: "Lacoste på NK Stage",
    subtitle:
      "Upptäck det ikoniska tennis- och livsstilsvarumärket Lacoste på NK Stage i sommar. Här hittar du ett brett utbud av mode för både henne och honom.",
    href: "file:///D:/avdelningar/stockholm/nk-stage",
    image: {
      alt: "NK STAGE",
      src: "/globalassets/sb-2023/puffar-startsida/lacoste-puff2.jpg?ref=32BFD5FB30&w=1920&format=jpg&quality=85",
      srcSet:
        "/globalassets/sb-2023/puffar-startsida/lacoste-puff2.jpg?ref=32BFD5FB30&w=2880&format=jpg&quality=85 1.5x",
    },
    link: {
      title: "Läs mer",
    },
  },
  {
    title: "Ny popup på NK i Göteborg: J.Lindeberg",
    subtitle:
      "Välkommen till J.Lindebergs nya popup på Plan 1. Här hittar du golfkläder, bags, accessoarer och allt du kan tänkas behöva inför golfrundan.&nbsp;",
    href: "file:///D:/avdelningar/goteborg/j.lindeberg",
    image: {
      alt: "NK STAGE",
      src: "/globalassets/sb-2023/puffar-startsida/j-lindeberg-puff.jpg?ref=19850C689F&w=1920&format=jpg&quality=85",
      srcSet:
        "/globalassets/sb-2023/puffar-startsida/j-lindeberg-puff.jpg?ref=19850C689F&w=1920&format=jpg&quality=85",
    },
    link: {
      title: "Hitta i varuhuset",
    },
  },
  {
    title: "Beställ din picknickkasse från NK Saluhall",
    subtitle:
      "Duka upp till en måltid i det gröna med NK Saluhalls picknickkassar. Läs mer om ROT Butik & Kök och Olja&Oliv Delis kassar här.",
    href: "file:///D:/avdelningar/goteborg/j.lindeberg",
    image: {
      alt: "NK STAGE",
      src: "//globalassets/sb-2023/picknick--nya-saluhallsbilder/picknick-puff-startsida.jpg?ref=48883F1BF0&w=1920&format=jpg&quality=85",
      srcSet:
        "/globalassets/sb-2023/picknick--nya-saluhallsbilder/picknick-puff-startsida.jpg?ref=48883F1BF0&w=1920&format=jpg&quality=85",
    },
    link: {
      title: "Läs mer",
    },
  },
  {
    title: "Beställ din picknickkasse från NK Saluhall",
    subtitle:
      "Duka upp till en måltid i det gröna med NK Saluhalls picknickkassar. Läs mer om ROT Butik & Kök och Olja&Oliv Delis kassar här.",
    href: "file:///D:/avdelningar/goteborg/j.lindeberg",
    image: {
      alt: "NK STAGE",
      src: "//globalassets/sb-2023/picknick--nya-saluhallsbilder/picknick-puff-startsida.jpg?ref=48883F1BF0&w=1920&format=jpg&quality=85",
      srcSet:
        "/globalassets/sb-2023/picknick--nya-saluhallsbilder/picknick-puff-startsida.jpg?ref=48883F1BF0&w=1920&format=jpg&quality=85",
    },
    link: {
      title: "Läs mer",
    },
  },
  {
    title: "Beställ din picknickkasse från NK Saluhall",
    subtitle:
      "Duka upp till en måltid i det gröna med NK Saluhalls picknickkassar. Läs mer om ROT Butik & Kök och Olja&Oliv Delis kassar här.",
    href: "file:///D:/avdelningar/goteborg/j.lindeberg",
    image: {
      alt: "NK STAGE",
      src: "//globalassets/sb-2023/picknick--nya-saluhallsbilder/picknick-puff-startsida.jpg?ref=48883F1BF0&w=1920&format=jpg&quality=85",
      srcSet:
        "/globalassets/sb-2023/picknick--nya-saluhallsbilder/picknick-puff-startsida.jpg?ref=48883F1BF0&w=1920&format=jpg&quality=85",
    },
    link: {
      title: "Läs mer",
    },
  },
];

const experienceLargeData: experienceDataWithButtonType[] = [
  {
    title: "Ny avdelning på NK i Stockholm: Tommy Hilfiger Kids",
    subtitle:
      "Hos nyöppnade Tommy Hilfiger Kids hittar du premiumplagg för barn och tonåringar, inspirerade av en amerikansk livsstil vid kusten. Välkommen till Plan 4.",
    href: "file:///D:/avdelningar/stockholm/tommy-hilfiger-kids",
    image: {
      alt: "Tommy Hilfiger Kids",
      src: "globalassets/sb-2023/puffar-startsida/tommy-kids-puff.jpg?ref=92DB042C5B&w=1920&format=jpg&quality=85",
      srcSet:
        "/globalassets/sb-2023/puffar-startsida/tommy-kids-puff.jpg?ref=92DB042C5B&w=2880&format=jpg&quality=85 1.5x",
    },
    buttons: [
      {
        title: "Läs mer",
        datavalue:
          "Ny-avdelning-på-NK-i-Stockholm:-Tommy-Hilfiger-Kids|Läs-mer",
      },
    ],
  },
  {
    title: "Följ NK Göteborg på Instagram",
    subtitle:
      "Vill du få de bästa reatipsen från varuhuset? Följ NK på Instagram för att ta del av utvalda fynd eller klicka dig in till vår guide med information om vilka varumärken och avdelningar som är på realisation, våningsplan för våningsplan.",
    href: "https://www.instagram.com/nkgoteborg/",
    image: {
      alt: "NK STAGE",
      src: "/globalassets/sb-2023/puffar-startsida/insta-gbg-puff.jpg?ref=45A4B22353&w=1920&format=jpg&quality=85",
      srcSet:
        "/globalassets/sb-2023/puffar-startsida/insta-gbg-puff.jpg?ref=45A4B22353&w=2880&format=jpg&quality=85 1.5x",
    },
    buttons: [
      {
        title: "Följ NK Göteborg",
        datavalue: "Följ-NK-Göteborg-på-Instagram|Följ-NK-Göteborg",
      },
      {
        title: "Till reaguiden i varuhuset",
        datavalue: "Följ-NK-Göteborg-på-Instagram|Till-reaguiden-i-varuhuset-",
      },
    ],
  },
];

export const experienceData: experienceDataType = {
  small: experienceSmallData,
  large: experienceLargeData,
};
