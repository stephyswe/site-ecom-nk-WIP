"use client";

import { useRef } from "react";
import { useScroll } from "react-use";

import { cn } from "@/lib/utils";
import useMenuState from "@/zustand/useMenu";
import useWindowSizeState from "@/zustand/useWindowSize";

import { Banner } from "./banner";
import { MenuComponent } from "./mega-menu";
import { HeaderMobile } from "./mobile/header-mobile";
import { TopNav } from "./topnav";

export const HeaderComponent = () => {
  const { isMobile } = useWindowSizeState();
  if (isMobile) return <HeaderMobile />;
  return <Header />;
};

export const Header = () => {
  const scrollRef = useRef(null);
  const { x, y } = useScroll(scrollRef);

  const { isOpen } = useMenuState();
  const activeMenu = isOpen === "Hem" ? true : false;
  return (
    <header>
      <div className="e">
        {activeMenu && (
          <div
            className="mn g h j lw i ae s mo"
            style={{ opacity: "0.25", zIndex: 7 }}
          />
        )}
        <div className="e mr m6">
          <div className="mk" />
          <div className={cn("g h i j b c", activeMenu ? "mp" : "k")}>
            <div className="l m n o">
              <Banner />
              <TopNav />
            </div>
            <MenuComponent />
          </div>
          <noscript>
            Det verkar inte som att din webbläsare har JavaScript aktiverat
            vilket behövs för att använda den här siten
          </noscript>
        </div>
      </div>
    </header>
  );
};
